import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawerOpen: false
    },
    getters: {
        drawer: (state) => {
            return state.drawerOpen;
        },
    },
    mutations: {
        toggleDrawer(state) {
            state.drawerOpen = !state.drawerOpen;
        },
    },
    actions: {
        toggleDrawer(context) {
            context.commit('toggleDrawer');
        },
    }
});
