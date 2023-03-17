<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use File;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostController extends BaseCustomController
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
        $post_categories = PostCategory::all();
        return view('backend.post.edit', compact('post_categories'));
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
                'name' => 'required|max:350',
            ],
            [
                'name.required' => 'Tên bài viết không được phép bỏ trống',
                'name.max' => 'Tên bài viết không được phép vượt quá 350 ký tự',
            ]
        );
        $name = $request->input('name');
        $content = $request->input('content');
        $post = [
            'vi' => ['name' => $name, 'content' => $content],
            'en' => ['name' => $name, 'content' => $content],
            'cn' => ['name' => $name, 'content' => $content],
            'jp' => ['name' => $name, 'content' => $content],
            'kr' => ['name' => $name, 'content' => $content],
        ];
        $post["slug"] = Str::slug($name);
        $post_categories = $request->input("post_categories");
        $post["priority"] = $request->input('priority');
        $post["user_id"] = auth()->user()->id;


        //image
        $upload_path = "/uploads/images/";
        $image_url = $request->input('image');
        if ($image_url != null && $image_url != "" && str_contains($image_url, "/uploads/images/")) {
            $start_position = strpos($image_url, "/uploads/images/") + strlen($upload_path);
            $image_name = substr($image_url, $start_position, strlen($image_url) - $start_position);
            $post["image"] = $image_name;
        }

        DB::beginTransaction();
        try {
            $post = Post::create($post);
            $post->postCategories()->attach($post_categories);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
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
    public function edit($locale, $id)
    {
        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        if ($post->image) {
            $post->image = url('uploads/images/' . $post->image);
        }
        $post->post_category_ids = $post->postCategories()->get()->pluck("id")->toArray();
        $post_categories = PostCategory::all();
        return view('backend.post.edit', compact('post', 'post_categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $locale, $id)
    {
        $request->validate(
            [
                'name' => 'required|max:350',
            ],
            [
                'name.required' => 'Tên bài viết không được phép bỏ trống',
                'name.max' => 'Tên bài viết không được phép vượt quá 350 ký tự'
            ]);

        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("postView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa')->withInput();
        }

        $post_categories = $request->input("post_categories");
        $post->name = $request->input('name');
        $post->slug = Str::slug($post->name);
        $post->content = $request->input('content');
        $post->priority = $request->input('priority');
        $post->user_id = auth()->user()->id;

        //image
        $del_image_names = [];
        $image_url = $request->input('image');
        $image_name = "";
        $delete_url = null;
        $upload_path = "/uploads/images/";
        if ($image_url != null && $image_url != "" && str_contains($image_url, "/uploads/images/")) {
            $start_position = strpos($image_url, "/uploads/images/") + strlen($upload_path);
            $image_name = substr($image_url, $start_position, strlen($image_url) - $start_position);
        }

        if ($post->image != null && $image_name != $post->image) {
            array_push($del_image_names, $post->image);
        }
        $post->image = $image_name;
        DB::beginTransaction();
        try {
            $post->update();
            $post->postCategories()->sync($post_categories);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        foreach ($del_image_names as $del_image_name) {
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
    public function destroy($locale, $id)
    {
        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        $del_images = [];
        $image = $post->image;
        if (!is_null($image)) array_push($del_images, $image);
        $post->delete();

        foreach ($del_images as $image) {
            $delete_url = 'uploads\images\\' . $image;
            if (File::exists(public_path($delete_url)))
                File::delete(public_path($delete_url));
        }

        return redirect()->back()->with('success', 'Thành công');
    }
}
