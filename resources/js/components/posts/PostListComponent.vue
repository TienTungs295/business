<template>
</template>

<script>
import PostService from "../../services/PostService";

export default {
    name: "PostDetail",
    data() {
        return {
            paginate: {},
            recentPosts: [],
            isLoading: true,
            isRecentLoading: true
        };
    },
    methods: {
        changePage: function (page) {
            this.$router.push({name: 'postList', query: {page_size: page}})
        },
        setDefaultImg(event){
            event.target.src = window.location.protocol + "//" + window.location.host+'/assets/images/default/placeholder.png'
        }
    },
    mounted() {
        let page = this.$route.query.page || 1;
        let param = {
            page_size: 10,
            page: page
        };
        PostService.findAll(param).then(response => {
            this.paginate = response || [];
            this.isLoading = false;
        }).catch(e => {
            this.isLoading = false;
        });

        PostService.recent().then(response => {
            this.recentPosts = response || [];
            this.isRecentLoading = false;
        }).catch(e => {
            this.isRecentLoading = false;
        });
    }
}
</script>
