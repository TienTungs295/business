@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>Bình luận</h4>
        </div><!-- End Page Title -->
        <section class="section">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">
                            <!-- Table with stripped rows -->
                            <form method="GET" action="{!! route('commentView') !!}" class="row g-3">
                                <div class="col-md-8 text-end">
                                    <a href="{!! route('commentView') !!}" class="btn btn-primary btn-sm"><i
                                            class="bi bi-arrow-repeat me-1"></i> Làm mới
                                    </a>
                                </div>
                            </form>

                            <table class="table table-hover table-bordered text-center mt-4">
                                <thead>
                                <tr>
                                    <th scope="col">Mã bình luận</th>
                                    <th scope="col">Bài viết</th>
                                    <th scope="col">Nội dung</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col" class="text-center">Người phê duyệt</th>
                                    <th scope="col" class="text-center">Ngày phê duyệt</th>
                                    <th scope="col" class="text-center">Chức năng</th>
                                </tr>
                                </thead>
                                <tbody>
                                @if(!$comments->isEmpty())
                                    @foreach($comments as $data)
                                        <tr>
                                            <th scope="row">{!!$data->id!!}</th>
                                            <td>
                                                @if($data->post != null)
                                                    {!!$data->post->name!!}
                                                @endif
                                            </td>
                                            <td>{!!$data->comment!!}</td>
                                            <td>
                                                @if($data->status == 1)
                                                    <div class="bg-warning">Đang chờ</div>
                                                @else
                                                    <div class="bg-info">Đã xác nhận</div>
                                                @endif
                                            </td>
                                            <td class="text-center">
                                                @if($data->user != null)
                                                    {!!$data->user->name!!}
                                                @endif
                                            </td>
                                            <td class="text-center">{!!$data->updated_at->format('H:i:s d-m-Y')!!}</td>
                                            <td class="text-center">
                                                <form action="{!! route('changeCommentStatus',['id' => $data->id]) !!}"
                                                      class="d-inline-block" method="POST">
                                                    @csrf
                                                    <button type="submit"
                                                            {!! $data->status ==2 ? 'disabled' : '' !!} class="btn btn-info btn-sm text-white"
                                                            title="Xác nhận">
                                                        <i class="bi bi-check2-circle me-1"></i>
                                                    </button>
                                                </form>

                                                <form action="{!! route('deleteComment',['id' => $data->id]) !!}"
                                                      class="d-inline-block" method="POST">
                                                    @csrf
                                                    <button type="submit" class="btn btn-danger btn-sm" title="Xóa"
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
                                {!! $comments->links() !!}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    @include('backend.errors.alert')
@endsection
