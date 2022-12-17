<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use File;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $q = $request->input('q');
        if ($q != "") {
            $posts = Post::where(function ($query) use ($q) {
                $query->where('name', 'like', '%' . $q . '%');
            })->orderBy('id', 'DESC')
                ->paginate(25);
            $posts->appends(['q' => $q]);
        } else {
            $posts = Post::orderBy('id', 'DESC')->paginate(25);
        }
        return View('backend.post.index', compact("posts", "q"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.post.edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|max:255'
            ],
            [
                'name.required' => 'Tên bài viết không được phép bỏ trống',
                'name.max' => 'Tên bài viết không được vượt quá 255 ký tự'
            ]
        );

        $post = new Post;
        $post->name = $request->input('name');
        $post->slug = Str::slug($post->name);
        $post->content = $request->input('content');

        $image_url = $request->input('image');
        $upload_path = "/uploads/images/";
        if ($image_url != null && $image_url != "") {
            $start_position = strpos($image_url, "/uploads/images/") + strlen($upload_path);
            $image_url = substr($image_url, $start_position, strlen($image_url) - $start_position);
        }
        $post->image = $image_url;
        $post->author_id = 1;
        $post->author_type = 1;
        $featured = $request->has("is_featured") ? 1 : 0;
        $post->is_featured = $featured;
        $post->save();

        return redirect()->route("postView")->with('success', 'Thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        return view('backend.post.edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("postView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }

        $request->validate(
            [
                'name' => 'required|max:255',
            ],
            [
                'name.required' => 'Tên bài viết không được phép bỏ trống',
                'name.max' => 'Tên bài viết không được vượt quá 255 ký tự'
            ]);

        $post->name = $request->input('name');
        $post->slug = Str::slug($post->name);
        $post->content = $request->input('content');
        $image_url = $request->input('image');
        $upload_path = "/uploads/images/";
        if ($image_url != null && $image_url != "") {
            $start_position = strpos($image_url, "/uploads/images/") + strlen($upload_path);
            $image_url = substr($image_url, $start_position, strlen($image_url) - $start_position);
        }

        if ($image_url != $post->image && $post->image != null)
            $del_image_name = $post->image;

        $post->image = $image_url;
        $featured = $request->has("is_featured") ? 1 : 0;
        $post->is_featured = $featured;
        $post->update();
        if (!empty($del_image_name)) {
            $delete_url = 'uploads\images\\' . $del_image_name;
            if (File::exists(public_path($delete_url))) {
                File::delete(public_path($delete_url));
            }
        }
        return redirect()->route("postView")->with('success', 'Thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }

        $post->delete();

        return redirect()->back()->with('success', 'Thành công');
    }
}
