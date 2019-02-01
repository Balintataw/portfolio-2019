import Vue from 'vue';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate'

// Route interface for Vue Router
import Routes from '@/routes';
import Store  from '@/store';

// Component File app entry point
import App from '@/App';

Vue.use(VeeValidate);
Vue.use(Vuetify, {
    theme: {
        primary: '#fff3d8',
        secondary: '#222222',
        accent: '#fd7752',
        error: '#f44336',
        warning: '#ffc107',
        info: '#00bcd4',
        success: '#4caf50'
    }
});

const app = new Vue({
    el: '#app',
    router: Routes,
    store: Store,
    render: h => h(App),
});

export default app;
