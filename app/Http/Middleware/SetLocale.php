<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class SetLocale
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
        $languages = array_keys(config('app.languages'));
        $route = $request->route();
        if (request('change_language')) {
            $locale = request('change_language');
            if (in_array($locale, $languages)) {
                app()->setLocale($locale);
                URL::defaults(['locale' => $locale]);
                $route->parameters["locale"]=$locale;
                return redirect(route($route->getName(), $route->parameters));
            }
            return $this->initLocale($request, $next);
        } else {
            return $this->initLocale($request, $next);
        }
    }

    private function initLocale(Request $request, Closure $next)
    {
        $languages = array_keys(config('app.languages'));
        $locale = $request->segment(1);
        if (!in_array($locale, $languages)) $locale = "vi";
        app()->setLocale($locale);
        URL::defaults(['locale' => $locale]);
        return $next($request);
    }
}
