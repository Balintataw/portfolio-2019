<template>
    <v-container dark fluid fill-height class="project-container" :style="{backgroundColor: $vuetify.theme.secondary}">
        <v-layout column mt-4>
            <v-layout wrap>
                <!-- Professional Projects section -->
                <v-flex xs12 md6>
                    <v-layout column justify-center align-center>
                        <h2 class="category-title">Professional Projects</h2>
                        <v-list class="professional-project-list" :class="{'mr-auto': $vuetify.breakpoint.mdAndUp}">
                            <v-list-tile 
                                v-for="project in getProfessionalProjects"
                                :key="project.title"
                                class="project-list-item-left">
                                <v-list-tile-content>
                                    <a 
                                        class="project-titles" 
                                        @mouseenter="changePopupText(project.id)" 
                                        @mouseleave="popupText = ''"
                                        :href="project.url"
                                        v-on="project && project.ref ? { click: () => openModal(project.ref) } : null "
                                        _target="blank">{{ project.title }}</a>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-layout>
                </v-flex>
                <!-- Personal Projects section -->
                <v-flex xs12 md6>
                    <v-layout column justify-center align-center>
                        <h2 class="category-title">Personal Projects</h2>
                        <v-list class="personal-project-list" :class="{'ml-auto': $vuetify.breakpoint.mdAndUp}">
                            <v-list-tile 
                                v-for="project in getPersonalProjects"
                                :key="project.title"
                                class="project-list-item-right">
                                <v-list-tile-content>
                                    <a 
                                        class="project-titles" 
                                        @mouseenter="changePopupText(project.id)" 
                                        @mouseleave="popupText = ''"
                                        v-on="project && project.ref ? { click: () => openModal(project.ref) } : null ">
                                        {{ project.title }}
                                    </a>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-layout>

<!-- Text description center section -->

        <v-layout class="text-popup">
            <p>{{ popupText }}</p>
        </v-layout>

<!-- Begin onerous modals section -->

        <joss-dialog 
            v-for="project in getProjectsWithModal" 
            maxWidth="80%" 
            :ref="project.ref" 
            :key="project.title+project.id">
            <div slot="modaltitle">{{ project.title }}</div>
            <div slot="modalcontent">
                <v-layout wrap>
                    <v-flex xs12 sm3>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li 
                                v-for="item in project.tech" 
                                :key="project.title + item">
                                {{ item }}
                            </li>
                        </ul>
                        <p class="pt-2">{{ project.description }}</p>
                    </v-flex>
                    <v-flex xs12 sm9>
                        <v-layout wrap justify-space-around>
                            <!-- this is the zoom on hover variation, WIP -->
                            <!-- <div class="project-images">
                                <zoom-on-hover img-normal="/assets/cms_admin.png" img-zoom="/assets/cms_admin.png" :scale="2" imgAlt="CMS Dashboard"></zoom-on-hover>
                            </div>
                            <img @mousemove="zoomIn($event)" @mouseout="zoomOut($event)" src="../assets/cms_admin.png" class="project-images" alt="CMS Dashboard"/> -->
                            <img 
                                v-for="(img, i) in project.images" 
                                :key="img.alt+i"
                                :src="img.url"
                                class="project-images" 
                                :alt="img.alt"/>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <div slot="detailsButton" v-if="project.button">
                <v-btn color="accent" :disabled="!project.button.url" right @click="projectLink(project.button.url)">
                    {{ project.button.text }}
                </v-btn>
            </div>
        </joss-dialog>

    </v-container>
</template>
<script>
import Dialog from '@/components/Dialog.vue';
import ZoomOnHover from '@/components/ZoomOnHover.vue';

import projectsJson from '../projects.json';

export default {
    components: {
        'joss-dialog': Dialog,
        'zoom-on-hover': ZoomOnHover,
    },
    data() {
        return {
            projects: projectsJson,
            popupText: ''
        }
    },
    methods: {
        changePopupText(id) {
            this.popupText = this.projects.data[id].description;
        },
        projectLink(url) {
            window.open(url);
        },

        openModal(ref) {
            // ref is an array of component props
            this.$refs[ref][0].open();
        },
        getRef(ref) {
            return ref;
        },
    },
    computed: {
        getPersonalProjects() {
            return this.projects.data.filter((p) => {
                return p.type === 'personal';
            })
        },
        getProfessionalProjects() {
            return this.projects.data.filter((p) => {
                return p.type === 'professional';
            })
        },
        getProjectsWithModal() {
            return this.projects.data.filter(p => {
                return p.modal
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.project-container {
    background: radial-gradient(circle farthest-side,#fd775248, transparent, transparent);
    height: 85vh;
    // touch-action: none;
}
.category-title {
    color: var(--v-accent-base);
    font-size: 1.7rem;
}
.project-images {
    max-height: 200px;
    /* width: 96%; */
    max-width: 300px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
}
.project-titles {
    font-family: AvenirNext, Avenir, Helvetica, Arial, sans-serif;
    font-size: 2.4rem;
    cursor: pointer;
    text-decoration: none;
    color: var(--v-primary-base);
}
.project-titles:hover {
    color: var(--v-primaryDark-base);
}
.professional-project-list, .personal-project-list {
    perspective: 40em;
    margin-top: 1.2rem;
    touch-action: manipulation;
}
.project-list-item-right > div > div {
    align-items: flex-end;
}
.project-list-item-left > div > div {
    align-items: flex-start;
}
@for $i from 1 to 10 {
    .project-list-item-left:nth-child(#{$i}) { 
        animation: dropleft 0.5s; 
        animation-delay: $i * 0.05s; 
        animation-fill-mode: both;
    }
    .project-list-item-right:nth-child(#{$i}) { 
        animation: dropright 0.5s; 
        animation-delay: $i * 0.05s; 
        animation-fill-mode: both;
    }
}
@keyframes dropleft {
    from { opacity: 0; margin-bottom: 0; transform: translateY(-50px) rotateY(0deg); }
    to { opacity: 1; margin-bottom: 30px; transform: translateY(0px) rotateY(35deg); }
}
@keyframes dropright {
    from { opacity: 0; margin-bottom: 0; transform: translateY(-50px) rotateY(0deg); }
    to { opacity: 1; margin-bottom: 2rem; transform: translateY(0px) rotateY(-35deg); }
}
@keyframes recenter {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(0deg); }
}
@media screen and (max-width:960px) {
    .professional-project-list, .personal-project-list {
        perspective: none;
    }
    @for $i from 1 to 10 {
        .project-list-item-left:nth-child(#{$i}),
        .project-list-item-right:nth-child(#{$i}) { 
            animation: recenter 0.5s; 
            animation-delay: $i * 0.05s; 
            animation-fill-mode: both;
        }
        // .project-list-item-right:nth-child(#{$i}) { 
        //     animation: recenter 0.5s; 
        //     animation-delay: $i * 0.05s; 
        //     animation-fill-mode: both;
        // }
    }
    .text-popup {
        visibility: hidden;
    }
    .project-titles {
        font-size: 2.0rem;
    }
    .project-list-item-right > div > div,
    .project-list-item-left > div > div {
        align-items: center;
    }
}
@media screen and (max-width:600px) {

}
@media screen and (max-width:480px) {
    .project-titles {
        font-size: 1.5rem;
    }
}

.text-popup {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 25%;
    margin: 0 auto;
    z-index: 20;
    justify-content: center;
    align-items: center;
}
.text-popup > p {
    text-align: center;
    color: var(--v-primary-base);
}
</style>