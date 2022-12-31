import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        object: {
            totalPosts: 0,
            totalUncategoryPosts: 0,
            recentPosts: [],
            postCategories: []
        }
    },
    getters: {
        totalPosts: state => state.object.totalPosts,
        totalUncategoryPosts: state => state.object.totalUncategoryPosts,
        recentPosts: state => state.object.recentPosts,
        postCategories: state => state.object.postCategories
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
        }
    }
})
