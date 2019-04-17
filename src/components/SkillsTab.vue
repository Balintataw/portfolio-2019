<template>
    <v-container class="container" dark fluid>
        <v-layout column>
            <h3 :style="{color: $vuetify.theme.accent}" style="margin:0 auto;">Preferred Technologies</h3>
            <v-layout wrap justify-center style="width:80%; margin:20px auto 0;">                
                <v-progress-circular
                    v-for="(skill, i) in skills"
                    :key="skill.name + i"
                    :rotate="360"
                    :size="130"
                    :width="20"
                    :value="skill.value"
                    :color="skill.color"
                    style="margin:10px;"
                    >
                    <v-img :src="getImageUrl(skill.name)" height="50" width="50" :alt="'Skill ' + skill.name"></v-img>
                </v-progress-circular>
            </v-layout>
            <!-- <h3 :style="{color: $vuetify.theme.accent}" style="margin:0 auto;">Some other title</h3>
            <v-layout wrap justify-content-between style="width:80%; margin:20px auto 0;">                
                <template v-for="(stack, i) in stacks">
                    <small :key="i + '77'" :style="{color: stack.color}">{{ stack.name }}</small>
                    <v-progress-linear
                        :key="stack + i"
                        :color="stack.color"
                        height="13"
                        :value="stack.value"
                        style="margin: 5px 0;"
                    ></v-progress-linear>
                </template>
            </v-layout> -->
        </v-layout>
    </v-container>
</template>
<script>

/* logo images need to be named in accordance with their skill name for proper path */

export default {
    data: () => ({
        skills: [
            { 'name':'js', 'value': 100, 'color': '#f7d94d' },
            { 'name':'vue', 'value': 100, 'color': '#20c672' },
            { 'name':'react','value': 100, 'color': '#67daf9' },
            { 'name':'angular','value': 100, 'color': '#b52e31' },
            { 'name':'nodejs','value': 100, 'color': '#88cf3a' },
            // { 'name':'Express.js','value': 100, 'color': '#82b440' },
            { 'name':'laravel','value': 100, 'color': '#f26464' },
            { 'name':'mysql','value': 100, 'color': '#f08c28' },
        ],
        stacks: [
            { 'name':'vue', 'value': 95, 'color': '#20c672' },
            { 'name':'react','value': 90, 'color': '#67daf9' },
            { 'name':'mysql','value': 85, 'color': '#f08c28' },
            { 'name':'nodejs','value': 80, 'color': '#88cf3a' },
            // { 'name':'Express.js','value': 100, 'color': '#82b440' },
            { 'name':'laravel','value': 75, 'color': '#f26464' },

        ],
    }),
    methods: {
        getImageUrl(type) {
            return `/assets/${type}_logo.png`;
        }
    }
}
</script>
<style scoped>
.container {
    position: relative;
    background-color: var(--v-secondary-base);
    overflow: hidden;
    height: 85vh;
}
.container::before {
    content: "";
    opacity: 0.2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background: url('/assets/code_sample.png') 10px 0px no-repeat;
    background-size: cover;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg) scale(1.5);
}
</style>

