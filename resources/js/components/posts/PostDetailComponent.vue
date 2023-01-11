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
                            <li class="active fz-12-i">{{ post.name }}</li>
                        </ul>
                        <h1 class="position-absolute top-100 left-0 text-color-light font-weight-bold text-6 line-height-3 text-end mt-5-5">
                            <span class="d-block position-relative z-index-1 pb-5 ps-lg-3">Chi tiết bài viết</span>
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
                    <loading-component v-bind:loading="isLoading"></loading-component>
                    <article>
                        <div class="card border-0">
                            <div class="card-body z-index-1 p-0">
                                <p class="text-uppercase text-1 mb-3 text-color-default fz-12" v-if="post != null">
                                    <time>{{ post.updated_at | dateFormat }}</time>
                                    <span class="opacity-3 d-inline-block px-2">|</span>
                                    <span v-if="post.total_comments != null">{{ post.total_comments }} Bình luận</span>
                                    <span v-if="post.user != null" class="opacity-3 d-inline-block px-2">|</span>
                                    <span v-if="post.user != null">{{ post.user.name }}</span>
                                </p>
                                <div class="post-image pb-4">
                                    <img class="card-img-top custom-border-radius-1"
                                         :src="'/uploads/images/'+post.image" @error="setDefaultImg" alt="DMT Image">
                                </div>

                                <div class="card-body p-0">
                                    <p v-html="post.content"></p>
                                    <hr class="my-5">
                                    <div id="comments" class="post-block post-comments">
                                        <h3 class="text-color-primary text-capitalize font-weight-bold text-5 m-0 mb-3">
                                            {{ post.total_comments }} bình luận cho bài viết</h3>
                                        <ul class="comments">
                                            <li v-for="item in commentData.data">
                                                <div class="comment">
                                                    <div
                                                        class="img-thumbnail img-thumbnail-no-borders d-none d-sm-block">
                                                        <img class="avatar rounded-circle"
                                                             src="/assets/img/business-image/default/default-user-image.png"
                                                             alt="user"/>
                                                    </div>
                                                    <div class="comment-block">
                                                        <div class="comment-arrow"></div>
                                                        <span class="comment-by">
																	<strong
                                                                        class="text-dark">{{
                                                                            item.customer_name
                                                                        }}</strong>
																</span>
                                                        <p>{{ item.comment }}</p>
                                                        <span
                                                            class="date float-end">{{
                                                                item.created_at| dateTimeFormat
                                                            }}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div>
                                            <loading-component v-bind:loading="isLoadingComment"></loading-component>
                                        </div>
                                        <div class="text-center pdt-25"
                                             v-if="commentData.next_page_url != null && !isLoadingComment">
                                            <a @click="paginate()"
                                               class="custom-view-more d-inline-flex align-items-center btn btn-primary font-weight-semibold rounded-0 text-3-5 btn-px-2">
                                                Xem thêm
                                                <img class="mgl-5" width="15" height="15"
                                                     src="/assets/img/business-icons/arrow-down.svg"
                                                     alt="DMT button"/>
                                            </a>
                                        </div>

                                        <h3 class="text-color-primary text-capitalize font-weight-bold text-5 m-0 mb-3 mt-5">
                                            Để lại bình luận</h3>

                                        <div class="custom-form-simple-validation p-4 rounded bg-color-grey">
                                            <div class="p-2">
                                                <div class="row">
                                                    <div class="form-group col-lg-6">
                                                        <label
                                                            class="form-label required mb-1 font-weight-bold text-dark">Họ
                                                            và tên</label>
                                                        <input type="text" maxlength="200"
                                                               :class="{'is-invalid': errors.customer_name}"
                                                               v-model="comment.customer_name"
                                                               class="form-control py-3 px-3 border-0 box-shadow-none"
                                                               name="name" id="name">
                                                        <div class="invalid-feedback" v-if="errors.customer_name">
                                                            <span v-for="error in errors.customer_name" class="d-block">{{
                                                                    error
                                                                }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label
                                                            class="form-label mb-1 font-weight-bold text-dark">Email</label>
                                                        <input type="email" v-model="comment.customer_email"
                                                               :class="{'is-invalid': errors.customer_email}"
                                                               maxlength="200"
                                                               class="form-control py-3 px-3 border-0 box-shadow-none"
                                                               name="email" id="email">
                                                        <div class="invalid-feedback" v-if="errors.customer_email">
                                                            <span v-for="error in errors.customer_email"
                                                                  class="d-block">{{ error }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col">
                                                        <label
                                                            class="form-label mb-1 font-weight-bold text-dark">Nội
                                                            dung</label>
                                                        <textarea maxlength="5000" rows="8" v-model="comment.comment"
                                                                  :class="{'is-invalid': errors.comment}"
                                                                  class="form-control p-3 border-0 box-shadow-none"
                                                                  name="message" id="message"></textarea>
                                                        <div class="invalid-feedback" v-if="errors.comment">
                                                            <span v-for="error in errors.comment"
                                                                  class="d-block">{{ error }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col">
                                                        <button type="button"
                                                                @click="sendComment"
                                                                class="custom-view-more d-inline-flex align-items-center btn btn-primary font-weight-semibold rounded-0 text-3-5 btn-px-2">
                                                            Gửi
                                                            <img width="27" height="27" class="arrow-icon"
                                                                 src="/assets/img/demos/construction/icons/arrow-right-white.svg" alt=""/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                       @click="changePostCategory(null)">
                                        Tất cả ({{ totalPosts }})
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="nav-link bg-transparent border-0 cursor-pointer fz-14-i"
                                        @click="changePostCategory(0)">
                                        Không danh mục ({{ totalUncategoryPosts }})
                                    </a>
                                </li>
                                <li class="nav-item" v-for="item in postCategories">
                                    <a
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
        <div class="position-relative pb-5 d-none d-xl-block pdt-60">
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
import CommentService from "../../services/CommentService";
import {mapGetters} from "vuex";
import PostCategoryService from "../../services/PostCategoryService";

export default {
    name: "PostDetail",
    data() {
        return {
            post: {},
            nextPost: {},
            prevPost: {},
            isLoading: true,
            isRecentLoading: true,
            comment: {},
            comments: {},
            isLoadingComment: true,
            errors: {},
            commentData: {
                data: []
            }
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
        },
        sendComment() {
            this.comment.post_id = this.post.id;
            CommentService.save(this.comment, true).then(response => {
                this.errors = {};
                this.comment = {};
            }).catch(response => {
                this.errors = response.errors || {};
            });
        },
        paginate() {
            this.isLoadingComment = true;
            let param = {
                post_id: this.post.id
            }
            param.page = this.commentData.current_page + 1;
            CommentService.findByPost(param).then(response => {
                let resData = response || {};
                let comments = resData.data || [];
                this.commentData.data = this.commentData.data.concat(comments);
                this.commentData.next_page_url = resData.next_page_url;
                this.commentData.current_page = resData.current_page;
                this.isLoadingComment = false;
            }).catch(e => {
                this.isLoadingComment = false;
            });
        },
    },
    mounted() {
        PostService.detail(this.$route.params.id).then(response => {
            let data = response || {};
            this.nextPost = data.next_post;
            this.post = data.post;
            this.prevPost = data.prev_post;
            this.isLoading = false;
        }).catch(e => {
            this.isLoading = false;
        });

        PostService.recent(this.$route.params.id).then(response => {
            let recentPosts = response || [];
            this.$store.commit("setRecentPosts", recentPosts);
            this.isRecentLoading = false;
        }).catch(e => {
            this.isRecentLoading = false;
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

        CommentService.findByPost({post_id: this.$route.params.id}).then(response => {
            this.commentData = response || {};
            this.isLoadingComment = false;
        }).catch(response => {
            this.isLoadingComment = false;
        });
    }
}
</script>
