import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from './store'

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: "home",
        component: () => import("./components/HomeComponent"),
    },
    {
        path: '/tin-tuc-su-kien',
        name: "postList",
        component: () => import("./components/posts/PostListComponent"),
    },
];
const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
