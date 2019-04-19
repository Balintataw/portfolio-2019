<template>
    <v-app id="inspire">
        <v-layout align-center style="position: absolute; top:15px; left:15px; z-index:1;">
            <template v-if="$route.fullPath === '/'">
                <v-btn flat icon @click.stop="toggleDrawer"><v-icon>input</v-icon></v-btn>
                <span class="locale">Las Vegas, NV</span>
            </template>
            <template v-else>
                <v-btn flat icon @click.stop="$router.go(-1)"><v-icon>arrow_back</v-icon></v-btn>
            </template>
        </v-layout>
        <v-navigation-drawer
            :style="{backgroundColor: $vuetify.theme.secondary}"
            :value="drawer"
            disable-resize-watcher
            absolute
            dark
            app
            :width="screenWidth"
        >
        <!-- All Main Drawer content is render here -->
            <drawer-layout>
                <v-btn name="drawer toggle button" fab flat slot="close" style="outline:none;" @click="toggleDrawer">
                    <v-icon color="accent" large>highlight_off</v-icon>
                </v-btn>
            </drawer-layout>
        </v-navigation-drawer>

        <v-content id="main-content">

            <router-view></router-view>

        </v-content>

    </v-app>
</template>

<script>
import DrawerLayout from '@/components/DrawerLayout.vue';

export default {
    components: {
        'drawer-layout' : DrawerLayout,          
    },
    methods: {
        toggleDrawer() {
            this.$store.dispatch('toggleDrawer');
        }
    },
    computed: {
        screenWidth() {
            return window.screen.width;
        },
        drawer() {
            return this.$store.getters.drawer;
        }
    },
}
</script>
<style scoped>
    #main-content {
        position: relative;
        background-image: url('/assets/vegas.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .locale {
        letter-spacing:0.8em; 
        margin-left:60px; 
        font-size:8px; 
        color:rgb(20,20,20,0.4);
    }
    @media only screen and (max-width: 450px) {        
        .locale {
            display: none;
        }
    }
</style>
