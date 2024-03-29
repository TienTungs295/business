<?php

namespace App\Http\Controllers;

use App\Models\ProjectCategoryTranslation;
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
            $query = ProjectCategory::with('user')->whereHas('translations', function ($query1) use ($q) {
                $query1->where('locale', app()->getLocale());
                $query1->where('name', 'like', '%' . $q . '%');
            });
            $project_categories = $query->orderBy('id', 'DESC')
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
                'name.required' => 'Tên loại hình không được phép bỏ trống',
                'name.max' => 'Tên loại hình không được vượt quá 350 ký tự'
            ]);

        $name = $request->input('name');
        $project_category = [
            'vi' => ['name' => $name],
            'en' => ['name' => $name],
            'cn' => ['name' => $name],
            'jp' => ['name' => $name],
            'kr' => ['name' => $name],
        ];
        $project_category["priority"] = $request->input('priority');
        $project_category["user_id"] = auth()->user()->id;
        ProjectCategory::create($project_category);
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
    public function edit($locale, $id)
    {
        try {
            $project_category = ProjectCategory::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectCategoryView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        if ($project_category->is_default == 1) return redirect()->route("projectCategoryView")->with('error', 'Không thể cập nhật danh mục mặc định');
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
    public function update(Request $request, $locale, $id)
    {
        try {
            $project_category = ProjectCategory::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectCategoryView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa')->withInput();
        }
        if ($project_category->is_default == 1) return redirect()->route("projectCategoryView")->with('error', 'Không thể cập nhật danh mục mặc định');

        $request->validate(
            [
                'name' => 'required|max:350'
            ],
            [
                'name.required' => 'Tên loại hình không được phép bỏ trống',
                'name.max' => 'Tên loại hình không được vượt quá 350 ký tự'
            ]);

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
    public function destroy($locale, $id)
    {
        try {
            $project_category = ProjectCategory::findOrFail($id);
            if ($project_category->is_default == 1) return redirect()->route("projectCategoryView")->with('error', 'Không thể xóa danh mục mặc định');
            $project_category->delete();
            ProjectCategoryTranslation::where('project_category_id', $id)->delete();
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        return redirect()->back()->with('success', 'Thành công');
    }
}
