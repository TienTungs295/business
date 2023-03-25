<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $default_locale = "vi";
        if (session()->has('locale')) {
            $locale = session()->get('locale');
            $languages = array_keys(config('app.languages'));
            if (!in_array($locale, $languages)) $locale = $default_locale;
            app()->setlocale($locale);
        } else {
            app()->setlocale($default_locale);
        }
        return $next($request);
    }
}
