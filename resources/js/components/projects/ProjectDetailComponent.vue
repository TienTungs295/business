<template>
    <div>
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
                            <li class="active fz-12-i">Tin tức & sự kiện</li>
                        </ul>
                        <h1 class="position-absolute top-100 left-0 text-color-light font-weight-bold text-6 line-height-3 text-end mt-5-5">
                            <span class="d-block position-relative z-index-1 pb-5 ps-lg-3">Tin tức & sự kiện</span>
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
    </div>
</template>

<script>
import ProjectService from "../../services/ProjectService";

export default {
    name: "ProjectList",
    data() {
        return {
            paginate: {},
            isLoading: true,
            projectCategories:[]
        };
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    }
}
</script>
