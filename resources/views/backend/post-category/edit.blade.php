@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>
                @if(isset($post_category))
                    Cập nhật danh bài viết
                @else
                    Thêm mới danh mục bài viết
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
                                  action="{!! isset($post_category)? route('updatePostCategory',['id' => $post_category->id]) : route('createPostCategory') !!}">
                                @csrf
                                <div class="row mb-3">
                                    <div class="col-md-8">
                                        <label class="form-label">Tên danh mục</label>
                                        <input type="text"
                                               value="{!! old('name', isset($post_category->name) ? $post_category->name : '')!!}"
                                               class="form-control" name="name" maxlength="255" required
                                               placeholder="Tên danh mục">
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label">Độ ưu tiên</label>
                                        <input type="number"
                                               value="{!! old('priority', isset($post_category->priority) ? $post_category->priority : '')!!}"
                                               class="form-control" name="priority"  min="0"
                                               placeholder="Độ ưu tiên">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="bi bi-save2 me-1"></i>
                                        @if(isset($post_category))
                                            Cập nhật
                                        @else
                                            Thêm mới
                                        @endif
                                    </button>
                                    <a class="btn btn-danger" href="{!! route('postCategoryView') !!}">
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
