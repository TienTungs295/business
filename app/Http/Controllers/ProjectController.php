<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectCategory;
use App\Models\ProjectCollection;
use App\Models\ProjectLabel;
use App\Models\RelatedProject;
use App\Models\Image;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use League\CommonMark\Parser\Block\ParagraphParser;
use function Sodium\add;
use File;

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
        $project_categories = ProjectCategory::all()->toArray();
        $labels = ProjectLabel::all();
        $collections = ProjectCollection::all();
        return view('backend.project.edit', compact('project_categories', 'labels', 'collections'));
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
                'name' => 'required',
            ],
            [
                'name.required' => 'Tên sản phẩm không được phép bỏ trống',
            ]
        );

        $category_id = $request->input('category_id');
        try {
            if ($category_id != 0) ProjectCategory::findOrFail($category_id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Danh mục không tồn tại hoặc đã bị xóa');
        }

        $project = new Project;
        $project->name = $request->input('name');
        $project->slug = Str::slug($project->name);;
        $project->content = $request->input('content');
        $project->description = $request->input('description');
        $project->category_id = $request->input('category_id');
        $project->sku = $request->input('sku');
        $project->is_featured = $request->has('is_featured') ? 1 : 0;
        $is_contact_price = $request->has('is_contact');
        if (!$is_contact_price) {
            $project->price = empty($request->input('price')) ? 0 : $request->input('price');
            if (!empty($request->input('sale_price'))) {
                $project->sale_price = $request->input('sale_price');
            }
            if ($request->has('apply_time')) {
                $start_date = $request->input('start_date');
                $end_date = $request->input('end_date');
                $is_flash_sale = $request->has('is_flash_sale');
                if (!empty($start_date) && !empty($end_date)) {
                    $start_date_to_time_stamp = Carbon::createFromFormat('d-m-Y H:i:s', $start_date)->timestamp;
                    $end_date_to_time_stamp = Carbon::createFromFormat('d-m-Y H:i:s', $end_date)->timestamp;
                    if ($start_date_to_time_stamp > $end_date_to_time_stamp) return redirect()->back()->with('error', 'Ngày kết thúc phải lớn hơn ngày bắt đầu');
                }
                if (!empty($start_date)) {
                    $project->start_date = Carbon::createFromFormat('d-m-Y H:i:s', $start_date)->format("Y-m-d H:i:s");
                }
                if (!empty($end_date)) {
                    if ($project->start_date == null)
                        $project->start_date = Carbon::now()->format("Y-m-d H:i:s");
                    $project->end_date = Carbon::createFromFormat('d-m-Y H:i:s', $end_date)->format("Y-m-d H:i:s");
                    $project->is_flash_sale = $is_flash_sale ? 1 : 0;
                }
            }
        }
        $with_storehouse_management = $request->has('with_storehouse_management');
        if (!$is_contact_price && $with_storehouse_management) {
            $project->with_storehouse_management = 1;
            $project->quantity = empty($request->input('quantity')) ? 0 : $request->input('quantity');
            $project->allow_checkout_when_out_of_stock = $request->has('allow_checkout_when_out_of_stock') ? 1 : 0;
        } else {
            $project->with_storehouse_management = 0;
            $project->stock_status = $request->input('stock_status');
        }
        $project->is_contact = $is_contact_price ? 1 : 0;
        $project->is_trending = $request->has('is_trending') ? 1 : 0;

        //image
        $upload_path = "/uploads/images/";
        $image_url = $request->input('image');
        if ($image_url != null && $image_url != "" && str_contains($image_url, "/uploads/images/")) {
            $start_position = strpos($image_url, "/uploads/images/") + strlen($upload_path);
            $image_name = substr($image_url, $start_position, strlen($image_url) - $start_position);
            $project->image = $image_name;
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

        $related_project_ids = $request->input('related_project_ids');
        if ($related_project_ids) {
            $related_project_ids = explode(",", $related_project_ids);
        }
        $labels = $request->input("labels");
        $collections = $request->input("collections");

        DB::beginTransaction();
        try {
            $project->save();
            $project->images()->saveMany($images);
            $project->projectLabels()->attach($labels);
            $project->projectCollections()->attach($collections);
            $related_projects = [];
            if ($related_project_ids) {
                foreach ($related_project_ids as $related_project_id) {
                    array_push($related_projects, ['from_project_id' => $project->id, "to_project_id" => $related_project_id]);
                }
            }
            RelatedProject::insert($related_projects);
            $this->updateTotalProjectsFromProjectPage($project->category_id, true);
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
    public function edit($id)
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
        $related_projects = $project->projectsRelated()->get();
        $project->related_projects = $related_projects;
        $related_project_ids = $related_projects->pluck("id")->toArray();
        if (count($related_project_ids) != 0) {
            $project->related_project_ids = implode(",", $related_project_ids);
        }
        $project_categories = ProjectCategory::all()->toArray();
        $labels = ProjectLabel::all();
        $collections = ProjectCollection::all();
        $project->label_ids = $project->projectLabels()->get()->pluck("id")->toArray();
        $project->collection_ids = $project->projectCollections()->get()->pluck("id")->toArray();
        return view('backend.project.edit', compact('project', 'project_categories', 'labels', 'collections'));
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
        $request->validate(
            [
                'name' => 'required',
            ],
            [
                'name.required' => 'Tên sản phẩm không được phép bỏ trống',
            ]);

        try {
            $project = Project::findOrFail($id);
            $old_category_id = $project->category_id;
        } catch (ModelNotFoundException $e) {
            return redirect()->route("projectView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }

        $category_id = $request->input('category_id');
        try {
            if ($category_id != 0) ProjectCategory::findOrFail($category_id);
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Danh mục không tồn tại hoặc đã bị xóa');
        }

        $project->name = $request->input('name');
        $project->slug = Str::slug($project->name);
        $project->content = $request->input('content');
        $project->description = $request->input('description');
        $project->category_id = $request->input('category_id');
        $project->sku = $request->input('sku');
        $project->is_featured = $request->has('is_featured') ? 1 : 0;
        $is_contact_price = $request->has('is_contact');
        if ($is_contact_price) {
            $project->price = null;
            $project->sale_price = null;
        } else {
            $project->price = empty($request->input('price')) ? 0 : $request->input('price');
            $project->sale_price = empty($request->input('sale_price')) ? null : $request->input('sale_price');
        }

        if (!$is_contact_price && $request->has('apply_time')) {
            $start_date = $request->input('start_date');
            $end_date = $request->input('end_date');
            $is_flash_sale = $request->has('is_flash_sale');
            if (!empty($start_date) && !empty($end_date)) {
                $start_date_to_time_stamp = Carbon::createFromFormat('d-m-Y H:i:s', $start_date)->timestamp;
                $end_date_to_time_stamp = Carbon::createFromFormat('d-m-Y H:i:s', $end_date)->timestamp;
                if ($start_date_to_time_stamp > $end_date_to_time_stamp) return redirect()->back()->with('error', 'Ngày kết thúc phải lớn hơn ngày bắt đầu');
            }
            if (!empty($start_date)) {
                $project->start_date = Carbon::createFromFormat('d-m-Y H:i:s', $start_date)->format("Y-m-d H:i:s");
            } else {
                $project->start_date = null;
            }
            if (!empty($end_date)) {
                if ($project->start_date == null)
                    $project->start_date = Carbon::now()->format("Y-m-d H:i:s");
                $project->end_date = Carbon::createFromFormat('d-m-Y H:i:s', $end_date)->format("Y-m-d H:i:s");
                $project->is_flash_sale = $is_flash_sale ? 1 : 0;
            } else {
                $project->is_flash_sale = 0;
                $project->end_date = null;
            }
        } else {
            $project->start_date = null;
            $project->end_date = null;
            $project->is_flash_sale = 0;
        }

        $with_storehouse_management = $request->has('with_storehouse_management');
        if (!$is_contact_price && $with_storehouse_management) {
            $project->with_storehouse_management = 1;
            $project->quantity = empty($request->input('quantity')) ? 0 : $request->input('quantity');
            $project->allow_checkout_when_out_of_stock = $request->has('allow_checkout_when_out_of_stock') ? 1 : 0;
            $project->stock_status = null;
        } else {
            $project->with_storehouse_management = 0;
            $project->quantity = null;
            $project->allow_checkout_when_out_of_stock = null;
            $project->stock_status = $request->input('stock_status');
        }
        $project->is_contact = $is_contact_price ? 1 : 0;
        $project->is_trending = $request->has('is_trending') ? 1 : 0;

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

        $related_project_ids = [];
        if ($request->input('related_project_ids')) {
            $related_project_ids = explode(",", $request->input('related_project_ids'));
        }

        $db_to_project_ids = $project->projectsRelated()->get()->pluck("id")->toArray();
        $new_related_projects = [];
        $del_related_project_ids = [];
        if ($related_project_ids) {
            foreach ($related_project_ids as $id) {
                if (!in_array($id, $db_to_project_ids)) {
                    array_push($new_related_projects, ['from_project_id' => $project->id, "to_project_id" => $id]);
                }
            }
        }

        foreach ($db_to_project_ids as $id) {
            if (!in_array($id, $related_project_ids)) {
                array_push($del_related_project_ids, $id);
            }
        }
        $labels = $request->input("labels");
        $collections = $request->input("collections");

        DB::beginTransaction();
        try {
            $project->update();
            $project->images()->saveMany($new_images);
            $project->images()->whereIn('id', $del_image_ids)->delete();
            $project->projectLabels()->sync($labels);
            $project->projectCollections()->sync($collections);
            RelatedProject::whereIn('to_project_id', $del_related_project_ids)->delete();
            RelatedProject::insert($new_related_projects);
            if ($old_category_id != $project->category_id) {
                //minus 1
                $this->updateTotalProjectsFromProjectPage($old_category_id);
                //plus 1
                $this->updateTotalProjectsFromProjectPage($project->category_id, true);
            }
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
    public function destroy($id)
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
        array($del_images, $image);

        DB::beginTransaction();
        try {
            $this->updateTotalProjectsFromProjectPage($project->category_id, false, true);
            $project->images()->delete();
            $project->reviews()->delete();
            $project->delete();
            RelatedProject::where("from_project_id", $id)->delete();
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
