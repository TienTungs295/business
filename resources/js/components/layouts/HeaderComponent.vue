<template>
    <header id="header" class="header-transparent header-semi-transparent header-semi-transparent-light"
            data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 1, 'stickySetTop': '1'}">
        <div class="header-body border-0">
            <div class="header-container container">
                <div class="header-row">
                    <div class="header-column">
                        <div class="header-row">
                            <div class="header-logo custom-header-logo">
                                <router-link :to="{ name: 'home'}">
                                    <img class="logo" alt="DMT" width="123" height="48"
                                         src="/assets/img/business-image/logo/dmt-white-logo.png">
                                </router-link>
                                <router-link :to="{ name: 'home'}">
                                    <img class="logo-sticky" alt="DMT" width="123" height="48"
                                         src="/assets/img/business-image/logo/dmt-logo.png">
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="header-column justify-content-end">
                        <div class="header-row">
                            <div class="header-nav header-nav-links order-3 order-lg-1">
                                <div
                                    class="header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                    <nav class="collapse px-3-5">
                                        <ul class="nav nav-pills" id="mainNav">
                                            <li>
                                                <router-link class="nav-link" :to="{ name: 'home'}">
                                                    Trang chủ
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link class="nav-link" :to="{ name: 'aboutUs'}">
                                                    Về chúng tôi
                                                </router-link>
                                            </li>
                                            <li class="dropdown">
                                                <router-link class="nav-link" :to="{ name: 'service'}">
                                                    Dịch vụ
                                                </router-link>
<!--                                                <ul class="dropdown-menu">-->
<!--                                                    <li><a class="dropdown-item"-->
<!--                                                           href="demo-construction-services-detail.html">Pre-Construction</a>-->
<!--                                                    </li>-->
<!--                                                    <li><a class="dropdown-item"-->
<!--                                                           href="demo-construction-services-detail.html">General-->
<!--                                                        Construction</a></li>-->
<!--                                                    <li><a class="dropdown-item"-->
<!--                                                           href="demo-construction-services-detail.html">Plumbing</a>-->
<!--                                                    </li>-->
<!--                                                    <li><a class="dropdown-item"-->
<!--                                                           href="demo-construction-services-detail.html">Painting</a>-->
<!--                                                    </li>-->
<!--                                                </ul>-->
                                            </li>
                                            <li>
                                                <router-link class="nav-link" :to="{ name: 'projectList'}">
                                                    Dự án
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link class="nav-link" :to="{ name: 'postList'}">
                                                    Tin tức & sự kiện
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link class="nav-link" :to="{ name: 'contactUs'}">
                                                    Liên hệ
                                                </router-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <button class="btn header-btn-collapse-nav" data-bs-toggle="collapse"
                                        data-bs-target=".header-nav-main nav">
                                    <i class="fas fa-bars"></i>
                                </button>
                            </div>
                            <div
                                class="header-nav-features header-nav-features-no-border header-nav-features-lg-show-border d-none d-sm-flex ms-3 order-1 order-lg-2">
                                <ul class="header-social-icons social-icons d-none d-sm-block social-icons-clean social-icons-medium ms-0">
                                    <li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank"
                                                                         title="Facebook"><i
                                        class="fab fa-facebook-f"></i></a></li>
                                    <li class="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank"
                                                                        title="Twitter"><i
                                        class="fab fa-twitter"></i></a></li>
                                    <li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank"
                                                                         title="Linkedin"><i
                                        class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
<!--                            <div-->
<!--                                class="header-nav-features header-nav-features-no-border header-nav-features-sm-show-border ms-3 ps-4 order-2 order-lg-3">-->
<!--                                <div class="header-nav-feature header-nav-features-search d-inline-flex">-->
<!--                                    <a href="#" class="header-nav-features-toggle text-decoration-none"-->
<!--                                       data-focus="headerSearch">-->
<!--                                        <i class="icons icon-magnifier header-nav-top-icon text-3-5 text-color-dark text-color-hover-primary font-weight-semibold top-3"></i>-->
<!--                                    </a>-->
<!--                                    <div-->
<!--                                        class="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed border-radius-0"-->
<!--                                        id="headerSearchDropdown">-->
<!--                                        <form role="search" action="page-search-results.html" method="get">-->
<!--                                            <div class="simple-search input-group">-->
<!--                                                <input class="form-control text-1" id="headerSearch" name="q"-->
<!--                                                       type="search" value="" placeholder="Search...">-->
<!--                                                <button class="btn" type="submit">-->
<!--                                                    <i class="icons icon-magnifier header-nav-top-icon text-color-dark text-color-hover-primary top-2"></i>-->
<!--                                                </button>-->
<!--                                            </div>-->
<!--                                        </form>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<script>


export default {
    name: "Header",
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {
    }
}
</script>
