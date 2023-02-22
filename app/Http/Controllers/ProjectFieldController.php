<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\ProjectField;

class ProjectFieldController extends BaseCustomController
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
            $project_fields = ProjectField::with('user')->where(function ($query) use ($q) {
                $query->where('name', 'like', '%' . $q . '%');
            })->orderBy('id', 'DESC')
                ->paginate(25);
            $project_fields->appends(['q' => $q]);
        } else {
            $project_fields = ProjectField::with('user')->orderBy('id', 'DESC')->paginate(25);
        }
        return View('backend.project-field.index')->with(['project_fields' => $project_fields]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.project-field.edit');
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
                'name.required' => 'Tên lĩnh vực không được phép bỏ trống',
                'name.max' => 'Tên lĩnh vực không được vượt quá 350 ký tự'
            ]);

        $count_exist = ProjectField::where('name', $request->name)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên lĩnh vực đã tồn tại')->withInput();
        }

        $project_field = new ProjectField;
        $project_field->name = $request->input('name');
        $project_field->priority = $request->input('priority');
        $project_field->user_id = auth()->user()->id;
        $project_field->save();
        return redirect()->route("projectFieldView")->with('success', 'Thành công');
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
            $project_field = ProjectField::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectFieldView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        $project_fields = ProjectField::where('id', '!=', $id)->get()->toArray();
        return view('backend.project-field.edit', compact('project_field', 'project_fields'));
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
            $project_field = ProjectField::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectFieldView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa')->withInput();
        }

        $request->validate(
            [
                'name' => 'required|max:350'
            ],
            [
                'name.required' => 'Tên lĩnh vực không được phép bỏ trống',
                'name.max' => 'Tên lĩnh vực không được vượt quá 350 ký tự'
            ]);

        $count_exist = ProjectField::where('name', $request->name)->where('id', '<>', $id)->count();
        if ($count_exist >= 1) {
            return redirect()->back()->with('error', 'Tên lĩnh vực đã tồn tại')->withInput();
        }

        $project_field->name = $request->input('name');
        $project_field->priority = $request->input('priority');
        $project_field->user_id = auth()->user()->id;
        $project_field->update();
        return redirect()->route("projectFieldView")->with('success', 'Thành công');
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
            $project_field = ProjectField::findOrFail($id);
            $project_field->delete();
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        return redirect()->back()->with('success', 'Thành công');
    }
}
