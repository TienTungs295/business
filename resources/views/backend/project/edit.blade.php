@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>
                @if(isset($project->id))
                    Cập nhật dự án
                @else
                    Thêm mới dự án
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
                                  action="{!! isset($project->id)? route('updateProject',['id' => $project->id]) : route('createProject') !!}">
                                @csrf
                                <input type="hidden" id="project-id" name="project_id"
                                       value="{!! isset($project->id) ? $project->id :"" !!}">
                                <div class="row mb-3">
                                    <div class="col-md-9">
                                        <label class="form-label">Tên<span
                                                class="text-danger">*</span></label>
                                        <input type="text"
                                               value="{!! old('name', isset($project->name) ? $project->name : '')!!}"
                                               class="form-control" name="name" maxlength="350" required>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label">Độ ưu tiên</label>
                                        <input type="number"
                                               value="{!! old('priority', isset($post_category->priority) ? $post_category->priority : '')!!}"
                                               class="form-control" name="priority"  min="0">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col">
                                        <label class="form-label d-block">Danh mục dự án</label>
                                        @if(!empty($project_categories))
                                            @foreach($project_categories as $data)
                                                <div class="form-check d-inline-flex mr-10">
                                                    <input class="form-check-input" type="checkbox"
                                                           value="{!! $data->id !!}"
                                                           name="project_categories[]"
                                                        {!! isset($project->project_category_ids) && in_array($data->id, $project->project_category_ids) ? 'checked' : ''!!}>
                                                    <label class="ml-10 form-check-label">
                                                        {!! $data->name !!}
                                                    </label>
                                                </div>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col">
                                        <label class="form-label">Nội dung</label>
                                        <textarea class="3m-editor" name="content">
                                            {!! old('content', isset($project->content) ? $project->content : '') !!}
                                        </textarea>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label class="form-label">Ảnh</label>
                                        <input type="text" id="image"
                                               value="{!! old('image', isset($project->image) ? $project->image : '')!!}"
                                               name="image">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label class="form-label">Ảnh đi kèm</label>
                                        <input type="text" id="images"
                                               value="{!! old('images', isset($project->images) ? $project->images : '')!!}"
                                               name="images">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="bi bi-save2 me-1"></i>
                                        @if(isset($project->id))
                                            Cập nhật
                                        @else
                                            Thêm mới
                                        @endif
                                    </button>
                                    <a class="btn btn-danger" href="{!! route('projectView') !!}">
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
        // IMAGES
        var image_strings = $("#images").val();
        var configForImages = {
            ajaxConfig: {
                url: APP_URL + "/rest/tai-anh",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
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
            },
            multiple: true,
        }
        $("#images").uploader(configForImages)
            .on("upload-success", function (file, data) {

            }).on("file-remove", function () {

        });
        // END IMAGES

        // IMAGE
        var image_url = $("#image").val();
        var config = {
            ajaxConfig: {
                url: APP_URL + "/rest/tai-anh",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
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

        tinymce.init({
            selector: 'textarea.3m-editor',
            height: 500,
            br_in_pre: false,
            plugins: [
                'advlist autolink link image lists charmap preview hr',
                'visualblocks code fullscreen media',
                'table paste'
            ],
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | link image | preview media fullscreen | ' +
                'forecolor backcolor emoticons',
            menubar: 'file edit insert format table',
            paste_as_text: true,
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            file_picker_callback: function (cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.onchange = function () {
                    var file = this.files[0];

                    var reader = new FileReader();
                    reader.onload = function () {

                        var id = 'blobid' + (new Date()).getTime();
                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                        var base64 = reader.result.split(',')[1];
                        var blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), {title: file.name});
                    };
                    reader.readAsDataURL(file);
                };

                input.click();
            },
            content_style: 'body {  font-family: Roboto, sans-serif; font-size:14px }'
        });
    </script>
@endsection

