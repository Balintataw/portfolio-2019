<template>
    <v-container dark fluid fill-height class="project-container" :style="{backgroundColor: $vuetify.theme.secondary}">
        <v-layout column mt-4>
            <v-layout wrap>
                <!-- Professional Projects section -->
                <v-flex xs12 md6>
                    <v-layout column justify-center align-center>
                        <h2 class="category-title">Professional Projects</h2>
                        <v-list class="professional-project-list" :class="{'mr-auto': $vuetify.breakpoint.smAndUp}">
                            <v-list-tile 
                                v-for="project in getProfessionalProjects()"
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
                        <v-list class="personal-project-list" :class="{'ml-auto': $vuetify.breakpoint.smAndUp}">
                            <v-list-tile 
                                v-for="project in getPersonalProjects()"
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

        <joss-dialog ref="project0" maxWidth="80%">
            <div slot="modaltitle">CMS Blog Whitelabel</div>
            <div slot="modalcontent">
                <v-layout wrap>
                    <v-flex xs12 sm3>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>Laravel 5.2 -> 5.7</li>
                            <li>PHP</li>
                            <li>MySql</li>
                            <li>Bootstrap 3</li>
                        </ul>
                        <p class="pt-2">A personal project using pure Laravel. Containing a demo blog site using Blade as a front end and a robust admin dashboard for managing users, posts, comments, media, and useage statistics. Started with Laravel 5.2 and Homestead.</p>
                    </v-flex>
                    <v-flex xs12 sm9>
                        <v-layout wrap justify-space-around>
                            <!-- this is the zoom on hover variation, WIP -->
                            <!-- <div class="project-images">
                                <zoom-on-hover img-normal="/assets/cms_admin.png" img-zoom="/assets/cms_admin.png" :scale="2" imgAlt="CMS Dashboard"></zoom-on-hover>
                            </div> -->
                            <img @mousemove="zoomIn($event)" @mouseout="zoomOut($event)" src="../assets/cms_admin.png" class="project-images" alt="CMS Dashboard"/>
                            <img src="../assets/cms_blog.png" class="project-images" alt="CMS Blog Post"/>
                            <!-- <img src="../../../public/img/cms_posts.png" class="project-images"/> -->
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <div slot="detailsButton">
                <v-btn color="accent" right @click="projectLink('https://github.com/Balintataw/Content-Management-Whitelabel')">
                    see repo
                </v-btn>
            </div>
        </joss-dialog>

        <joss-dialog ref="project2" maxWidth="500">
            <div slot="modaltitle">Currency Converter</div>
            <div slot="modalcontent">
                <v-layout wrap>
                    <v-flex xs12 sm4>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>React Native</li>
                            <li>React Redux</li>
                            <li>Redux Saga</li>
                            <li>React Navigation 3</li>
                            <li>Expo</li>
                        </ul>
                        <p class="pt-2">A simple mobile app for converting currencies built with React Native and Fixer.io api.</p>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/currency_converter.jpg" class="project-images" alt="Currency Converter Home Screen"/>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <div slot="detailsButton">
                <v-btn color="accent" right @click="projectLink('https://github.com/Balintataw/Currency-Converter')">
                    see repo
                </v-btn>
            </div>
        </joss-dialog>

        <joss-dialog ref="project8" maxWidth="500">
            <div slot="modaltitle">Street Eats - Mobile</div>
            <div slot="modalcontent">
                <v-layout wrap>
                    <v-flex xs12 sm4>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>React Native</li>
                            <li>React Redux</li>
                            <li>CSS 3</li>
                            <li>Google Maps Api</li>
                        </ul>
                        <p class="pt-2">A simple mobile app companion for finding local food trucks open for business.</p>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/street_eats_mobile.png" class="project-images" alt="Street Eats Mobile Sample"/>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <div slot="detailsButton">
                <v-btn color="accent" right @click="projectLink('https://github.com/classZero/street-eats-app')">
                    see repo
                </v-btn>
            </div>
        </joss-dialog>

        <joss-dialog ref="project3" maxWidth="990">
            <div slot="modaltitle">AR Car Performance</div>
            <div slot="modalcontent">
                <v-layout wrap>
                    <v-flex xs12 sm4>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Vuforia</li>
                            <li>Wit.ai</li>
                        </ul>
                        <p class="pt-2">Augmented Reality app for showcasing automobiles in real space. Voice activated responsiveness utilizing WitAI to manipulate the cars features and change colors. This demo can be adapted to display any product for any company.</p>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/ar_car_screen.jpg" class="project-images" alt="ArCar home screen"/>
                            <img src="../assets/ar_car_screen_02.jpg" class="project-images" alt="ArCar Lambo"/>
                            <img src="../assets/ar_car_screen_01.jpg" class="project-images" alt="ArCar Lambo 2"/>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <!-- <div slot="detailsButton">
                <v-btn color="accent" right @click="projectLink('https://github.com/Balintataw/street-eats-app')">
                    see repo
                </v-btn>
            </div> -->
        </joss-dialog>

        <joss-dialog ref="project1" maxWidth="500">
            <div slot="modaltitle">Ravenous</div>
            <div slot="modalcontent">
                <v-layout wrap>
                    <v-flex xs12 sm4>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>Angular 7</li>
                            <li>Firebase</li>
                            <li>CSS 3</li>
                            <li>Bootstrap 4</li>
                        </ul>
                        <p class="pt-2">A compendium of all things delicious. *Under Current Development*</p>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/ravenous_home_screen.png" class="project-images" alt="Ravenous home screen"/>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <div slot="detailsButton">
                <v-btn color="accent" right @click="projectLink('https://ravenous-recipes.firebaseapp.com')">
                    see demo
                </v-btn>
            </div>
        </joss-dialog>

        <joss-dialog ref="project4" maxWidth="990">
            <div slot="modaltitle">Meditations</div>
            <div slot="modalcontent">
                <v-layout wrap>
                    <v-flex xs12 sm4>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>React Native</li>
                            <li>Firebase</li>
                            <li>RNFirebase<br>notifications</li>
                            <li>CSS3</li>
                        </ul>
                        <p class="pt-2">An app about what is, not what might be. Receive wisdom from the greatest minds in human history in the form of random quotes. Access to several additional features to help you focus during meditation sessions. Coming Soon for Android devices.</p>
                    </v-flex>
                    <v-flex xs12 sm8>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/meditations_1.jpg" class="project-images" alt="Meditations home screen"/>
                            <img src="../assets/meditations_2.jpg" class="project-images" alt="Message screen"/>
                            <img src="../assets/meditations_3.jpg" class="project-images" alt="Breathe guidance screen"/>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </div>
            <div slot="detailsButton">
                <v-btn color="accent">
                    coming soon
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
        openModal(ref) {
            this.$refs[ref].open();
        }
    },
}
</script>
<style lang="scss" scoped>
.project-container {
    background: radial-gradient(circle farthest-side,#fd775248, transparent, transparent);
    height: 85vh;
    touch-action: none;
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
    // animation: recenter 0.5s; 
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
        .project-list-item-left:nth-child(#{$i}) { 
            animation: recenter 0.5s; 
            animation-delay: $i * 0.05s; 
            animation-fill-mode: both;
        }
        .project-list-item-right:nth-child(#{$i}) { 
            animation: recenter 0.5s; 
            animation-delay: $i * 0.05s; 
            animation-fill-mode: both;
        }
    }
    .text-popup {
        visibility: hidden;
    }
    .project-titles {
        font-size: 2.0rem;
    }
}
@media screen and (max-width:600px) {
    .project-list-item-right > div > div,
    .project-list-item-left > div > div {
        align-items: center;
    }
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