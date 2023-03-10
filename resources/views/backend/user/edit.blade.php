@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div class="pagetitle">
            <h4>
                @if(isset($user))
                    Cập nhật nhân viên
                @else
                    Thêm mới nhân viên
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
                                  action="{!! isset($user)? route('updateUser',['id' => $user->id]) : route('createUser') !!}">
                                @csrf
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Tên nhân viên<span
                                            class="text-danger">*</span></label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                               value="{!! old('name', isset($user->name) ? $user->name : '')!!}"
                                               class="form-control" name="name" maxlength="255" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Email<span
                                            class="text-danger">*</span></label>
                                    <div class="col-sm-10">
                                        @if(isset($user->id))
                                            <input type="email"
                                                   value="{!!$user->email!!}" disabled
                                                   class="form-control" name="email" readonly>
                                        @else
                                            <input type="email"
                                                   value="{!! old('email', isset($user->email) ? $user->email : '')!!}"
                                                   class="form-control" name="email" maxlength="255" required>
                                        @endif
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Mật khẩu<span
                                            class="text-danger">*</span></label>
                                    <div class="col-sm-10">
                                        <input type="password"
                                               value="{!! old('new_password') !!}"
                                               class="form-control" name="new_password" maxlength="255">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Nhập lại mật khẩu<span
                                            class="text-danger">*</span></label>
                                    <div class="col-sm-10">
                                        <input type="password"
                                               value="{!! old('password_confirm') !!}"
                                               class="form-control" name="password_confirm" maxlength="255">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Vai trò</label>
                                    <div class="col-sm-10">
                                        <select class="form-select" id="role"
                                                name="role">
                                            <option
                                                value="1" {!! (isset($user) && $user->role == 1) || old('role') == 1 ? 'selected' : ''!!}>
                                                Nhân viên
                                            </option>
                                            @if((auth()->user()->role & 4) > 0)
                                                <option
                                                    value="3" {!! (isset($user) && $user->role == 3) || old('role') == 3 ? 'selected' : ''!!}>
                                                    Quản trị viên
                                                </option>
                                            @endif
                                        </select>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="bi bi-save2 me-1"></i>
                                        @if(isset($user))
                                            Cập nhật
                                        @else
                                            Thêm mới
                                        @endif
                                    </button>
                                    <a class="btn btn-danger" href="{!! route('userView') !!}">
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
