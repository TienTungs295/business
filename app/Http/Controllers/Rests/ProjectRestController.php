<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\BaseCustomController;
use App\Http\Controllers\Controller;
use App\Http\Responses\AjaxResponse;
use App\Models\Image;
use App\Models\ProjectCategory;
use App\Models\ProjectCollection;
use App\Models\Project;
use App\Models\OrderProject;
use Carbon\Carbon;
use \stdClass;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function PHPUnit\Framework\isEmpty;

class ProjectRestController extends BaseCustomController
{
    public function findByName(Request $request)
    {
        $name = $request->input('name');
        $exclude_id = $request->input('exclude_id');
        $project_query = Project::with(['projectLabels'])->where('id', '>', 0);
        if (isset($exclude_id)) {
            $project_query->where('id', '!=', $exclude_id);
        };
        $projects = $project_query->where('name', 'like', '%' . $name . '%')->get();
        return response()->json(["status" => "success", "data" => compact('projects')]);
    }

    public function findByCollection(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $collection_id = $request->input('collection_id');
        $collections = ProjectCollection::orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->take(4)->get()->toArray();
        $projects = [];
        if (is_null($collection_id)) {
            if (sizeof($collections) == 0) return $ajax_response->setData($projects)->toApiResponse();
            $firstCollection = $collections[0];
            $collection_id = $firstCollection["id"];
        }
        try {
            ProjectCollection::findOrFail($collection_id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Đối tượng không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        $projects = Project::with(['projectLabels'])->whereHas('projectCollections', function ($query) use ($collection_id) {
            $query->where('project_collection_id', $collection_id);
        })->orderBy('updated_at', 'DESC')->paginate(8);
        return $ajax_response->setData(array("projects" => $projects, "collections" => $collections))->toApiResponse();
    }

    public function findAll(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $param = json_decode($request->input("param"));
        $page_size = 12;
        $sort = "";
        $collection_ids = null;
        if (isset($param->page_size) && !empty($param->page_size)) $page_size = $param->page_size;
        if (isset($param->sort) && !empty($param->sort)) $sort = $param->sort;
        $current_time = Carbon::now();
        $category_id = isset($param->category_id) ? $param->category_id : null;
        $query = Project::with(['projectLabels'])->where(function ($query) use ($param, $current_time, $category_id, $ajax_response) {
            $name = isset($param->name) ? $param->name : null;
            $min_price = null;
            $max_price = null;
            $is_contact = false;
            if (isset($param->price)) {
                if ($param->price == "option1") {
                    $max_price = 50000;
                } elseif ($param->price == "option2") {
                    $min_price = 50000;
                    $max_price = 100000;
                } elseif ($param->price == "option3") {
                    $min_price = 100000;
                    $max_price = 200000;
                } elseif ($param->price == "option4") {
                    $min_price = 200000;
                    $max_price = 500000;
                } elseif ($param->price == "option5") {
                    $min_price = 500000;
                    $max_price = 1000000;
                } elseif ($param->price == "option6") {
                    $min_price = 1000000;
                } elseif ($param->price == "option7") {
                    $is_contact = true;
                }
            }
            $collection_ids = null;
            if (isset($param->collection_ids) && count($param->collection_ids) > 0) $collection_ids = array_map('intval', $param->collection_ids);
            if (!is_null($category_id)) {
                $cat = ProjectCategory::with(["allChilds"])->where('id', $category_id)->first();
                if (is_null($cat)) return $ajax_response->setMessage("Danh mục không tồn tại hoặc đã bị xóa")->toApiResponse();
                $childIds = $this->getAllChildWithRecursive($cat->allChilds()->get());
                array_push($childIds, (int)$category_id);
                $query->whereIn('category_id', $childIds);
            }
            if ($collection_ids != null) {
                $query->whereHas('projectCollections', function ($query) use ($collection_ids) {
                    $query->whereIn('project_collection_id', $collection_ids);
                });
            }
            if (!empty($name)) $query->where('name', 'like', '%' . $name . '%');
            if ($is_contact) $query->where('is_contact', true);
            if (!is_null($min_price) || !is_null($max_price)) {
                //find by project on sale
                $query->where(function ($query) use ($current_time, $min_price, $max_price) {
                    $query->orWhere(function ($query) use ($current_time, $min_price, $max_price) {
                        if (!is_null($min_price) && is_null($max_price)) {
                            $query->where('sale_price', ">", $min_price);
                        } else if (is_null($min_price) && !is_null($max_price)) {
                            $query->where('sale_price', "<", $max_price);
                        } else {
                            $query->where('sale_price', ">=", $min_price);
                            $query->where('sale_price', "<=", $max_price);
                        }
                        $query->where(function ($query) use ($current_time) {
                            $query->orWhere(function ($query) {
                                $query->where('start_date', null);
                                $query->where('end_date', null);
                            });
                            $query->orWhere(function ($query) use ($current_time) {
                                $query->where('start_date', null);
                                $query->where('end_date', '>=', $current_time);
                            });
                            $query->orWhere(function ($query) use ($current_time) {
                                $query->where('start_date', '<=', $current_time);
                                $query->where('end_date', null);
                            });
                            $query->orWhere(function ($query) use ($current_time) {
                                $query->where('start_date', '<=', $current_time);
                                $query->where('end_date', '>=', $current_time);
                            });
                        });
                    });
                    $query->orWhere(function ($query) use ($current_time, $min_price, $max_price) {
                        if (!is_null($min_price) && is_null($max_price)) {
                            $query->where('price', ">", $min_price);
                        } else if (is_null($min_price) && !is_null($max_price)) {
                            $query->where('price', "<", $max_price);
                        } else {
                            $query->where('price', ">=", $min_price);
                            $query->where('price', "<=", $max_price);
                        }
                        $query->where(function ($query) use ($current_time) {
                            //find by normal price of project
                            $query->orWhere('sale_price', null);

                            //find by normal price when expire sale
                            $query->orWhere(function ($query) use ($current_time) {
                                $query->where('sale_price', '!=', null);
                                $query->where(function ($query) use ($current_time) {
                                    $query->orWhere('start_date', '>', $current_time);
                                    $query->orWhere('end_date', '<', $current_time);
                                });
                            });
                        });
                    });
                });
            }
        });
        if ($sort == "date_asc") $query->orderBy("updated_at", "ASC");
        if ($sort == "date_desc") $query->orderBy("updated_at", "DESC");
        if ($sort == "price_asc" || $sort == "price_desc") {
            $sortType = $sort == "price_asc" ? "ASC" : "DESC";
            $query->orderByRaw("CASE WHEN (sale_price is not null && ((start_date is null and end_date is null) or (start_date is null and end_date >= '" . $current_time . "') or (start_date <= '" . $current_time . "' and end_date is null) or (start_date <= '" . $current_time . "' and end_date >= '" . $current_time . "'))) THEN sale_price ELSE price END " . $sortType);
        }
        if ($sort == "name_asc") $query->orderBy("name", "ASC");
        if ($sort == "name_desc") $query->orderBy("name", "DESC");
        $projects = $query->paginate($page_size);
        $category_parent_ids = [];
        if (!is_null($category_id)) {
            try {
                $category = ProjectCategory::findOrFail($category_id);
                $category_parent_ids = $category->parentIds()->toArray();
            } catch (ModelNotFoundException $e) {
                $ajax_response->setMessage("Danh mục không tồn tại hoặc đã bị xóa")->toApiResponse();
            }
        }
        return $ajax_response->setData(array("projects" => $projects, "category_parent_ids" => $category_parent_ids))->toApiResponse();
    }

    public function findFeatured(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $projects = Project::with(['projectLabels'])->where('is_featured', true)->orderBy("updated_at", "DESC")->paginate(12)->toArray();
        return $ajax_response->setData($projects)->toApiResponse();
    }

    public function findOnSale(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $projects = Project::with(['projectLabels'])->where(function ($query) {
            $query->where('sale_price', "!=", null);
            $query->where(function ($query) {
                $current_time = Carbon::now();
                $query->orWhere(function ($query) use ($current_time) {
                    $query->where('start_date', null);
                    $query->where('end_date', null);
                });
                $query->orWhere(function ($query) use ($current_time) {
                    $query->where('start_date', null);
                    $query->where('end_date', '>=', $current_time);
                });
                $query->orWhere(function ($query) use ($current_time) {
                    $query->where('start_date', '<=', $current_time);
                    $query->where('end_date', null);
                });
                $query->orWhere(function ($query) use ($current_time) {
                    $query->where('start_date', '<=', $current_time);
                    $query->where('end_date', '>=', $current_time);
                });
            });
        })->orderBy('updated_at', 'DESC')->paginate(12);
        return $ajax_response->setData($projects)->toApiResponse();
    }

    public function findTrending(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $page_size = 12;
        $query = Project::where("is_trending", 1)->orderBy('updated_at', 'DESC')->take($page_size)->get();
        $total_projects = $query->count();
        $projects = $query->toArray();
        if ($total_projects >= 12) return $ajax_response->setData($projects)->toApiResponse();
        $miss_projects = $page_size - $total_projects;
        $query2 = Project::with(['projectLabels'])
            ->join('ec_order_project', 'ec_order_project.project_id', '=',
                'ec_projects.id');
        if ($total_projects > 0) $query2->whereNotIn("ec_projects.id", $query->pluck("id")->toArray());
        $bonus_projects = $query2->groupByRaw('ec_projects.id')
            ->orderByRaw("SUM(ec_order_project.qty) DESC,ec_order_project.updated_at DESC")
            ->distinct()
            ->select([
                'ec_projects.*'
            ])
            ->take($miss_projects)->get()->toArray();
        $projects = array_merge($projects, $bonus_projects);
        return $ajax_response->setData($projects)->toApiResponse();
    }

    public function detail(Request $request)
    {
        $related_size = 5;
        $ajax_response = new AjaxResponse();
        $id = $request->input("id");
        $project = null;
        try {
            $project = Project::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Đối tượng không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        $images = [];
        $image = new Image();
        $image->id = 0;
        $image->image = $project->image;
        array_push($images, $image);
        $plus_image = $project->images()->get()->toArray();
        $images = array_merge($images, $plus_image);
        $project->images = $images;
        $project->category = $project->category()->first();
        $related_projects = $project->projectsRelated()->orderBy("id", 'DESC')->limit(5)->get();
        $total_related = $related_projects->count();
        if ($total_related < $related_size) {
            $related_project_ids = [];
            $related_projects = [];
            if ($total_related > 0) {
                $related_project_ids = $related_projects->pluck("id")->toArray();
                $related_projects = $related_projects->toArray();
            }
            $miss = $related_size - $total_related;
            $query = Project::where('id', '!=', $id)
                ->where("category_id", $project->category_id);
            if (count($related_project_ids) > 0) $query->whereNotIn("id", $related_project_ids);
            $bonus_projects = $query->inRandomOrder()->limit($miss)->get();
            $total_bonus = $bonus_projects->count();
            if ($total_bonus > 0) $related_projects = array_merge($related_projects, $bonus_projects->toArray());
            if ($total_bonus < $miss) {
                if ($total_bonus > 0) $related_project_ids = array_merge($related_project_ids, $bonus_projects->pluck("id")->toArray());
                $miss2 = $miss - $total_bonus;
                $random_query = Project::where('id', '!=', $id);
                if (count($related_project_ids) > 0) $random_query->whereNotIn("id", $related_project_ids);
                $random_projects = $random_query->inRandomOrder()->limit($miss2)->get()->toArray();
                if (count($random_projects) > 0) $related_projects = array_merge($related_projects, $random_projects);
            }
        }
        $project->related_projects = $related_projects;
        return $ajax_response->setData($project)->toApiResponse();
    }

    public function findTopRate(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $projects = Project::with(['projectLabels'])->whereHas('reviews', function ($query) {
            $query->orderBy('star', 'DESC')->orderBy('updated_at', 'DESC');
        })->paginate(12)->toArray();
        return $ajax_response->setData($projects)->toApiResponse();
    }

    public function findFlashSale(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $current_time = Carbon::now();
        $projects = Project::where('is_flash_sale', 1)
            ->where('start_date', '<=', $current_time)
            ->where('end_date', '>=', $current_time)
            ->orderBy('updated_at', 'DESC')->take(12)->get();
        return $ajax_response->setData($projects)->toApiResponse();
    }
}
