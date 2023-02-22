@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>
                @if(isset($project_field))
                    Cập nhật khu vực
                @else
                    Thêm mới khu vực
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
                                  action="{!! isset($project_field)? route('updateProjectField',['id' => $project_field->id]) : route('createProjectField') !!}">
                                @csrf
                                <div class="row mb-3">
                                    <div class="col-md-9">
                                        <label class="form-label">Tên lĩnh vực</label>
                                        <input type="text"
                                               value="{!! old('name', isset($project_field->name) ? $project_field->name : '')!!}"
                                               class="form-control" name="name" maxlength="350" required
                                               placeholder="Tên lĩnh vực">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label">Độ ưu tiên</label>
                                        <input type="number"
                                               value="{!! old('priority', isset($project_field->priority) ? $project_field->priority : '')!!}"
                                               class="form-control" name="priority"  min="0">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="bi bi-save2 me-1"></i>
                                        @if(isset($project_field))
                                            Cập nhật
                                        @else
                                            Thêm mới
                                        @endif
                                    </button>
                                    <a class="btn btn-danger" href="{!! route('projectFieldView') !!}">
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
