<template>
  <v-app id="inspire">
    <v-layout
      align-center
      style="position: absolute; top:15px; left:15px; z-index:1;"
    >
      <template v-if="$route.fullPath === '/'">
        <v-btn
          aria-label="open drawer button"
          flat
          icon
          @click.stop="toggleDrawer"
          ><v-icon>input</v-icon></v-btn
        >
        <span class="locale">Las Vegas, NV</span>
      </template>
      <template v-else>
        <v-btn
          aria-label="close drawer button"
          flat
          icon
          @click.stop="$router.go(-1)"
          ><v-icon>arrow_back</v-icon></v-btn
        >
      </template>
    </v-layout>
    <v-navigation-drawer
      :style="{ backgroundColor: $vuetify.theme.secondary }"
      :value="drawer"
      disable-resize-watcher
      absolute
      dark
      app
      :width="screenWidth"
    >
      <!-- All Main Drawer content is render here -->
      <drawer-layout>
        <v-btn
          aria-label="drawer toggle button"
          fab
          flat
          slot="close"
          style="outline:none;"
          @click="toggleDrawer"
        >
          <v-icon color="accent" large>highlight_off</v-icon>
        </v-btn>
      </drawer-layout>
    </v-navigation-drawer>

    <v-content id="main-content">
      <keep-alive :max="10">
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import DrawerLayout from "@/components/DrawerLayout.vue";

export default {
  components: {
    "drawer-layout": DrawerLayout
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer");
    }
  },
  computed: {
    screenWidth() {
      return window.screen.width;
      // return document.body.clientWidth;
    },
    drawer() {
      return this.$store.getters.drawer;
    }
  },
  mounted() {
    // make the whole serviceworker process into a promise so later on we can
    // listen to it and in case new content is available a toast will be shown
    window.isUpdateAvailable = new Promise(function(resolve) {
      // lazy way of disabling service workers while developing
      if (
        "serviceWorker" in navigator &&
        ["localhost", "127"].indexOf(location.hostname) === -1
      ) {
        // register service worker file
        navigator.serviceWorker
          .register("service-worker.js")
          .then(reg => {
            reg.onupdatefound = () => {
              const installingWorker = reg.installing;
              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case "installed":
                    if (navigator.serviceWorker.controller) {
                      // new update available
                      resolve(true);
                    } else {
                      // no update available
                      resolve(false);
                    }
                    break;
                }
              };
            };
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.error("[SW ERROR]", err);
          });
      }
    });

    // Update:
    // this also can be incorporated right into e.g. your run() function in angular,
    // to avoid using the global namespace for such a thing.
    // because the registering of a service worker doesn't need to be executed on the first load of the page.

    // listen to the service worker promise in index.html to see if there has been a new update.
    // condition: the service-worker.js needs to have some kind of change - e.g. increment CACHE_VERSION.
    window["isUpdateAvailable"].then(isAvailable => {
      if (isAvailable) {
        // const toast = this.toastCtrl.create({
        //     message: 'New Update available! Reload the webapp to see the latest juicy changes.',
        //     position: 'bottom',
        //     showCloseButton: true,
        // });
        // toast.present();
        alert(
          "New update available! Reload the webapp to get the latest changes."
        );
      }
    });
  }
};
</script>
<style scoped>
#main-content {
  position: relative;
  background-image: url("/assets/vegas.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.locale {
  letter-spacing: 0.8em;
  margin-left: 60px;
  font-size: 8px;
  color: rgb(20, 20, 20, 0.4);
}
@media only screen and (max-width: 450px) {
  .locale {
    display: none;
  }
}
</style>
