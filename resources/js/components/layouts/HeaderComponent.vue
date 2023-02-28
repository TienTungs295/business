<template>
    <header id="header" class="header-transparent header-semi-transparent header-semi-transparent-light">
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
                                    class="header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1"
                                    :class="isShowMenu ? 'show' : ''">
                                    <nav class="collapse" :class="isShowMenu ? 'show' : 'closed'">
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
                                                <router-link class="nav-link dmt-dropdown-item"
                                                             :to="{ name: 'service'}">
                                                    <span class="__page">
                                                        Dịch vụ
                                                    </span>
                                                    <i class="icon-arrow-down icons mgl-5 fz-12 __icon"
                                                       @click.stop.prevent="toggleServiceMenu"></i>
                                                </router-link>
                                                <ul class="dropdown-menu dmt-dropdown-menu"
                                                    :class="isShowServiceMenu ? 'show' : ''">
                                                    <li v-for="(item,index) in services">
                                                        <router-link class="dropdown-item"
                                                                     :to="{ name: 'serviceDetail',params: {id:item.id }}">
                                                            {{ item.shortTitle }}
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <router-link class="nav-link" :to="{ name: 'projectList'}">
                                                    Dự án
                                                </router-link>
                                            </li>
                                            <li class="dropdown">
                                                <router-link class="nav-link dmt-dropdown-item"
                                                             :to="{ name: 'projectList', query:{'category_id':defaultCategory.id}}">
                                                    <span class="__page">
                                                        BIM-REVIT CO-OPERATION
                                                    </span>
                                                    <i v-if="projects.length" class="icon-arrow-down icons mgl-5 fz-12 __icon"
                                                       @click.stop.prevent="toggleBIMMenu"></i>
                                                </router-link>
                                                <ul class="dropdown-menu dmt-dropdown-menu" v-if="projects.length"
                                                    :class="isShowBIMMenu ? 'show' : ''">
                                                    <li v-for="item in projects">
                                                        <router-link class="dropdown-item"
                                                                     :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}">
                                                            {{ item.name }}
                                                        </router-link>
                                                    </li>
                                                </ul>
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
                                <button class="btn header-btn-collapse-nav __hamburger" @click="toggleMenu">
                                    <i class="fas" :class="isShowMenu ? 'fa-times': 'fa-bars'"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<script>


import {mapGetters} from "vuex";
import ProjectCategoryService from "../../services/ProjectCategoryService";

export default {
    name: "Header",
    data() {
        return {
            defaultCategory: {},
            projects: [],
        };
    },
    computed: {
        ...mapGetters([
            'services',
            'isShowMenu',
            'isShowServiceMenu',
            'isShowBIMMenu',
        ])
    },
    methods: {
        toggleMenu() {
            this.$store.commit("setIsShowMenu", !this.isShowMenu)
        },
        toggleServiceMenu() {
            this.$store.commit("setIsShowServiceMenu", !this.isShowServiceMenu);
        },
        toggleBIMMenu() {
            this.$store.commit("setIsShowBIMMenu", !this.isShowBIMMenu);
        }
    },
    mounted() {
        ProjectCategoryService.findDefault().then(response => {
            let res = response || {};
            this.defaultCategory = res.category || {};
            this.projects = res.projects || [];
        }).catch(e => {
        });
    }
}
</script>
