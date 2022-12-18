@extends('backend.layouts.master')
@section('content')
    <div class="main-inner">
        <div>
            <div class="pagetitle">
                <h1>Trang chủ</h1>
            </div><!-- End Page Title -->

            <section class="section dashboard">
                <div class="row">
                    <!-- Left side columns -->
                    <div class="col">
                        <div class="row">

                            <!-- Comment -->
                            <div class="col-xxl-4 col-md-6">
                                <a class="card info-card revenue-card" href="{!! route("commentView") !!}">
                                    <div class="card-body">
                                        <h5 class="card-title">Bình luận đang chờ xử lý</h5>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-chat-left-text"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{!! $total_pending_comments!!}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- End Comment -->

                            <!-- Project Category -->
                            <div class="col-xxl-4 col-md-6">
                                <a class="card info-card sales-card" href="{!! route("projectCategoryView") !!}">
                                    <div class="card-body">
                                        <h5 class="card-title">Danh mục dự án</h5>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi-intersect"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{!! $total_project_categories !!}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <!-- Project Category -->

                            <!-- Project -->
                            <div class="col-xxl-4 col-xl-12">
                                <a class="card info-card customers-card" href="{!! route("projectView") !!}">
                                    <div class="card-body">
                                        <h5 class="card-title">Dự án</h5>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-building"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{!! $total_projects!!}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- End Project -->

                            <!-- Post Category -->
                            <div class="col-xxl-4 col-md-6">
                                <a class="card info-card sales-card" href="{!! route("postCategoryView") !!}">
                                    <div class="card-body">
                                        <h5 class="card-title">Danh mục bài viết</h5>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-journal-text"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{!! $total_post_categories !!}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <!-- Post Category -->

                            <!-- Post -->
                            <div class="col-xxl-4 col-xl-12">
                                <a class="card info-card customers-card" href="{!! route("postView") !!}">
                                    <div class="card-body">
                                        <h5 class="card-title">Bài viết</h5>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{!! $total_posts!!}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- End Post -->


                            <!-- Contact -->
                            <div class="col-xxl-4 col-md-6">
                                <a class="card info-card revenue-card" href="{!! route("customerInfoView") !!}">
                                    <div class="card-body">
                                        <h5 class="card-title">Liên hệ</h5>

                                        <div class="d-flex align-items-center">
                                            <div
                                                class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-telephone-plus"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{!! $total_customer_infos!!}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- End Contact -->

                        </div>
                    </div><!-- End Left side columns -->
                </div>
            </section>
        </div>
    @include('backend.errors.alert')
@endsection
