@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>Dự án</h4>
        </div><!-- End Page Title -->
        <section class="section">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">
                            <!-- Table with stripped rows -->
                            <form method="GET" action="{!! route('projectView') !!}" class="row g-3">
                                <div class="col-md-4">
                                    <div class="input-group mb-3">
                                        <input type="text" name="q" class="form-control" placeholder="Tên"
                                               aria-label="Tên"
                                               aria-describedby="basic-addon2" value="{!! isset($q) ? $q : '' !!}">
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-primary" type="submit">Tìm kiếm</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 text-end">
                                    <a href="{!! route('createProjectView') !!}" class="btn btn-primary btn-sm"><i
                                            class="bi bi-plus-lg me-1"></i> Thêm
                                        mới
                                    </a>
                                    <a href="{!! route('projectView') !!}" class="btn btn-primary btn-sm"><i
                                            class="bi bi-arrow-repeat me-1"></i> Làm mới
                                    </a>
                                </div>
                            </form>

                            <table class="table table-hover table-bordered text-center mt-4">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Độ ưu tiên</th>
                                    <th scope="col"  class="text-center">Người cập nhật</th>
                                    <th scope="col"  class="text-center">Ngày cập nhật</th>
                                    <th scope="col"  class="text-center">Chức năng</th>
                                </tr>
                                </thead>
                                <tbody>
                                @if(!$projects->isEmpty())
                                    @foreach($projects as $data)
                                        <tr class="align-middle">
                                            <th scope="row">{!!$data->id!!}</th>
                                            <td>
                                                <img src="{!! url('uploads/images/'.$data->image) !!}" alt="{!! $data->image !!}" width="70" height="70">
                                            </td>
                                            <td>{!!$data->name!!}</td>
                                            <td>{!!$data->priority!!}</td>
                                            <td class="text-center">
                                                @if($data->user != null)
                                                    {!!$data->user->name!!}
                                                @endif
                                            </td>
                                            <td  class="text-center">{!!$data->updated_at->format('H:i:s d-m-Y')!!}</td>
                                            <td  class="text-center">
                                                <a href="{!! route('updateProjectView',['id' => $data->id]) !!}"
                                                   class="btn btn-info btn-sm text-white">
                                                    <i class="bi bi-pencil-square"></i>
                                                </a>
                                                <form action="{!! route('deleteProject',['id' => $data->id]) !!}"
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
                                        <td colspan="7">Không có dữ liệu</td>
                                    </tr>
                                @endif
                                </tbody>
                            </table>
                            <!-- End Table with stripped rows -->
                            <div class="d-flex justify-content-end">
                                {!! $projects->links() !!}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    @include('backend.errors.alert')
@endsection
