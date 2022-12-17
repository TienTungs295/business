<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Http\Responses\AjaxResponse;
use App\Models\Post;
use App\Models\ProjectCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class PostRestController extends Controller
{

    public function findAll(Request $request)
    {
        $page_size = $request->input("page_size");
        if (!isset($page_size)) $page_size = 3;
        $ajax_response = new AjaxResponse();
        $posts = Post::orderBy("updated_at", "DESC")->paginate($page_size);
        return $ajax_response->setData($posts)->toApiResponse();
    }

    public function detail(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $id = $request->input("id");
        $post = null;
        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Đối tượng không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        $next_post = Post::where('id', '>', $id)->first();
        $prev_post = Post::where('id', '<', $id)->orderBy('id','DESC')->first();
        return $ajax_response->setData(array(
            'prev_post' => $prev_post,
            'post' => $post,
            'next_post' => $next_post
        ))->toApiResponse();
    }

    public function related(Request $request)
    {
        $id = $request->input("id");
        $ajax_response = new AjaxResponse();
        $posts = Post::where('id', '!=', $id)->take(2)->get();
        return $ajax_response->setData($posts)->toApiResponse();
    }

    public function recent(Request $request)
    {
        $id = $request->input("id");
        $ajax_response = new AjaxResponse();
        $query = Post::where('id', '>', 1);
        if (isset($id)) $query->where('id', '!=', $id);
        $posts = $query->orderBy('updated_at', 'DESC')->take(3)->get();
        return $ajax_response->setData($posts)->toApiResponse();
    }
}
