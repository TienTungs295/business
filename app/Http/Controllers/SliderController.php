<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use App\Models\SliderTranslation;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SliderController extends BaseCustomController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $sliders = Slider::with('user')->orderBy('id', 'DESC')->paginate(25);
        return View('backend.slider.index')->with(['sliders' => $sliders]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.slider.edit');
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
                'description' => 'required|max:100'
            ],
            [
                'description.required' => 'Nội dung không được phép bỏ trống',
                'description.max' => 'Nội dung không được vượt quá 100 ký tự'
            ]);
        $description = $request->input('description');
        $slider = [
            'vi' => ['description' => $description],
            'en' => ['description' => $description],
            'cn' => ['description' => $description],
            'jp' => ['description' => $description],
            'kr' => ['description' => $description],
        ];
        $slider["priority"] = $request->input('priority');
        $slider["user_id"] = auth()->user()->id;

        //image
        $upload_path = "/uploads/images/";
        $image_url = $request->input('image');
        if ($image_url != null && $image_url != "" && str_contains($image_url, "/uploads/images/")) {
            $start_position = strpos($image_url, "/uploads/images/") + strlen($upload_path);
            $image_name = substr($image_url, $start_position, strlen($image_url) - $start_position);
            $slider["image"] = $image_name;
        }

        Slider::create($slider);
        return redirect()->route("sliderView")->with('success', 'Thành công');
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
            $slider = Slider::findOrFail($id);
            if ($slider->image) {
                $slider->image = url('uploads/images/' . $slider->image);
            }
        } catch (ModelNotFoundException $e) {
            return redirect()->route("sliderView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
        }

        return view('backend.slider.edit', compact('slider'));
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
            $slider = Slider::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return redirect()->route("sliderView")->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa')->withInput();
        }

        $request->validate(
            [
                'description' => 'required|max:100'
            ],
            [
                'description.required' => 'Nội dung không được phép bỏ trống',
                'description.max' => 'Nội dung không được vượt quá 100 ký tự'
            ]);
        $slider->description = $request->input('description');
        $slider->priority = $request->input('priority');
        $slider->user_id = auth()->user()->id;

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

        if ($slider->image != null && $image_name != $slider->image) {
            array_push($del_image_names, $slider->image);
        }
        $slider->image = $image_name;
        $slider->update();
        foreach ($del_image_names as $del_image_name) {
            $delete_url = 'uploads\images\\' . $del_image_name;
            if (File::exists(public_path($delete_url))) {
                File::delete(public_path($delete_url));
            }
        }
        return redirect()->route("sliderView")->with('success', 'Thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($locale, $id)
    {
        DB::beginTransaction();
        try {
            $slider = Slider::findOrFail($id);
            $del_images = [];
            $image = $slider->image;
            if (!is_null($image)) array_push($del_images, $image);
            $slider->delete();
            SliderTranslation::where('slider_id', $id)->delete();
            DB::commit();
        } catch (ModelNotFoundException $e) {
            return redirect()->back()->with('error', 'Đối tượng không tồn tại hoặc đã bị xóa');
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
