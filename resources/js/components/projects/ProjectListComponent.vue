<template>
    <div class="dmt-portfolio">
        <section class="section section-height-3 border-0 m-0"
                 style="background-image: url(/assets/img/business-image/our-service.png);  background-repeat:   no-repeat; background-size: cover; background-position: center center;">
            <div class="container position-relative pt-5 pb-5-5 mt-5 mb-5">
                <div class="row justify-content-end pt-1 mt-lg-5">
                    <div class="col-7 col-md-5 position-relative">
                        <ul class="breadcrumb d-block ps-2 text-color-light">
                            <li>
                                <router-link class="fz-12-i" :to="{ name: 'home'}">
                                    Trang chủ
                                </router-link>
                            </li>
                            <li class="active fz-12-i before-o-1">Dự án</li>
                        </ul>
                        <h1 class="position-absolute top-100 left-0 text-color-light font-weight-bold text-6 line-height-3 text-end mt-5-5">
                            <span class="d-block position-relative z-index-1 pb-5 ps-lg-3">Dự án</span>
                            <span class="custom-svg-position-1 custom-svg-position-1-variation">
				                        <svg class="svg-fill-color-primary mt-1 "
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
                <div class="col-md-2 mgb-20">
                    <h5 class="mgb-0 fz-16" style="position: relative; top:10px">BỘ LỌC DỰ ÁN</h5>
                </div>
                <div class="col-md-4 mgb-20">
                    <select class="form-control text-uppercase" v-model="param.category_id"
                            @change="changeProjectCategory($event)"
                            name="categpry">
                        <option value="">Tất cả loại hình</option>
                        <option v-for="item in projectCategories" v-bind:value="item.id">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
                <div class="col-md-3 mgb-20">
                    <select class="form-control text-uppercase" v-model="param.field_id"
                            @change="changeProjectField($event)"
                            name="field">
                        <option value="">Tất cả lĩnh vực</option>
                        <option v-for="item in projectFields" v-bind:value="item.id">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
                <div class="col-md-3 mgb-20">
                    <select class="form-control text-uppercase" v-model="param.area_id"
                            @change="changeProjectArea($event)"
                            name="area">
                        <option value="">Tất cả khu vực</option>
                        <option v-for="item in projectAreas" v-bind:value="item.id">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row mgb-45" style="border-bottom: 2px solid #d80d07">
                <div class="col-md-2 mgb-20">
                    <h5 class="mgb-0 fz-16" style="position: relative; top:10px">TÌM KIẾM DỰ ÁN</h5>
                </div>
                <div class="col-md-4">
                    <div class="form-group position-relative">
                        <input type="text"
                               v-model="param.name"
                               v-on:keyup.enter="changeName"
                               class="form-control" name="name" placeholder="Nhập tên dự án tìm kiếm...">
                        <i class="fa fa-search project-search-icon" @click="changeName"></i>
                    </div>
                </div>
                <div class="col-md-3 text-md-left mgb-5">
                    <h5 class="text-uppercase fz-16" style="position: relative; top:10px">Sắp xếp</h5>
                </div>
                <div class="col-md-3 mgb-25">
                    <select class="form-control text-uppercase" v-model="param.sort"
                            @change="changeOrder($event)"
                            name="order">
                        <option value="">Mặc định</option>
                        <option value="date">
                            Ngày đăng
                        </option>
                        <option value="name">
                            A-Z
                        </option>
                    </select>
                </div>
            </div>
            <div class="row pdt-15">
                <div class="col-12 position-relative">
                    <div v-if="projectPaginate.data.length && !isLoading">
                        <div class="row sort-destination g-4 px-0">
                            <div class="col-sm-6 col-md-4 col-lg-3 isotope-item pdl-0 pdr-0 mgt-0"
                                 v-for="item in projectPaginate.data">
                                <router-link tag="div"
                                             :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}"
                                             class="portfolio-item cursor-pointer">
                                    <div class="mgr-2 mgb-2 cursor-pointer position-relative">
                                        <div class="__portfolio-overlay">
                                            <div class="__overlay-inner">
                                                <div class="__square"></div>
                                                <div class="__category mgb-10">
                                                    <span class="text-uppercase d-block" style="line-height: 20px"
                                                          v-if="item.project_categories != null && item.project_categories.length"
                                                          v-for="category in item.project_categories">
                                                        {{ category.name }}
                                                    </span>
                                                </div>
                                                <div class="__name text-uppercase mgb-10">
                                                    {{ item.name }}
                                                </div>
                                                <div class="__area text-uppercase" v-if="item.project_area != null">
                                                    <img style="position: relative;bottom: 2px"
                                                         class="__map-icon d-inline-block" width="12" height="12"
                                                         src="/assets/img/business-icons/map-pin.svg" alt="DMTIcon"/>
                                                    {{ item.project_area.name }}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <img :src="'/uploads/images/'+item.image" :alt="item.image"
                                                 @error="setDefaultImg"
                                                 class="img-fluid" alt="DMT Image">
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <loading-component v-bind:loading="isLoading"></loading-component>
                </div>
                <div class="col-12" v-if="projectPaginate.data.length ==0 && !isLoading">
                    <div class="row text-center">
                        <span class="fz-16">Không có dữ liệu</span>
                    </div>
                </div>
                <div class="col-12 mgt-40">
                    <ul v-if="projectPaginate.last_page > 1 && projectPaginate.data && projectPaginate.data.length && !isLoading"
                        class="custom-pagination-style-1 pagination pagination-rounded pagination-md justify-content-center">
                        <li class="page-item" :class="projectPaginate.prev_page_url == null ? 'disabled' : ''">
                            <a v-if="projectPaginate.prev_page_url != null" class="page-link cursor-pointer"
                               @click="changePage(projectPaginate.current_page - 1)">
                                <i class="fas fa-angle-left"></i>
                            </a>
                            <a class="page-link" v-else>
                                <i class="fas fa-angle-left"></i>
                            </a>
                        </li>
                        <li class="page-item" :class="projectPaginate.current_page == i ? 'active' :''"
                            v-for="i in projectPaginate.last_page">
                            <a class="page-link cursor-pointer" v-if="projectPaginate.current_page != i"
                               @click="changePage(i)">{{ i }}</a>
                            <a class="page-link cursor-default" v-else>{{ i }}</a>
                        </li>

                        <li class="page-item" :class="projectPaginate.next_page_url == null ? 'disabled' : ''">
                            <a v-if="projectPaginate.next_page_url != null" class="page-link cursor-pointer"
                               @click="changePage(projectPaginate.current_page + 1)">
                                <i class="fas fa-angle-right"></i>
                            </a>
                            <a class="page-link" v-else>
                                <i class="fas fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="position-relative pb-5 d-sm-none d-xl-block pdt-60">
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
import ProjectAreaService from "../../services/ProjectAreaService";
import ProjectFieldService from "../../services/ProjectFieldService";
import {mapGetters} from "vuex";

