@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>
                @if(isset($slider))
                    Cập nhật Banner
                @else
                    Thêm mới Banner
                @endif
            </h4>
        </div><!-- End Page Title -->
        <section class="section">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        @include('backend.errors.note')
                        <div class="card-body">
                            <form method="POST"
                                  action="{!! isset($slider)? route('updateSlider',['id' => $slider->id]) : route('createSlider') !!}">
                                @csrf
                                <div class="row mb-3">
                                    <div class="col-md-9">
                                        <label class="form-label">Nội dung</label>
                                        <input type="text"
                                               value="{!! old('description', isset($slider->description) ? $slider->description : '')!!}"
                                               class="form-control" name="description" maxlength="50" required
                                               placeholder="Nội dung">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label">Độ ưu tiên</label>
                                        <input type="number"
                                               value="{!! old('priority', isset($slider->priority) ? $slider->priority : '')!!}"
                                               class="form-control" name="priority"  min="0">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label class="form-label">Ảnh</label>
                                        <input type="text" id="image"
                                               value="{!! old('image', isset($slider->image) ? $slider->image : '')!!}"
                                               name="image">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="bi bi-save2 me-1"></i>
                                        @if(isset($slider))
                                            Cập nhật
                                        @else
                                            Thêm mới
                                        @endif
                                    </button>
                                    <a class="btn btn-danger" href="{!! route('sliderView') !!}">
                                        <i class="bi bi-arrow-return-left me-1"></i>
                                        Quay lại
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
@section('morescripts')
    <script>
        // IMAGE
        var image_url = $("#image").val();
        var config = {
            ajaxConfig: {
                url: APP_URL + "/rest/tai-anh",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file);
                    form.append("sub-folder", "sliders");
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            let resData = response.data || {};
                            if (resData.status === "error") toastr.error(resData.message);
                            successCallback(response)
                        },
                        error: function (response) {
                            console.error("Error", response)
                            errorCallback("Error")
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    return {
                        url: APP_URL + "/" + response.data.file_path,
                        name: response.data.file_name,
                    }
                }
            }
        }
        $("#image").uploader(config)
            .on("upload-success", function (file, data) {

            }).on("file-remove", function () {

        });
        // END IMAGE
    </script>
@endsection

