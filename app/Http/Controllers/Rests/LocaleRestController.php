<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Http\Responses\AjaxResponse;
use Illuminate\Http\Request;

class LocaleRestController extends Controller
{
    public function changeLocale(Request $request)
    {
        $locale = $request->input("locale");
        $languages = array_keys(config('app.languages'));
        if (!in_array($locale, $languages)) $locale = "vi";
        app()->setLocale($locale);
        session()->put("locale", $locale);
        $ajax_response = new AjaxResponse();
        return $ajax_response->setData($locale)->toApiResponse();
    }

    public function getLocale(Request $request)
    {
        $ajax_response = new AjaxResponse();
        return $ajax_response->setData(session()->getLocale("locale"))->toApiResponse();
    }
}
