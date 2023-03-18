<?php

namespace App\Http\Controllers\Rests;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use App\Http\Responses\AjaxResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Validator;

class CommentRestController extends Controller
{
    public function save(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $post_id = $request->post("post_id");
        try {
            Post::findOrFail($post_id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Bài viết không tồn tại hoặc đã bị xóa")->toApiResponse();
        }

        $validator = Validator::make($request->all(),
            [
                'customer_name' => 'required|string|max:200',
                'customer_email' => 'required|string|email|max:200',
                'comment' => 'required|string|max:5000',
            ],
            [
                'customer_name.required' => 'Họ và tên không được phép bỏ trống',
                'customer_email.required' => 'Email không được phép bỏ trống',
                'comment.required' => 'Nội dung bình luận không được phép bỏ trống',
                'customer_name.max' => 'Họ và tên không được phép vượt quá 200 ký tự',
                'customer_email.max' => 'Email không được phép vượt quá 200 ký tự',
                'comment.max' => 'Nội dung bình luận không được phép vượt quá 5000 ký tự',
                'customer_email.email' => 'Email không hợp lệ',
            ]);

        if ($validator->fails()) {
            return $ajax_response->setErrors($validator->errors())->toApiResponse();
        }

        $comment = new Comment();
        $text_comment = $request->post("comment");
        $customer_name = $request->post("customer_name");
        $customer_email = $request->post("customer_email");

        $comment->comment = $text_comment;
        $comment->status = 1;
        $comment->customer_name = $customer_name;
        $comment->customer_email = $customer_email;
        $comment->post_id = $post_id;
        $comment->save();
        return $ajax_response->setData($comment)->setMessage("Bình luận thành công, vui lòng chờ xác nhận của quản trị viên")->toApiResponse();
    }


    public function findByPost(Request $request)
    {
        $page_size = 10;
        $ajax_response = new AjaxResponse();
        $post_id = $request->input("post_id");
        try {
            Post::findOrFail($post_id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Bài viết không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        //paginate comments
        $comments = Comment::where('post_id', $post_id)->where('status', 2)->orderBy("id", "DESC")->simplePaginate($page_size);
        return $ajax_response->setData($comments)->toApiResponse();
    }

    public function countPendingComment(Request $request)
    {
        $ajax_response = new AjaxResponse();
        $count = Comment::where('status', 1)->count();
        return $ajax_response->setData($count)->toApiResponse();
    }
}
