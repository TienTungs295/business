<template>
    <div class="project-detail">
        <loading-component v-bind:loading="isLoading" v-bind:center="true"></loading-component>
        <section v-if="project.images.length">
            <VueSlickCarousel v-bind="settings" class="slick-wrapper style-1">
                <div class="slick-inner" v-for="item in project.images"
                     :style="{'background-image': 'url(' + `/uploads/images/`+`${item.image}`+ ')','background-size': 'cover', 'background-position': 'center center'}"
                     :key="i">
                    <div class="container position-relative z-index-1 h-100">
                        <p class="position-absolute bottom-15 right-0 text-color-light font-weight-bold text-5-5 line-height-3 text-end pb-0 pb-lg-5 mb-0 d-none d-sm-block">
                                <span
                                    class="d-block line-height-1 position-relative z-index-1 pb-5 ps-lg-3 mb-5-5 fz-18-i">{{
                                        project.name
                                    }}</span>
                            <span class="custom-svg-position-1">
											<svg class="svg-fill-color-primary-transparent"
                                                 data-appear-animation="fadeInLeftShorter"
                                                 data-appear-animation-delay="400" xmlns="http://www.w3.org/2000/svg"
                                                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 859.45 88.44" xml:space="preserve"
                                                 preserveAspectRatio="none">
												<polyline points="7.27,84.78 855.17,84.78 855.17,4.79 84.74,4.79 "/>
											</svg>
										</span>
                        </p>
                    </div>
                </div>
            </VueSlickCarousel>
        </section>

        <div class="container pb-5 pb-sm-0 my-5 project-content">
            <div class="row position-relative">
                <div class="col-lg-5 content-block-left mgb-20">
                    <p class="font-weight-bold line-height-1 text-color-dark fz-22 fz-22">{{$t('message.project_detail')}}</p>
                    <div class="fz-16 mgb-5">
                        <span>{{$t('message.project_name')}}: </span> <span class="fw-bold">{{ project.name }}</span>
                    </div>
                    <div class="fz-16 mgb-5">
                        <span>{{$t('message.type')}}: </span>
                        <span class="fw-bold"
                              v-if="project.project_categories != null && project.project_categories.length"
                              v-for="(category, index) in project.project_categories">
                                                        {{ category.name }}
                                                        <span
                                                            v-if="(index != (project.project_categories.length -1))">/</span>
                                                    </span>
                    </div>
                    <div class="fz-16 mgb-5">
                        <span>{{$t('message.field')}}: </span>
                        <span class="fw-bold"
                              v-if="project.project_fields != null && project.project_fields.length"
                              v-for="(field, index) in project.project_fields">
                                                        {{ field.name }}
                                                          <span
                                                              v-if="(index != (project.project_fields.length -1))">/</span>
                                                    </span>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="text-center text-sm-start mb-4 mb-sm-0">
                        <p class="font-weight-bold line-height-1 text-color-dark fz-22">{{ project.name }}</p>
                    </div>
                    <p class="text-3-5 mb-4 content-wrapper" v-if="project" v-html="project.content"></p>
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import {serviceBus} from "../../serviceBus";

export default {
    name: "ProjectDetail",
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            project: {
                images: []
            },
            isLoading: true,
            c1: undefined,
            c2: undefined,
            index: null,
            current_index: 0,
            project_images: [],
            settings: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "draggable": false,
                "touchMove": true,
                "fade": true
            }
        };
    },
    computed: {},
    methods: {
    },
    mounted() {
        serviceBus.$emit('initLocale');
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
