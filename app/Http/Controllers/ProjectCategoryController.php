<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\ProjectCategory;
use File;

class ProjectCategoryController extends BaseCustomController
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
            $project_categories = ProjectCategory::with('user')->where(function ($query) use ($q) {
                $query->where('name', 'like', '%' . $q . '%');
            })->orderBy('id', 'DESC')
                ->paginate(25);
            $project_categories->appends(['q' => $q]);
        } else {
            $project_categories = ProjectCategory::with('user')->orderBy('id', 'DESC')->paginate(25);
        }
        return View('backend.project-category.index')->with(['project_categories' => $project_categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.project-category.edit');
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
                'name.required' => 'Tên danh mục dự án không được phép bỏ trống',
                'name.max' => 'Tên danh mục dự án không được vượt quá 350 ký tự'
            ]);

        $count_exist = ProjectCategory::where('name', $request->name)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên danh mục dự án đã tồn tại')->withInput();
        }

        $project_category = new ProjectCategory;
        $project_category->name = $request->input('name');
        $project_category->priority = $request->input('priority');
        $project_category->user_id = auth()->user()->id;
        $project_category->save();
        return redirect()->route("projectCategoryView")->with('success', 'Thành công');
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
            $project_category = ProjectCategory::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectCategoryView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        $project_categories = ProjectCategory::where('id', '!=', $id)->get()->toArray();
        return view('backend.project-category.edit', compact('project_category', 'project_categories'));
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
            $project_category = ProjectCategory::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectCategoryView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa')->withInput();
        }

        $request->validate(
            [
                'name' => 'required|max:350'
            ],
            [
                'name.required' => 'Tên danh mục dự án không được phép bỏ trống',
                'name.max' => 'Tên danh mục dự án không được vượt quá 350 ký tự'
            ]);

        $count_exist = ProjectCategory::where('name', $request->name)->where('id', '<>', $id)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên danh mục dự án đã tồn tại')->withInput();
        }

        $project_category->name = $request->input('name');
        $project_category->priority = $request->input('priority');
        $project_category->user_id = auth()->user()->id;
        $project_category->update();
        return redirect()->route("projectCategoryView")->with('success', 'Thành công');
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
            $project_category = ProjectCategory::findOrFail($id);
            $project_category->delete();
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        return redirect()->back()->with('success', 'Thành công');
    }
}
