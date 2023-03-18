<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\CustomerInfo;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Project;
use App\Models\ProjectArea;
use App\Models\ProjectCategory;
use App\Models\ProjectField;
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
        $total_pending_comments = Comment::where('status', 1)->count();
        $total_project_categories = ProjectCategory::all()->count();
        $total_projects = Project::all()->count();
        $total_post_categories = PostCategory::all()->count();
        $total_posts = Post::all()->count();
        $total_customer_infos = CustomerInfo::all()->count();
        $total_project_fields = ProjectField::all()->count();
        $total_project_areas = ProjectArea::all()->count();
        return View('backend.home.index', compact(
                'total_pending_comments',
                'total_project_categories',
                'total_projects',
                'total_post_categories',
                'total_posts',
                'total_customer_infos',
                'total_project_fields',
                'total_project_areas'
            )
        );
    }

}
