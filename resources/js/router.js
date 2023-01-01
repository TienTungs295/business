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
        path: '/dich-vu',
        name: "service",
        component: () => import("./components/services/ServiceListComponent"),
    },
    {
        path: '/tin-tuc-su-kien',
        name: "postList",
        component: () => import("./components/posts/PostListComponent"),
    },
    {
        path: '/chi-tiet-tin-tuc-su-kien/:slug/:id',
        name: "postDetail",
        component: () => import("./components/posts/PostDetailComponent"),
    },
    {
        path: '/du-an',
        name: "projectList",
        component: () => import("./components/projects/ProjectListComponent"),
    },
    {
        path: '/chi-tiet-du-an/:slug/:id',
        name: "projectDetail",
        component: () => import("./components/projects/ProjectDetailComponent"),
    },
    {
        path: '/lien-he',
        name: "contactUs",
        component: () => import("./components/ContactUsComponent"),
    },
    {
        path: '/ve-chung-toi',
        name: "aboutUs",
        component: () => import("./components/AboutUsComponent"),
    }
];
const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (from.name != to.name) window.scrollTo(0, 0);
    next();
});

export default router;
