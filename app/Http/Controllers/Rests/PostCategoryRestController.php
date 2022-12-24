<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Http\Responses\AjaxResponse;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;

class PostCategoryRestController extends Controller
{
    public function findAll(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $categories = ProjectCategory::orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->get();
        return $ajax_response->setData($categories)->toApiResponse();
    }

}