export default {
    name: "ProjectList",
    data() {
        return {
            isLoading: false,
            param: {
                page: 1,
                category_id: "",
                field_id: "",
                area_id: "",
                sort: ""
            }
        };
    },
    computed: {
        ...mapGetters([
            'projectPaginate',
            'projectCategories',
            'projectFields',
            'projectAreas',
        ])
    },
    methods: {
        findProjects() {
            // if (this.projectPaginate.data.length == 0 || isChangeParams) this.isLoading = true;
            this.isLoading = true;
            ProjectService.findAll(this.param).then(response => {
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
        changeProjectCategory($event) {
            this.param.page = 1;
            this.param.category_id = $event.target.value;
            this.changeRouter();
        },
        changeProjectField($event) {
            this.param.page = 1;
            this.param.field_id = $event.target.value;
            this.changeRouter();
        },
        changeProjectArea($event) {
            this.param.page = 1;
            this.param.area_id = $event.target.value;
            this.changeRouter();
        },
        changeRouter: function () {
            let paramQuery = {};
            if (this.param.name != undefined && this.param.name != null) paramQuery.name = this.param.name;
            if (this.param.category_id != "") paramQuery.category_id = this.param.category_id;
            if (this.param.field_id != "") paramQuery.field_id = this.param.field_id;
            if (this.param.area_id != "") paramQuery.area_id = this.param.area_id;
            if (this.param.page != null) paramQuery.page = this.param.page;
            if (this.param.sort != "") paramQuery.sort = this.param.sort;
            this.$router.push({name: 'projectList', query: paramQuery}).catch(() => {
            });
        },
        changeName() {
            this.param.page = 1;
            this.changeRouter();
        },
        changePage: function (page) {
            this.param.page = page;
            this.changeRouter();
        },
        changeOrder($event) {
            this.param.sort = $event.target.value;
            this.changeRouter();
        }
    },
    mounted() {
        if (this.$route.query.name != undefined && this.$route.query.name != null) this.param.name = this.$route.query.name;
        if (this.$route.query.category_id != "" && this.$route.query.category_id != undefined && this.$route.query.category_id != null) this.param.category_id = this.$route.query.category_id;
        if (this.$route.query.field_id != "" && this.$route.query.field_id != undefined && this.$route.query.field_id != null) this.param.field_id = this.$route.query.field_id;
        if (this.$route.query.area_id != "" && this.$route.query.area_id != undefined && this.$route.query.area_id != null) this.param.area_id = this.$route.query.area_id;
        if (this.$route.query.page != "" && this.$route.query.page != undefined && this.$route.query.page != null) this.param.page = this.$route.query.page;
        if (this.$route.query.sort != "" && this.$route.query.sort != undefined && this.$route.query.sort != null) this.param.sort = this.$route.query.sort;

        ProjectCategoryService.findAll().then(response => {
            let projectCategories = response || [];
            this.$store.commit("setProjectCategories", projectCategories);
        }).catch(e => {
        });

        ProjectFieldService.findAll().then(response => {
            let projectFields = response || [];
            this.$store.commit("setProjectFields", projectFields);
        }).catch(e => {
        });

        ProjectAreaService.findAll().then(response => {
            let projectAreas = response || [];
            this.$store.commit("setProjectAreas", projectAreas);
        }).catch(e => {
        });

        this.findProjects();
    }
}
</script>
