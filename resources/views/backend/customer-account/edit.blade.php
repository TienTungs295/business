@extends('backend.layouts.master')
@section('content')
<div class="main-inner">
    <div class="pagetitle">
        <h4>
            @if(isset($project_collection))
            Cập nhật khách hàng
            @else
            Thêm mới khách hàng
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
                              action="{!! isset($project_collection)? route('updateCollection',['id' => $project_collection->id]) : route('createCollection') !!}">
                            @csrf
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label">Đặc trưng</label>
                                <div class="col-sm-10">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" value="{!! old('is_featured', isset($project_collection->is_featured) ? $project_collection->is_featured : '')!!}" name="is_featured" {!! old('is_featured', isset($project_collection->is_featured) && $project_collection->is_featured == 1 ? 'checked' : '')!!} type="checkbox">
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label">Tên khách hàng<span
                                        class="text-danger">*</span></label>
                                <div class="col-sm-10">
                                    <input type="text"
                                           value="{!! old('name', isset($project_collection->name) ? $project_collection->name : '')!!}"
                                           class="form-control" name="name" maxlength="255" required
                                           placeholder="Tên khách hàng">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label">Mô tả</label>
                                <div class="col-sm-10">
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Mô tả" name="description" id="description"
                                                  rows="2">{{ old('description', isset($project_collection->description) ? $project_collection->description : '')}}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">
                                    <i class="bi bi-save2 me-1"></i>
                                    @if(isset($project_collection))
                                    Cập nhật
                                    @else
                                    Thêm mới
                                    @endif
                                </button>
                                <a class="btn btn-danger" href="{!! route('collectionView') !!}">
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
