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
            return $ajax_response->setMessage("Sản phẩm không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        $comment = new Comment();
        $comment = $request->post("comment");
        $star = $request->post("star");
        if (is_null($star) || $star == 0)
            return $ajax_response->setMessage("Vui lòng chọn số sao đánh giá")->toApiResponse();
        if ($star < 1 || $star > 5)
            return $ajax_response->setMessage("Số sao đánh giá không hợp lệ")->toApiResponse();
        if (!isset($comment))
            return $ajax_response->setMessage("Nội dung đánh giá không được phép bỏ trống")->toApiResponse();
        $comment->comment = $comment;
        $comment->star = $star;
        $comment->status = 1;
        $comment->project_id = $project_id;
        $comment->customer_id = auth()->user()->id;
        $comment->save();
        return $ajax_response->setData($comment)->toApiResponse();
    }

    public function delete(Request $request)
    {
        $ajax_response = new AjaxResponse();
        try {
            $comment = Comment::findOrFail($request->input("id"));
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Đánh giá không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        if ($comment->customer_id != auth()->user()->id) {
            return $ajax_response->setMessage("Bạn không đủ quyền thực hiện tác vụ này")->toApiResponse();
        }
        $comment->delete();
        return $ajax_response->setData($comment)->toApiResponse();
    }

    public function findByPost(Request $request)
    {
        $page_size = 12;
        $hasMorePage = false;
        $last_id = $request->input("last_id");
        $ajax_response = new AjaxResponse();
        $project_id = $request->input("project_id");
        $user = auth()->user();
        try {
            Project::findOrFail($project_id);
        } catch (ModelNotFoundException $e) {
            return $ajax_response->setMessage("Sản phẩm không tồn tại hoặc đã bị xóa")->toApiResponse();
        }
        $query = Comment::with(['customer'])->where(function ($query) use ($project_id, $last_id, $user) {
            $query->where('project_id', $project_id);
            if (!is_null($last_id)) $query->where('id', '<', $last_id);
            $query->where(function ($query) use ($last_id, $user) {
                $query->where('status', 2);
                if ($user != null) {
                    $query->orWhere(function ($query) use ($user) {
                        $query->where('status', 1);
                        $query->where('customer_id', $user->id);
                    });
                }
            });
        });
        $query->orderBy("created_at","DESC");
        $comments = $query->take($page_size + 1)->get()->toArray();
        if (sizeof($comments) > $page_size) {
            $hasMorePage = true;
            array_pop($comments);
        }

        //count total comments
        $totalComments = Comment::where('project_id', $project_id)
            ->where(function ($query) use ($user) {
                $query->where('status', 2);
                if (!is_null($user)) {
                    $query->orWhere(function ($query) use ($user) {
                        $query->where('status', 1);
                        $query->where('customer_id', $user->id);
                    });
                }
            })->count();
        return $ajax_response->setData(array('data' => $comments, 'hasMorePage' => $hasMorePage, 'totalComments' => $totalComments))->toApiResponse();
    }

    public function countPendingComment()
    {
        $ajax_response = new AjaxResponse();
        $count = Comment::where('status', 1)->count();
        return $ajax_response->setData($count)->toApiResponse();
    }
}
