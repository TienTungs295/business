<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//        $total_pending_order = Order::where('status', 1)->count();
//        $total_pending_review = Review::where('status', 1)->count();
//        $total_project = Project::all()->count();
//        $total_post = Post::all()->count();
//        $total_customer_info = CustomerInfo::all()->count();
//        $total_customer_account = CustomerAccount::all()->count();
        return View('backend.home.index');
    }

}
