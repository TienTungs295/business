<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\PostCategory;

class PostCategoryController extends BaseCustomController
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
            $post_categories = PostCategory::with('user')->where(function ($query) use ($q) {
                $query->where('name', 'like', '%' . $q . '%');
            })->orderBy('id', 'DESC')
                ->paginate(25);
            $post_categories->appends(['q' => $q]);
        } else {
            $post_categories = PostCategory::with('user')->orderBy('id', 'DESC')->paginate(25);
        }
        return View('backend.post-category.index')->with(['post_categories' => $post_categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.post-category.edit');
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
                'name' => 'required|max:350'
            ],
            [
                'name.required' => 'Tên danh mục không được phép bỏ trống',
                'name.max' => 'Tên danh mục không được vượt quá 350 ký tự'
            ]);

        $count_exist = PostCategory::where('name', $request->name)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên danh mục bài viết đã tồn tại');
        }

        $post_category = new PostCategory;
        $post_category->name = $request->input('name');
        $post_category->priority = $request->input('priority');
        $post_category->user_id = auth()->user()->id;
        $post_category->save();
        return redirect()->route("postCategoryView")->with('success', 'Thành công');
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
            $post_category = PostCategory::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("postCategoryView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        $post_categories = PostCategory::where('id', '!=', $id)->get()->toArray();
        return view('backend.post-category.edit', compact('post_category', 'post_categories'));
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
            $post_category = PostCategory::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("postCategoryView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }

        $request->validate(
            [
                'name' => 'required|max:350'
            ],
            [
                'name.required' => 'Tên danh mục bài viết không được phép bỏ trống',
                'name.max' => 'Tên danh mục bài viết không được vượt quá 350 ký tự'
            ]);

        $count_exist = PostCategory::where('name', $request->name)->where('id', '<>', $id)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên danh mục bài viết đã tồn tại');
        }

        $post_category->name = $request->input('name');
        $post_category->priority = $request->input('priority');
        $post_category->user_id = auth()->user()->id;
        $post_category->update();
        return redirect()->route("postCategoryView")->with('success', 'Thành công');
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
            $post_category = PostCategory::findOrFail($id);
            $post_category->delete();
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        return redirect()->back()->with('success', 'Thành công');
    }
}
