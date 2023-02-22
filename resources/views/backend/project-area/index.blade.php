@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>Khu vực</h4>
        </div><!-- End Page Title -->
        <section class="section">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">
                            <!-- Table with stripped rows -->
                            <div class="text-end">
                                <a href="{!! route('createProjectAreaView') !!}" class="btn btn-primary btn-sm"><i
                                        class="bi bi-plus-lg me-1"></i> Thêm
                                    mới
                                </a>
                                <a href="{!! route('projectAreaView') !!}" class="btn btn-primary btn-sm"><i
                                        class="bi bi-arrow-repeat me-1"></i> Làm mới
                                </a>
                            </div>
                            <table class="table table-hover table-bordered mt-4">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên khu vực</th>
                                    <th scope="col">Độ ưu tiên</th>
                                    <th scope="col" class="text-center">Người cập nhật</th>
                                    <th scope="col" class="text-center">Ngày cập nhật</th>
                                    <th scope="col" class="text-center">Chức năng</th>
                                </tr>
                                </thead>
                                <tbody style="vertical-align: middle">
                                @if(!$project_areas->isEmpty())
                                    @foreach($project_areas as $data)
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
                                                <a href="{!! route('updateProjectAreaView',['id' => $data->id]) !!}"
                                                   class="btn btn-info btn-sm text-white">
                                                    <i class="bi bi-pencil-square"></i>
                                                </a>
                                                <form
                                                    action="{!! route('deleteProjectArea',['id' => $data->id]) !!}"
                                                    class="d-inline-block" method="POST">
                                                    @csrf
                                                    <button type="submit" class="btn btn-danger btn-sm"
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
                                {!! $project_areas->links() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('backend.errors.alert')
@endsection
