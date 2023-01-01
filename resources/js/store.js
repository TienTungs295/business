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
            projectCategories: []
        }
    },
    getters: {
        totalPosts: state => state.object.totalPosts,
        totalUncategoryPosts: state => state.object.totalUncategoryPosts,
        recentPosts: state => state.object.recentPosts,
        postCategories: state => state.object.postCategories,
        projectPaginate: state => state.object.projectPaginate,
        projectCategories: state => state.object.projectCategories
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
