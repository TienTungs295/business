<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Http\Responses\AjaxResponse;
use App\Models\Project;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;

class ProjectCategoryRestController extends Controller
{
    public function findAll(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $categories = ProjectCategory::orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->get();
        return $ajax_response->setData($categories)->toApiResponse();
    }

    public function findDefaultCategory(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $category = ProjectCategory::where('is_default', 1)->orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->first();
        $projectByCategory = [];
        if ($category != null) {
            $query = Project::whereHas('projectCategories', function ($query2) use ($category) {
                $query2->where('category_id', $category->id);
            });
            $projectByCategory = $query->orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->get();
        }
        return $ajax_response->setData(array("category" => $category, "projects" => $projectByCategory))->toApiResponse();
    }
}
