import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        object: {
            totalPosts: 0,
            totalUncategoryPosts: 0,
            recentPosts: [],
            postCategories: [],
            projectPaginate: {
                data: []
            },
            projectCategories: [],
            services: {
                1: {
                    id: 1,
                    icon: "/assets/img/business-image/services/house-plant.svg",
                    shortTitle: "Tư vấn thiết kế quy hoạch công trình",
                    title: "Tư vấn thiết kế quy hoạch công trình",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                2: {
                    id: 2,
                    icon: "/assets/img/business-image/services/pencil-ruler.svg",
                    shortTitle: "Tư vấn thiết kế kiến trúc và kết cấu công trình",
                    title: "Tư vấn thiết kế kiến trúc và kết cấu công trình",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                3: {
                    id: 3,
                    icon: "/assets/img/business-image/services/horizontal-distribute-center.svg",
                    shortTitle: "Tư vấn thiết kế cơ điện",
                    title: "Tư vấn thiết kế cơ điện",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                4: {
                    id: 4,
                    icon: "/assets/img/business-image/services/icon-plumbing.svg",
                    shortTitle: "Tư vấn thiết kế hệ thống cấp thoát nước",
                    title: "Tư vấn thiết kế hệ thống cấp thoát nước",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                5: {
                    id: 5,
                    icon: "/assets/img/business-image/services/indent-firstline.svg",
                    shortTitle: "Tư vấn thiết kế hệ thống điều hòa không khí, thông gió",
                    title: "Tư vấn thiết kế hệ thống điều hòa không khí, thông gió",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                6: {
                    id: 6,
                    icon: "/assets/img/business-image/services/transform-bezier.svg",
                    shortTitle: "Thiết kế xây dựng mô hình Bim – Revit",
                    title: "Thiết kế xây dựng mô hình Bim – Revit",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                7: {
                    id: 7,
                    icon: "/assets/img/business-image/services/share.svg",
                    shortTitle: "Tư vấn chuyển giao công nghệ",
                    title: "Tư vấn chuyển giao công nghệ",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                8: {
                    id: 8,
                    icon: "/assets/img/business-image/services/todolist-pen.svg",
                    shortTitle: "Quản lý dự án",
                    title: "Quản lý dự án",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                9: {
                    id: 9,
                    icon: "/assets/img/business-image/services/magnifier.svg",
                    shortTitle: "Giám sát thi công",
                    title: "Giám sát thi công",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
                10: {
                    id: 10,
                    icon: "/assets/img/business-image/services/square-check.svg",
                    shortTitle: "Thẩm định thiết kế, kiểm định chất lượng công trình",
                    title: "Thẩm định thiết kế, kiểm định chất lượng công trình",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                },
            }
        }
    },
    getters: {
        totalPosts: state => state.object.totalPosts,
        totalUncategoryPosts: state => state.object.totalUncategoryPosts,
        recentPosts: state => state.object.recentPosts,
        postCategories: state => state.object.postCategories,
        projectPaginate: state => state.object.projectPaginate,
        projectCategories: state => state.object.projectCategories,
        services: state => state.object.services
    },
    mutations: {
        setTotalPosts(state, newValue) {
            state.object.totalPosts = newValue;
        },
        setTotalUncategoryPosts(state, newValue) {
            state.object.totalUncategoryPosts = newValue;
        },
        setRecentPosts(state, newValue) {
            state.object.recentPosts = newValue;
        },
        setPostCategories(state, newValue) {
            state.object.postCategories = newValue;
        },
        setProjectPaginate(state, newValue) {
            state.object.projectPaginate = newValue;
        },
        setProjectCategories(state, newValue) {
            state.object.projectCategories = newValue;
        }
    }
})
