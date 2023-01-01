<template>
    <div class="d-flex-center loading-wrapper" v-if="loading" :class="center ?'center-loading':''">
        <div class="loadingio-spinner-double-ring-4szlxkw6kod"><div class="ldio-a0x39i9c6fb">
            <div></div>
            <div></div>
            <div><div></div></div>
            <div><div></div></div>
        </div></div>
    </div>
</template>

<style  lang="css" scoped>
@keyframes ldio-a0x39i9c6fb {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
}
.ldio-a0x39i9c6fb div { box-sizing: border-box!important }
.ldio-a0x39i9c6fb > div {
    position: absolute;
    width: 74px;
    height: 74px;
    top: 13px;
    left: 13px;
    border-radius: 50%;
    border: 4px solid #000;
    border-color: #d80d07 transparent #d80d07 transparent;
    animation: ldio-a0x39i9c6fb 0.9090909090909091s linear infinite;
}

.ldio-a0x39i9c6fb > div:nth-child(2), .ldio-a0x39i9c6fb > div:nth-child(4) {
    width: 64px;
    height: 64px;
    top: 18px;
    left: 18px;
    animation: ldio-a0x39i9c6fb 0.9090909090909091s linear infinite reverse;
}
.ldio-a0x39i9c6fb > div:nth-child(2) {
    border-color: transparent #1246ab transparent #1246ab
}
.ldio-a0x39i9c6fb > div:nth-child(3) { border-color: transparent }
.ldio-a0x39i9c6fb > div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}
.ldio-a0x39i9c6fb > div:nth-child(3) div:before, .ldio-a0x39i9c6fb > div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    top: -4px;
    left: 31px;
    background: #d80d07;
    border-radius: 50%;
    box-shadow: 0 70px 0 0 #d80d07;
}
.ldio-a0x39i9c6fb > div:nth-child(3) div:after {
    left: -4px;
    top: 31px;
    box-shadow: 70px 0 0 0 #d80d07;
}

.ldio-a0x39i9c6fb > div:nth-child(4) { border-color: transparent; }
.ldio-a0x39i9c6fb > div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}
.ldio-a0x39i9c6fb > div:nth-child(4) div:before, .ldio-a0x39i9c6fb > div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    top: -4px;
    left: 26px;
    background: #1246ab;
    border-radius: 50%;
    box-shadow: 0 60px 0 0 #1246ab;
}
.ldio-a0x39i9c6fb > div:nth-child(4) div:after {
    left: -4px;
    top: 26px;
    box-shadow: 60px 0 0 0 #1246ab;
}
.loadingio-spinner-double-ring-4szlxkw6kod {
    width: 80px;
    height: 80px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
}
.ldio-a0x39i9c6fb {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.8);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
}
.ldio-a0x39i9c6fb div { box-sizing: content-box; }

.center-loading {
    z-index: 200;
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgba(255,255,255, 0.8);
}
</style>

<script>
export default {
    name: "Loading",
    props: ['loading', 'center'],
    data() {
        return {};
    },
    methods: {},
    mounted() {

    }
}
</script>
