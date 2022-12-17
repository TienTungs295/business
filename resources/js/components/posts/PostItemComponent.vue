<template>
</template>
<script>


export default {
    name: "PostItem",
    props: ['item'],
    methods: {
        setDefaultImg(event){
            event.target.src = window.location.protocol + "//" + window.location.host+'/assets/images/default/placeholder.png'
        }
    },
    mounted() {
    }
}
</script>
