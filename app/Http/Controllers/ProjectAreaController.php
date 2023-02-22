<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\ProjectArea;

class ProjectAreaController extends BaseCustomController
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
            $project_areas = ProjectArea::with('user')->where(function ($query) use ($q) {
                $query->where('name', 'like', '%' . $q . '%');
            })->orderBy('id', 'DESC')
                ->paginate(25);
            $project_areas->appends(['q' => $q]);
        } else {
            $project_areas = ProjectArea::with('user')->orderBy('id', 'DESC')->paginate(25);
        }
        return View('backend.project-area.index')->with(['project_areas' => $project_areas]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.project-area.edit');
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
                'name' => 'required|max:250'
            ],
            [
                'name.required' => 'Tên danh mục không được phép bỏ trống',
                'name.max' => 'Tên danh mục không được vượt quá 350 ký tự'
            ]);

        $count_exist = ProjectArea::where('name', $request->name)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên khu vực đã tồn tại')->withInput();
        }

        $project_area = new ProjectArea;
        $project_area->name = $request->input('name');
        $project_area->priority = $request->input('priority');
        $project_area->user_id = auth()->user()->id;
        $project_area->save();
        return redirect()->route("projectAreaView")->with('success', 'Thành công');
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
            $project_area = ProjectArea::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectAreaView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        $project_areas = ProjectArea::where('id', '!=', $id)->get()->toArray();
        return view('backend.project-area.edit', compact('project_area', 'project_areas'));
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
            $project_area = ProjectArea::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectAreaView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa')->withInput();
        }

        $request->validate(
            [
                'name' => 'required|max:350'
            ],
            [
                'name.required' => 'Tên khu vực không được phép bỏ trống',
                'name.max' => 'Tên khu vực không được vượt quá 350 ký tự'
            ]);

        $count_exist = ProjectArea::where('name', $request->name)->where('id', '<>', $id)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên khu vực đã tồn tại')->withInput();
        }

        $project_area->name = $request->input('name');
        $project_area->priority = $request->input('priority');
        $project_area->user_id = auth()->user()->id;
        $project_area->update();
        return redirect()->route("projectAreaView")->with('success', 'Thành công');
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
            $project_area = ProjectArea::findOrFail($id);
            $project_area->delete();
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        return redirect()->back()->with('success', 'Thành công');
    }
}
