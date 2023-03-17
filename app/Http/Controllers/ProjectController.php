<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Project;
use App\Models\ProjectArea;
use App\Models\ProjectCategory;
use App\Models\ProjectCategoryTranslation;
use App\Models\ProjectField;
use App\Models\ProjectTranslation;
use File;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProjectController extends BaseCustomController
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
            $projects = Project::where(function ($query) use ($q) {
                $query->where('name', 'like', '%' . $q . '%');
            })->orderBy('id', 'DESC')
                ->paginate(25);
            $projects->appends(['q' => $q]);
        } else {
            $projects = Project::orderBy('id', 'DESC')->paginate(25);
        }

        return View('backend.project.index', compact("projects", "q"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $project_categories = ProjectCategory::all();
        $project_fields = ProjectField::all();
        $project_areas = ProjectArea::all();
        return view('backend.project.edit', compact('project_categories','project_fields','project_areas'));
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
                'name.required' => 'Tên dự án không được phép bỏ trống',
                'name.max' => 'Tên dự án không được phép vượt quá 350 ký tự',
            ]
        );

        $name = $request->input('name');
        $content = $request->input('content');
        $project = [
            'vi' => ['name' => $name, 'content' => $content],
            'en' => ['name' => $name, 'content' => $content],
            'cn' => ['name' => $name, 'content' => $content],
            'jp' => ['name' => $name, 'content' => $content],
            'kr' => ['name' => $name, 'content' => $content],
        ];
        $project["slug"] = Str::slug($name);

        $project_categories = $request->input("project_categories");
        $project_fields = $request->input("project_fields");
        $project["priority"] = $request->input('priority');
        $project["project_area_id"] = $request->input('project_area_id');
        $project["user_id"] = auth()->user()->id;

        //image
        $upload_path = "/uploads/images/";
        $image_url = $request->input('image');
        if ($image_url != null && $image_url != "" && str_contains($image_url, "/uploads/images/")) {
            $start_position = strpos($image_url, "/uploads/images/") + strlen($upload_path);
            $image_name = substr($image_url, $start_position, strlen($image_url) - $start_position);
            $project["image"] = $image_name;
        }

        //images
        $image_string = $request->input('images');
        $images = [];
        if ($image_string != null && $image_string != "") {
            $image_urls = explode(",", $image_string);
            foreach ($image_urls as $item) {
                if (!str_contains($item, "/uploads/images/")) continue;
                $start_position = strpos($item, "/uploads/images/") + strlen($upload_path);
                $image = new Image;
                $image->image = substr($item, $start_position, strlen($item) - $start_position);
                array_push($images, $image);
            }
        }

        DB::beginTransaction();
        try {
            $project = Project::create($project);
            $project->images()->saveMany($images);
            $project->projectCategories()->attach($project_categories);
            $project->projectFields()->attach($project_fields);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        return redirect()->route("projectView")->with('success', 'Thành công');
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
            $project = Project::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        $image_string = "";
        $size = $project->images()->count();
        foreach ($project->images()->get() as $key => $item) {
            $image_string .= url('uploads/images/' . $item->image);
            if ($key < $size - 1) $image_string .= ",";
        }
        if ($project->image) {
            $project->image = url('uploads/images/' . $project->image);
        }
        $project->images = $image_string;
        $project->project_category_ids = $project->projectCategories()->get()->pluck("id")->toArray();
        $project->project_field_ids = $project->projectFields()->get()->pluck("id")->toArray();
        $project_categories = ProjectCategory::all();
        $project_fields = ProjectField::all();
        $project_areas = ProjectArea::all();
        return view('backend.project.edit', compact('project', 'project_categories','project_fields','project_areas'));
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
                'name.required' => 'Tên dự án không được phép bỏ trống',
                'name.max' => 'Tên dự án không được phép vượt quá 350 ký tự'
            ]);

        try {
            $project = Project::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa')->withInput();
        }

        $project_categories = $request->input("project_categories");
        $project_fields = $request->input("project_fields");
        $project->name = $request->input('name');
        $project->slug = Str::slug($project->name);
        $project->content = $request->input('content');
        $project->priority = $request->input('priority');
        $project->project_area_id = $request->input('project_area_id');
        $project->user_id = auth()->user()->id;

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

        if ($image_name != $project->image && $project->image != null) {
            array_push($del_image_names, $project->image);
        }
        $project->image = $image_name;

        //images
        $image_string = $request->input('images');
        $db_images = $project->images()->get();
        $db_image_names = $db_images->pluck("image")->toArray();
        $db_images = $db_images->toArray();

        $param_images = [];
        $new_images = [];
        $del_image_ids = [];
        if ($image_string != null && $image_string != "") {
            $image_urls = explode(",", $image_string);
            foreach ($image_urls as $item) {
                if (!str_contains($item, "/uploads/images/")) continue;
                $start_position = strpos($item, "/uploads/images/") + strlen($upload_path);
                $image_name = substr($item, $start_position, strlen($item) - $start_position);
                array_push($param_images, $image_name);
            }
        }

        foreach ($param_images as $param_image) {
            if (!in_array($param_image, $db_image_names)) {
                $image = new Image;
                $image->image = $param_image;
                array_push($new_images, $image);
            }
        }

        foreach ($db_images as $db_image) {
            if (!in_array($db_image["image"], $param_images)) {
                array_push($del_image_ids, $db_image["id"]);
                array_push($del_image_names, $db_image["image"]);
            }
        }

        DB::beginTransaction();
        try {
            $project->update();
            $project->images()->saveMany($new_images);
            $project->images()->whereIn('id', $del_image_ids)->delete();
            $project->projectCategories()->sync($project_categories);
            $project->projectFields()->sync($project_fields);
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

        return redirect()->route("projectView")->with('success', 'Thành công');
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
            $project = Project::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }
        $del_images = [];
        $images = $project->images()->get()->pluck("image")->toArray();
        $image = $project->image;
        $del_images = array_merge($del_images, $images);
        array_push($del_images, $image);

        DB::beginTransaction();
        try {
            $project->images()->delete();
            $project->delete();
            ProjectTranslation::where('project_id', $id)->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        foreach ($del_images as $image) {
            $delete_url = 'uploads\images\\' . $image;
            if (File::exists(public_path($delete_url)))
                File::delete(public_path($delete_url));
        }

        return redirect()->back()->with('success', 'Thành công');
    }
}
