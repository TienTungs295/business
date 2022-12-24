<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Project;
use App\Http\Responses\AjaxResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class CommentRestController extends Controller
{
    public function save(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $project_id = $request->post("project_id");
        try {
            Project::findOrFail($project_id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Dự án không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        $comment = new Comment();
        $text_comment = $request->post("comment");
        $customer_name = $request->post("customer_name");
        $customer_email = $request->post("customer_email");
        if (!isset($customer_name))
            return $ajax_response->setMessage("Vui lòng nhập tên")->toApiResponse();
        if (!isset($customer_email))
            return $ajax_response->setMessage("Vui lòng nhập email")->toApiResponse();
        if (!isset($text_comment))
            return $ajax_response->setMessage("Vui lòng nhập nội dung bình luận")->toApiResponse();

        $comment->comment = $text_comment;
        $comment->status = 1;
        $comment->customer_name = $customer_name;
        $comment->customer_email = $customer_email;
        $comment->project_id = $project_id;
        $comment->save();
        return $ajax_response->setData($comment)->toApiResponse();
    }


    public function findByPost(Request $request)
    {
        $page_size = 12;
        $hasMorePage = false;
        $last_id = $request->input("last_id");
        $ajax_response = new AjaxResponse();
        $project_id = $request->input("project_id");
        try {
            Project::findOrFail($project_id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Dự án không tồn tại hoặc đã bị xóa")->toApiResponse();
        }

        //paginate comments
        $query = Comment::where('project_id', $project_id)->where('status', 2);
        if (!is_null($last_id)) $query->where('id', '<', $last_id);
        $query->orderBy("created_at", "DESC");
        $comments = $query->take($page_size + 1)->get()->toArray();
        if (sizeof($comments) > $page_size) {
            $hasMorePage = true;
            array_pop($comments);
        }

        //count total comments
        $totalComments = Comment::where('project_id', $project_id)->where('status', 2)->count();
        return $ajax_response->setData(array('data' => $comments, 'hasMorePage' => $hasMorePage, 'totalComments' => $totalComments))->toApiResponse();
    }
}
