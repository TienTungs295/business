@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>Loại hình</h4>
        </div><!-- End Page Title -->
        <section class="section">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">
                            <!-- Table with stripped rows -->
                            <div class="text-end">
                                <a href="{!! route('createProjectCategoryView') !!}" class="btn btn-primary btn-sm"><i
                                        class="bi bi-plus-lg me-1"></i> Thêm
                                    mới
                                </a>
                                <a href="{!! route('projectCategoryView') !!}" class="btn btn-primary btn-sm"><i
                                        class="bi bi-arrow-repeat me-1"></i> Làm mới
                                </a>
                            </div>
                            <table class="table table-hover table-bordered mt-4">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên loại hình</th>
                                    <th scope="col">Độ ưu tiên</th>
                                    <th scope="col" class="text-center">Người cập nhật</th>
                                    <th scope="col" class="text-center">Ngày cập nhật</th>
                                    <th scope="col" class="text-center">Chức năng</th>
                                </tr>
                                </thead>
                                <tbody style="vertical-align: middle">
                                @if(!$project_categories->isEmpty())
                                    @foreach($project_categories as $data)
                                        <tr class="align-middle">
                                            <th scope="row">{!!$data->id!!}</th>
                                            <td>{!!$data->name!!}</td>
                                            <td>{!!$data->priority!!}</td>
                                            <td class="text-center">
                                                @if($data->user != null)
                                                    {!!$data->user->name!!}
                                                @endif
                                            </td>
                                            <td class="text-center">{!!$data->updated_at->format('H:i:s d-m-Y')!!}</td>
                                            <td class="text-center">
                                                <form action="{!! route('updateProjectCategoryView',['id' => $data->id]) !!}"
                                                      class="d-inline-block" method="GET">
                                                    @csrf
                                                    <button type="submit"
                                                            class="btn btn-info btn-sm text-white" {!! $data->is_default == 1 ? 'disabled' : '' !!}>
                                                        <i class="bi bi-pencil-square"></i>
                                                    </button>
                                                </form>

                                                <form
                                                    action="{!! route('deleteProjectCategory',['id' => $data->id]) !!}"
                                                    class="d-inline-block" method="POST">
                                                    @csrf
                                                    <button type="submit" class="btn btn-danger btn-sm"
                                                            {!! $data->is_default == 1 ? 'disabled' : '' !!}
                                                            onclick="return confirm('Bạn có chắc chắn cho hành động này không?')">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                                    </tr>
                                @endif
                                </tbody>
                            </table>
                            <!-- End Table with stripped rows -->
                            <div class="d-flex justify-content-end">
                                {!! $project_categories->links() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('backend.errors.alert')
@endsection
