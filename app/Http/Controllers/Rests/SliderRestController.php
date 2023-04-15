<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Http\Responses\AjaxResponse;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderRestController extends Controller
{
    public function findAll(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $sliders = Slider::orderByRaw('ISNULL(priority), priority ASC')->orderBy('updated_at', 'DESC')->get();
        return $ajax_response->setData($sliders)->toApiResponse();
    }
}
