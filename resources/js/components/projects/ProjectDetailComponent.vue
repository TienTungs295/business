<template>
    <div class="project-detail">
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
                            <li class="active fz-12-i" v-if="project">{{ project.name }}</li>
                        </ul>
                        <h1 class="position-absolute top-100 left-0 text-color-light font-weight-bold text-6 line-height-3 text-end mt-5-5">
                            <span class="d-block position-relative z-index-1 pb-5 ps-lg-3">Chi tiết dự án</span>
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
                <div class="col-lg-6" v-if="project">
                    <div>
                        <VueSlickCarousel ref="c1" :asNavFor="c2" :touchMove="true"
                                          @afterChange="changeImage"
                                          :fade="true">
                            <div class="main-slide cursor-pointer" @click="showImage()" v-for="(item, i) in project.images" :key="i">
                                <img :src="'/uploads/images/'+item.image"/>
                            </div>
                        </VueSlickCarousel>
                    </div>
                    <div>
                        <VueSlickCarousel v-show="project.images.length >1" ref="c2" :asNavFor="c1"
                                          :slidesToShow="3" :focusOnSelect="true" :touchMove="true">
                            <div class="nav-slide" v-for="(item, i) in project.images" :key="i">
                                <div class="nav-slide-item">
                                    <img :src="'/uploads/images/'+item.image"/>
                                </div>
                            </div>
                        </VueSlickCarousel>
                    </div>
                    <div class="preview-image-wrapper">
                        <vue-gallery-slideshow :images="project_images" :index="index"
                                               @close="index = null"></vue-gallery-slideshow>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="text-center text-sm-start mb-4 mb-sm-0">
                        <p class="font-weight-bold line-height-1 text-color-dark fz-22">{{project.name}}</p>
                    </div>
                    <p class="text-3-5 mb-4 content-wrapper" v-if="project" v-html="project.content"></p>
                </div>
            </div>
        </div>

        <div class="position-relative pb-5 d-sm-none d-xl-block">
            <div class="position-absolute transform3dy-n50 left-0">
                <div class="appear-animation" data-appear-animation="fadeInRightShorterPlus"
                     data-appear-animation-delay="1500" data-appear-animation-duration="1500ms">
                    <div class="custom-square-1 bg-primary mt-0 mb-5"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectService from "../../services/ProjectService";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: "ProjectDetail",
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            project: {
                images: [
                    window.location.protocol + "//" + window.location.host + '/assets/img/business-image/default/placeholder.png',
                    window.location.protocol + "//" + window.location.host + '/assets/img/business-image/default/placeholder.png'
                ]
            },
            isLoading: true,
            c1: undefined,
            c2: undefined,
            index: null,
            current_index: 0,
            project_images: []
        };
    },
    computed: {},
    methods: {
        showImage() {
            this.index = this.current_index;
            this.project_images = [];
            if (this.project.images.length) {
                for (const item of this.project.images) {
                    if (item == null || item.image == null) continue;
                    let image_url = window.location.protocol + "//" + window.location.host + '/uploads/images/' + item.image;
                    this.project_images.push(image_url);
                }
            }
        },
        changeImage(index) {
            this.current_index = index;
        }
    },
    mounted() {
        ProjectService.detail(this.$route.params.id).then(response => {
            this.project = response || {};
            this.isLoading = false;
            this.c1 = this.$refs.c1;
            this.c2 = this.$refs.c2;
        }).catch(e => {
            this.isLoading = false;
        });


    }
}
</script>
