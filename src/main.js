import Vue from "vue";
import Vuetify from "vuetify";
// import VeeValidate from 'vee-validate';
// import VueAnalytics from 'vue-analytics';
import VueFirestore from "vue-firestore";

// Route interface for Vue Router
import Routes from "@/routes";
import Store from "@/store";

// Component File app entry point
import App from "@/App";

// import { db } from '../firebase';
import "./registerServiceWorker";

// Vue.use(VeeValidate);
Vue.use(VueFirestore);
// Vue.use(VueAnalytics, {
//     id: () => db.collection('keys')
//         .doc('analytics')
//         .get()
//         .then(doc => {
//             if(doc.exists) {
//                 return doc.data().id
//             } else {
//                 // eslint-disable-next-line no-console
//                 console.log("Analytics cannot be initialized")
//             }
//         }),
//     router: Routes
// });
Vue.use(Vuetify, {
  iconfont: "md",
  options: {
    customProperties: true
  },
  primaryDark: "#8f8776",
  theme: {
    primaryDark: "#8f8776",
    primary: "#fff3d8",
    secondary: "#222222",
    accent: "#fd7752",
    error: "#f44336",
    warning: "#ffc107",
    info: "#00bcd4",
    success: "#4caf50"
  }
});

const app = new Vue({
  el: "#app",
  router: Routes,
  store: Store,
  render: h => h(App)
});

export default app;
