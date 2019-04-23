import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawerOpen: false,
        githubApiResponse: []
    },
    getters: {
        drawer: (state) => {
            return state.drawerOpen;
        },
        getCachedApiResponse: (state) => {
            return state.githubApiResponse;
        }
    },
    mutations: {
        toggleDrawer(state) {
            state.drawerOpen = !state.drawerOpen;
        },
        setGithubApiResponse(state, context) {
            state.githubApiResponse = context.githubApiResponse;
        }
    },
    actions: {
        toggleDrawer(context) {
            context.commit('toggleDrawer');
        },
        setGithubApiResponse(context, payload) {
            context.commit('setGithubApiResponse', payload);
        }
    }
});
