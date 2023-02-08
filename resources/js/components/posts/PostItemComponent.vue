<template>
    <router-link :to="{ name: 'postDetail', params: { slug: item.slug,id:item.id }}" class="text-decoration-none blog-item"
       data-cursor-effect-hover="plus">
        <div class="card border-0">
            <div class="card-img-top position-relative overlay">
                <div
                    class="position-absolute bottom-10 right-0 d-flex justify-content-end w-100 py-3 px-4 z-index-3">
											<span
                                                class="text-center bg-primary text-color-light font-weight-semibold text-5-5 line-height-2 px-3 py-2">
												<span class="position-relative z-index-2">
                                                    {{item.updated_at | getDay}}
													<span
                                                        class="d-block custom-font-size-1 positive-ls-2 px-1">{{item.updated_at | getMonth}}</span>
												</span>
											</span>
                </div>
                <img :src="'/uploads/images/'+item.image" class="img-fluid"
                     :alt="item.image"/>
            </div>
            <div class="card-body py-4 px-0">
                                <span
                                    class="d-block text-color-grey font-weight-semibold positive-ls-2 text-2">
                                    <span v-if="item.user != null"> {{item.user.name}}</span>
                                </span>
                <h3 class="text-transform-none font-weight-bold text-5 text-color-hover-primary mb-2">
                    {{item.name}}</h3>
<!--                <p class="mb-2" v-html="item.content"></p>-->
<!--                <span class="custom-view-more d-inline-flex font-weight-medium text-color-primary">-->
<!--											Xem thêm-->
<!--											<img width="27" height="27"-->
<!--                                                 src="img/demos/construction/icons/arrow-right.svg" alt="" data-icon-->
<!--                                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary ms-2'}"-->
<!--                                                 style="width: 27px;"/>-->
<!--										</span>-->
            </div>
        </div>
    </router-link>

</template>
<script>


export default {
    name: "PostItem",
    props: ['item'],
    methods: {
        setDefaultImg(event){
            event.target.src = window.location.protocol + "//" + window.location.host + '/assets/img/business-image/default/placeholder.png'
        }
    },
    mounted() {
    }
}
</script>
