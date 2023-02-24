<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\BaseCustomController;
use App\Http\Responses\AjaxResponse;
use App\Models\Image;
use App\Models\ProjectCategory;
use App\Models\Project;
use App\Models\ProjectField;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ProjectRestController extends BaseCustomController
{

    public function findAll(Request $request)
    {
        $category_id = $request->input("category_id");
        $field_id = $request->input("field_id");
        $area_id = $request->input("area_id");
        $name = $request->input("name");
        $sort = $request->input("sort");
        $page_size = 12;
        $page_size_param = $request->input("page_size");
        if (!is_null($page_size_param)) $page_size = $page_size_param;
        $ajax_response = new AjaxResponse();
        $query = Project::where('id', '>', 1);
        if (!is_null($category_id)) {
            try {
                ProjectCategory::findOrFail($category_id);
            } catch (ModelNotFoundException $e) {
                return $ajax_response->setMessage("Danh mục dự án không tồn tại hoặc đã bị xóa");
            }
            $query->whereHas('projectCategories', function ($query2) use ($category_id) {
                $query2->where('category_id', $category_id);
            });
        }

        if (!is_null($field_id)) {
            try {
                ProjectField::findOrFail($field_id);
            } catch (ModelNotFoundException $e) {
                return $ajax_response->setMessage("Lĩnh vực không tồn tại hoặc đã bị xóa");
            }
            $query->whereHas('projectFields', function ($query3) use ($field_id) {
                $query3->where('field_id', $field_id);
            });
        }

        if (!is_null($area_id)) {
            try {
                ProjectField::findOrFail($area_id);
            } catch (ModelNotFoundException $e) {
                return $ajax_response->setMessage("Khu vực không tồn tại hoặc đã bị xóa");
            }
            $query->where('project_area_id', $area_id);
        }
        if (isset($name)) $query->where('name', 'like', '%' . $name . '%');

        if (!is_null($sort)) {
            if ($sort == 'name') {
                $query->orderBy("name", "ASC")->orderByRaw('ISNULL(priority), priority ASC');
            }
            if ($sort == 'date') {
                $query->orderBy("updated_at", "DESC")->orderByRaw('ISNULL(priority), priority ASC');
            }
        } else {
            $query->orderByRaw('ISNULL(priority), priority ASC')->orderBy("updated_at", "DESC");
        }
        $projects = $query->simplePaginate($page_size);
        return $ajax_response->setData($projects)->toApiResponse();
    }

    public function findRandom(Request $request)
    {
        $page_size = 7;
        $ajax_response = new AjaxResponse();
        $projects = Project::inRandomOrder()->limit($page_size)->get();
        return $ajax_response->setData($projects)->toApiResponse();
    }

    public function detail(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $id = $request->input("id");
        if (is_null($id)) {
            $ajax_response->setMessage("Dự án không hợp lệ");
        }
        try {
            $project = Project::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            $ajax_response->setMessage("Dự án không tồn tại hoặc đã bị xóa");
        }

        $images = [];
        $image = new Image();
        $image->id = 0;
        $image->image = $project->image;
        array_push($images, $image);
        $plus_image = $project->images()->get()->toArray();
        $images = array_merge($images, $plus_image);
        $project->images = $images;
        return $ajax_response->setData($project)->toApiResponse();
    }
}
