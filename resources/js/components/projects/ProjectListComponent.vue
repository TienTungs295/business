<template>
    <div class="dmt-portfolio">
        <section class="section section-height-3 border-0 m-0">
            <div class="container position-relative pt-5 pb-5-5 mt-5 mb-5">
                <div class="row justify-content-end pt-1 mt-lg-5">
                    <div class="col-7 col-md-5 position-relative">
                        <ul class="breadcrumb d-block ps-2 ">
                            <li>
                                <router-link class="fz-12-i" :to="{ name: 'home'}">
                                    Trang chủ
                                </router-link>
                            </li>
                            <li class="active fz-12-i">Dự án</li>
                        </ul>
                        <h1 class="position-absolute top-100 left-0 text-color-light font-weight-bold text-6 line-height-3 text-end mt-5-5">
                            <span class="d-block position-relative z-index-1 pb-5 ps-lg-3">Dự án</span>
                            <span class="custom-svg-position-1 custom-svg-position-1-variation">
				                        <svg class="svg-fill-color-dark mt-1 "
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 859.45 88.44" xml:space="preserve" preserveAspectRatio="none">
				                            <polyline points="7.27,84.78 855.17,84.78 855.17,4.79 84.74,4.79 "/>
				                        </svg>
				                    </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container pb-5 pb-sm-0 my-5">
            <div class="row">
                <div class="col-12" >
                    <ul class="nav nav-pills sort-source sort-source-style-3 justify-content-center justify-content-md-start text-3-5 pb-2 mb-4">
                        <li class="nav-item cursor-pointer" :class="category_id == null ? 'active' : ''"
                            @click="findProjects(null,true)">
                            <a class="nav-link font-weight-semibold text-color-dark text-color-hover-primary px-0"
                               :class="category_id == null ? 'active' : ''">Tất cả</a></li>
                        <li class="nav-item ms-4 cursor-pointer" v-for="item in projectCategories"
                            @click="findProjects(item.id,true)"
                            :class="category_id == item.id ? 'active' : ''">
                            <a class="nav-link font-weight-semibold text-color-dark text-color-hover-primary px-0"
                               :class="category_id == item.id ? 'active' : ''">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                    <div>
                        <div class="row sort-destination g-4 px-0">
                            <div class="col-sm-6 col-md-4 isotope-item" v-for="item in projectPaginate.data">
                                <div class="portfolio-item">
                                    <div
                                        class="thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-centered-icons mb-3-5">
                                        <div class="thumb-info-wrapper">
                                            <img :src="'/uploads/images/'+item.image" :alt="item.image"
                                                 @error="setDefaultImg"
                                                 class="img-fluid" alt="DMT Image">
                                            <div class="thumb-info-action">
                                                <router-link
                                                    class="thumb-info-action-icon thumb-info-action-icon-light"
                                                    :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}">
                                                    <i class="fas fa-plus text-dark"></i>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="font-weight-bold text-5-5 line-height-3">
                                        <router-link
                                            class="text-color-dark text-color-hover-primary text-decoration-none fz-20"
                                            :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}">
                                            {{ item.name }}
                                        </router-link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center pdt-25" v-if="projectPaginate.next_page_url != null && !isLoading">
                        <a @click="loadMore()"
                           class="custom-view-more d-inline-flex align-items-center btn btn-primary font-weight-semibold rounded-0 text-3-5 btn-px-2">
                            Xem thêm
                            <img class="mgl-5" width="15" height="15" src="/assets/img/business-icons/arrow-down.svg"
                                 alt="DMT button"/>
                        </a>
                    </div>
                </div>
                <div class="col-12" v-if="projectPaginate.data.length ==0 && !isLoading">
                    <div class="row text-center">
                        <span class="fz-16">Không có dữ liệu</span>
                    </div>
                </div>
            </div>
        </div>


        <div class="position-relative pb-5 d-sm-none d-xl-block">
            <div class="position-absolute transform3dy-n50 left-0">
                <div>
                    <div class="custom-square-1 bg-primary mt-0 mb-5"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectService from "../../services/ProjectService";
import ProjectCategoryService from "../../services/ProjectCategoryService";
import {mapGetters} from "vuex";
import CommentService from "../../services/CommentService";

export default {
    name: "ProjectList",
    data() {
        return {
            isLoading: false,
            category_id: null
        };
    },
    computed: {
        ...mapGetters([
            'projectPaginate',
            'projectCategories'
        ])
    },
    methods: {
        findProjects(category_id, isChangeCategory) {
            this.category_id = category_id;
            if (jQuery.isEmptyObject(this.projectPaginate) && !isChangeCategory) this.isLoading = true;
            let param = {};
            if (category_id != undefined && category_id != null) param.category_id = category_id;
            ProjectService.findAll(param).then(response => {
                let projectPaginate = response || {};
                this.$store.commit("setProjectPaginate", projectPaginate);
                this.isLoading = false;
            }).catch(e => {
                this.isLoading = false;
            });
        },
        setDefaultImg(event) {
            event.target.src = window.location.protocol + "//" + window.location.host + '/assets/img/business-image/default/placeholder.png'
        },

        loadMore() {
            this.isLoading = true;
            let param = {};
            param.page = this.projectPaginate.current_page + 1;
            if (this.category_id != null) param.category_id = this.category_id;
            ProjectService.findAll(param).then(response => {
                let projectPaginate = response || {};
                let projects = projectPaginate.data || [];
                this.projectPaginate.data = this.projectPaginate.data.concat(projects);
                this.projectPaginate.next_page_url = projectPaginate.next_page_url;
                this.projectPaginate.current_page = projectPaginate.current_page;
                this.$store.commit("setProjectPaginate", this.projectPaginate);
                this.isLoading = false;
            }).catch(e => {
                this.isLoading = false;
            });
        },
    },
    mounted() {
        ProjectCategoryService.findAll().then(response => {
            let projectCategories = response || [];
            this.$store.commit("setProjectCategories", projectCategories);
        }).catch(e => {
        });
        this.findProjects();
    }
}
</script>
