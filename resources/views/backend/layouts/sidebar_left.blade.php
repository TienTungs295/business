<!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item {{ (request()->is('*/quan-tri')) ? 'active' : '' }}">
            <a class="nav-link collapsed" href="{!! route("homeView") !!}">
                <i class="bi bi-house-door"></i>
                <span>Trang chủ</span>
            </a>
        </li>
        <li class="nav-item {{ (request()->is('*/quan-tri/slider*')) ? 'active' : '' }}">
            <a class="nav-link collapsed" href="{!! route("sliderView") !!}">
                <i class="bi bi-card-image"></i>
                <span>Banner</span>
            </a>
        </li>
        <li class="nav-item {{ (request()->is('*/quan-tri/danh-muc-du-an*')) ? 'active' : '' }}">
            <a class="nav-link collapsed" href="{!! route("projectCategoryView") !!}">
                <i class="bi bi-intersect"></i>
                <span>Loại hình</span>
            </a>
        </li>
        <li class="nav-item {{ (request()->is('*/quan-tri/linh-vuc*')) ? 'active' : '' }}">
            <a class="nav-link collapsed" href="{!! route("projectFieldView") !!}">
                <i class="bi bi-peace-fill"></i>
                <span>Lĩnh vực</span>
            </a>
        </li>
        <li class="nav-item {{ (request()->is('*/quan-tri/du-an*')) ? 'active' : '' }}">
            <a class="nav-link collapsed" href="{!! route("projectView") !!}">
                <i class="bi bi-building"></i>
                <span>Dự án</span>
            </a>
        </li>
        <li class="nav-item {{ (request()->is('*/quan-tri/danh-muc-bai-viet*')) ? 'active' : '' }}">
            <a class="nav-link collapsed" href="{!! route("postCategoryView") !!}">
                <i class="bi bi-journal-text"></i>
                <span>Danh mục bài viết</span>
            </a>
        </li>
        <li class="nav-item {{ (request()->is('*/quan-tri/bai-viet*')) ? 'active' : '' }}">
            <a class="nav-link collapsed" href="{!! route("postView") !!}">
                <i class="bi bi-file-earmark-text"></i>
                <span>Bài viết</span>
            </a>
        </li>
        @if(app()->getLocale() == "vi")
            <li class="nav-item {{ (request()->is('*/quan-tri/binh-luan*')) ? 'active' : '' }}">
                <a class="nav-link collapsed" href="{!! route("commentView") !!}">
                    <i class="bi bi-chat-left-text"></i>
                    <span>Bình luận</span>
                </a>
            </li>
            <li class="nav-item {{ (request()->is('*/quan-tri/lien-he*')) ? 'active' : '' }}">
                <a class="nav-link collapsed" href="{!! route("customerInfoView") !!}">
                    <i class="bi bi-telephone-plus"></i>
                    <span>Liên hệ</span>
                </a>
            </li>
            @if((auth()->user()->role & 2) > 0)
                <li class="nav-item {{ (request()->is('*/quan-tri/nhan-vien*')) ? 'active' : '' }}">
                    <a class="nav-link collapsed" href="{!! route("userView") !!}">
                        <i class="bi bi-person-bounding-box"></i>
                        <span>Nhân viên</span>
                    </a>
                </li>
            @endif
        @endif
    </ul>

</aside><!-- End Sidebar-->
