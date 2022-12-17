<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Http\Responses\AjaxResponse;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;

class CategoryRestController extends Controller
{
    public function findAll(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $categories = ProjectCategory::with('childs')->where('parent_id', 0)->orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->get();
        return $ajax_response->setData($categories)->toApiResponse();
    }

    public function findAllWithoutChild(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $categories = ProjectCategory::orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->get();
        return $ajax_response->setData($categories)->toApiResponse();
    }


    public function findTop(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $categories = ProjectCategory::where('is_featured', true)
            ->orderByRaw('ISNULL(priority), priority ASC')
            ->orderBy('updated_at', 'DESC')
            ->limit(10)->get();
        return $ajax_response->setData($categories)->toApiResponse();
    }
}
