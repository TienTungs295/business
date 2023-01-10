<template>
    <div class="dmt-post">
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

        <div class="container pt-4 pb-5 my-5">
            <div class="row">
                <div class="col-lg-8 mb-5 mb-lg-0">

                    <article class="mb-5 post-item" v-if="!isLoading && paginate.data.length"
                             v-for="item in paginate.data">
                        <div class="card bg-transparent border-0 custom-border-radius-1">
                            <div class="card-body p-0 z-index-1">

                                <router-link
                                             :to="{ name: 'postDetail', params: { slug: item.slug,id:item.id }}">
                                    <img class="card-img-top custom-border-radius-1 mb-2"
                                         :src="'/uploads/images/'+item.image" :alt="item.image" @error="setDefaultImg"
                                         alt="DMT Image">
                                </router-link>

                                <p class="text-uppercase text-color-default fz-12 my-2">
                                    <time>{{ item.updated_at | dateFormat }}</time>
                                    <span class="opacity-3 d-inline-block px-2">|</span>
                                    {{ item.total_comments }} Bình luận
                                    <span v-if="item.user != null" class="opacity-3 d-inline-block px-2">|</span>
                                    <span v-if="item.user != null">{{ item.user.name }}</span>
                                </p>
                                <div class="card-body p-0">
                                    <h4 class="card-title text-5 font-weight-bold pb-1 mb-2">
                                        <router-link
                                            class="text-color-dark text-color-hover-primary text-decoration-none"
                                            :to="{ name: 'postDetail', params: { slug: item.slug,id:item.id }}">
                                            {{ item.name }}
                                        </router-link>
                                    </h4>
                                    <router-link
                                        class="text-decoration-none custom-link-hover-effects"
                                        :to="{ name: 'postDetail', params: { slug: item.slug,id:item.id }}">
                                       	<span
                                            class="custom-view-more d-inline-flex font-weight-medium text-color-primary">
													Xem thêm
													<img width="27" height="27" class="arrow-icon"
                                                         src="/assets/img/demos/construction/icons/arrow-right.svg"
                                                         alt="DMT Image"
                                                         style="width: 27px;"/>
												</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article class="mb-5 post-item" v-if="!isLoading && paginate.data.length == 0">
                        <div class="card bg-transparent border-0 custom-border-radius-1">
                            <div class="card-body p-0 z-index-1 text-center">
                                Không có dữ liệu
                            </div>
                        </div>
                    </article>

                    <ul v-if="paginate.last_page > 1 && paginate.data && paginate.data.length"
                        class="custom-pagination-style-1 pagination pagination-rounded pagination-md justify-content-center">
                        <li class="page-item" :class="paginate.prev_page_url == null ? 'disabled' : ''">
                            <a v-if="paginate.prev_page_url != null" class="page-link cursor-pointer"
                               @click="changePage(paginate.current_page - 1)">
                                <i class="fas fa-angle-left"></i>
                            </a>
                            <a class="page-link" v-else>
                                <i class="fas fa-angle-left"></i>
                            </a>
                        </li>
                        <li class="page-item" :class="paginate.current_page == i ? 'active' :''"
                            v-for="i in paginate.last_page">
                            <a class="page-link cursor-pointer" v-if="paginate.current_page != i"
                               @click="changePage(i)">{{ i }}</a>
                            <a class="page-link cursor-default" v-else>{{ i }}</a>
                        </li>

                        <li class="page-item" :class="paginate.next_page_url == null ? 'disabled' : ''">
                            <a v-if="paginate.next_page_url != null" class="page-link cursor-pointer"
                               @click="changePage(paginate.current_page + 1)">
                                <i class="fas fa-angle-right"></i>
                            </a>
                            <a class="page-link" v-else>
                                <i class="fas fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>

                </div>
                <div class="blog-sidebar col-lg-4 pt-4 pt-lg-0">
                    <aside class="sidebar">
                        <div class="px-3 mt-4">
                            <h3 class="text-color-quaternary text-capitalize font-weight-bold text-5 m-0 mb-3">Bài viết
                                gần đây</h3>
                            <div class="pb-2 mb-1">
                                <div v-for="item in recentPosts">
                                         <span
                                             class="text-color-default text-uppercase fz-12 mb-0 d-block text-decoration-none">
                                                {{ item.updated_at | dateFormat }}
                                             <span class="opacity-3 d-inline-block px-2">|</span>
                                             {{ item.total_comments }} Bình luận
                                             <span v-if="item.user != null"
                                                   class="opacity-3 d-inline-block px-2">|</span>
                                             <span v-if="item.user != null">{{ item.user.name }}</span>
                                </span>
                                    <router-link
                                        class="text-color-dark text-hover-primary font-weight-bold d-block pb-3 line-height-4"
                                        :to="{ name: 'postDetail', params: { slug: item.slug,id:item.id }}">
                                        {{ item.name }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="py-1 clearfix">
                            <hr class="my-2">
                        </div>
                        <div class="px-3 mt-4 post-category">
                            <h3 class="text-color-quaternary text-capitalize font-weight-bold text-5 m-0">Danh mục bài
                                viết</h3>
                            <ul class="nav nav-list flex-column mt-2 mb-0 p-relative right-9 ">
                                <li class="nav-item">
                                    <a class="nav-link bg-transparent border-0 cursor-pointer fz-14-i"
                                       :class="category_id == null ? 'active-link' :''"
                                       @click="changePostCategory(null)">
                                        Tất cả ({{ totalPosts }})
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a :class="category_id == 0 ? 'active-link' :''"
                                       class="nav-link bg-transparent border-0 cursor-pointer fz-14-i"
                                       @click="changePostCategory(0)">
                                        Không danh mục ({{ totalUncategoryPosts }})
                                    </a>
                                </li>
                                <li class="nav-item" v-for="item in postCategories">
                                    <a :class="category_id == item.id ? 'active-link' :''"
                                       class="nav-link bg-transparent border-0 cursor-pointer fz-14-i"
                                       @click="changePostCategory(item.id)">{{ item.name }}
                                        ({{ item.total_posts }})
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

        <div class="position-relative pb-5 d-none d-xl-block">
            <div class="position-absolute transform3dy-n50 left-0">
                <div>
                    <div class="custom-square-1 bg-primary mt-0 mb-5"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostService from "../../services/PostService";
import PostCategoryService from "../../services/PostCategoryService";
import {mapGetters} from "vuex";

export default {
    name: "PostList",
    data() {
        return {
            paginate: {},
            isLoading: true,
            category_id: null,
            isRecentLoading: true
        };
    },
    computed: {
        ...mapGetters([
            'totalPosts',
            'totalUncategoryPosts',
            'recentPosts',
            'postCategories'
        ])
    },
    methods: {
        changePage: function (page) {
            let queryParams = {};
            queryParams.page = page;
            let category_id = this.$route.query.category_id;
            if (category_id != null) queryParams.category_id = category_id;
            this.processRedirect(queryParams);
        },
        setDefaultImg(event) {
            event.target.src = window.location.protocol + "//" + window.location.host + '/assets/img/business-image/default/placeholder.png'
        },

        changePostCategory(category_id) {
            let queryParams = {};
            if (category_id != null) queryParams.category_id = category_id;
            this.processRedirect(queryParams);
        },

        processRedirect(queryParams) {
            this.$router.push({name: 'postList', query: queryParams}).catch(() => {
            });
        }
    },
    mounted() {
        let page = this.$route.query.page || 1;
        this.category_id = this.$route.query.category_id;
        let param = {
            page: page,
        };
        if (this.category_id != null) param.category_id = this.category_id;
        PostService.findAll(param).then(response => {
            this.paginate = response || [];
            this.isLoading = false;
        }).catch(e => {
            this.isLoading = false;
        });

        PostService.countAll().then(response => {
            let resData = response || {}
            this.$store.commit("setTotalPosts", resData.total_posts);
            this.$store.commit("setTotalUncategoryPosts", resData.total_uncategory_posts);
        }).catch(e => {
        });

        PostCategoryService.findAll().then(response => {
            let postCategories = response || [];
            this.$store.commit("setPostCategories", postCategories);
        }).catch(e => {
        });

        PostService.recent().then(response => {
            let recentPosts = response || [];
            this.$store.commit("setRecentPosts", recentPosts);
            this.isRecentLoading = false;
        }).catch(e => {
            this.isRecentLoading = false;
        });
    }
}
</script>
