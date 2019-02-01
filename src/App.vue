<template>
  <v-app id="inspire">
    <v-layout align-center style="position: absolute; top:15px; left:15px; z-index:1;">
        <v-btn style="outline:none;" fab flat @click.stop="drawer = !drawer"><v-icon>input</v-icon></v-btn>
        <span style="letter-spacing:0.8em; margin-left:60px; font-size:8px; color:rgb(20,20,20,0.4);">Las Vegas, NV</span>
    </v-layout>
    <v-navigation-drawer
        style="background-color: #222222;"
        v-model="drawer"
        disable-resize-watcher
        absolute
        dark
        app
        :width="screenWidth"
    >
    <!-- Main Drawer container -->
        <drawer-layout>
            <v-btn fab flat slot="close" style="outline:none;" @click="drawer = !drawer">
                <v-icon color="accent" large>highlight_off</v-icon>
            </v-btn>
        </drawer-layout>
    </v-navigation-drawer>

    <v-content id="main-content">

          <router-view></router-view>

    </v-content>

    <!-- <v-footer color="primary" dark class="white--text" app style="padding:0 10px;">
        <span>Jossendal Development</span>
        <v-spacer></v-spacer>
        <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import DrawerLayout from '@/components/DrawerLayout.vue';

export default {
    components: {
        'drawer-layout' : DrawerLayout,          
    },
    data: () => ({
        drawer: false,
    }),
    computed: {
        screenWidth() {
            return window.screen.width;
        }
    }
}
</script>
<style scoped>
    #main-content {
        position: relative;
        background-image: url('./assets/vegas.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>
