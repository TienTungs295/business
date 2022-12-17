<template>

</template>

<script>
import PostService from "../../services/PostService";

export default {
    name: "PostDetail",
    data() {
        return {
            post: {},
            nextPost: {},
            prevPost: {},
            relatedPosts: [],
            recentPosts: [],
            isLoading: true,
            isRelatedLoading: true,
            isRecentLoading: true,
        };
    },
    methods: {
        setDefaultImg(event){
            event.target.src = window.location.protocol + "//" + window.location.host+'/assets/images/default/placeholder.png'
        }
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

        PostService.related(this.$route.params.id).then(response => {
            this.relatedPosts = response || [];
            this.isRelatedLoading = false;
        }).catch(e => {
            this.isRelatedLoading = false;
        });

        PostService.recent(this.$route.params.id).then(response => {
            this.recentPosts = response || [];
            this.isRecentLoading = false;
        }).catch(e => {
            this.isRecentLoading = false;
        });
    }
}
</script>
