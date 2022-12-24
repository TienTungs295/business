<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\BaseCustomController;
use App\Http\Responses\AjaxResponse;
use App\Models\Image;
use App\Models\ProjectCategory;
use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ProjectRestController extends BaseCustomController
{

    public function findAll(Request $request)
    {
        $category_id = $request->input("category_id");
        $page_size = $request->input('page_size');
        if (is_null($page_size)) $page_size = 7;
        $ajax_response = new AjaxResponse();
        if (!is_null($category_id)) {
            try {
                ProjectCategory::findOrFail($category_id);
            } catch (ModelNotFoundException $e) {
                return $ajax_response->setMessage("Danh mục dự án không tồn tại hoặc đã bị xóa");
            }
        }
        $projects = Project::where('category_id', $category_id)->orderByRaw('ISNULL(priority), priority ASC')->orderBy("updated_at", "DESC")->simplePaginate($page_size);
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
