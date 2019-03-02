<template>
    <v-container dark fluid fill-height :style="{backgroundColor: $vuetify.theme.secondary}">
        <v-layout column>
            <v-layout wrap>
                <v-flex xs12 md6 text-center>
                    <h2 :style="{color: $vuetify.theme.accent}">Professional Projects</h2>
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    <a 
                                        :style="{color: $vuetify.theme.primary}" 
                                        class="project-titles" 
                                        href="https://www.smartfences.place" 
                                        _target="blank">GeoFrenzy</a>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    <a 
                                        :style="{color: $vuetify.theme.primary}" 
                                        class="project-titles" 
                                        href="https://www.stirfryrepublic.com" 
                                        _target="blank">Stirfry Republic</a>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    <a 
                                        :style="{color: $vuetify.theme.primary}" 
                                        class="project-titles"
                                        href="https://www.streeteats.us" 
                                        _target="blank">Street Eats</a>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    <a :style="{color: $vuetify.theme.primary}" 
                                        class="project-titles"
                                        @click="$refs.project3.open()" >
                                    Street Eats - mobile</a>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6 text-center>
                    <h2 :style="{color: $vuetify.theme.accent}">Personal Projects</h2>
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-content >
                                <v-list-tile-title :style="{color: $vuetify.theme.primary}" class="project-titles" @click="$refs.project1.open()">CMS Blog Whitelabel</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title :style="{color: $vuetify.theme.primary}" class="project-titles" @click="$refs.project2.open()">Currency Convertor - mobile</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-layout>

<!-- Begin onerous modals section -->

        <joss-dialog ref="project1" maxWidth="80%">
            <div slot="modaltitle">CMS Blog Whitelabel</div>
            <div slot="modalcontent">
                <v-layout>
                    <v-flex xs3>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>Laravel 5.2 -> 5.7</li>
                            <li>PHP</li>
                            <li>MySql</li>
                            <li>Bootstrap 3</li>
                        </ul>
                        <v-spacer />
                        <p>A Personal Project using pure Laravel. Containing a demo blog site as a front end and a robust admin dashboard for managing users, posts, comments, media, and useage statistics. Started with Laravel 5.2. Ready to be deployed.</p>
                    </v-flex>
                    <v-flex xs9>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/cms_admin.png" class="project-images"/>
                            <img src="../assets/cms_blog.png" class="project-images"/>
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
                <v-layout>
                    <v-flex xs4>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>React Native</li>
                            <li>React Redux</li>
                            <li>Redux Saga</li>
                            <li>React Navigation 3</li>
                            <li>Expo</li>
                        </ul>
                        <v-spacer />
                        <p>A simple mobile app for converting currencies built with React Native and Fixer.io api.</p>
                    </v-flex>
                    <v-flex xs8>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/currency_converter.jpg" class="project-images"/>
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

        <joss-dialog ref="project3" maxWidth="500">
            <div slot="modaltitle">Street Eats - Mobile</div>
            <div slot="modalcontent">
                <v-layout>
                    <v-flex xs4>
                        <h4>Tech Used:</h4>
                        <ul>
                            <li>React Native</li>
                            <li>React Redux</li>
                            <li>CSS 3</li>
                            <li>Google Maps Api</li>
                        </ul>
                        <v-spacer />
                        <p>A simple mobile app companion for finding local food trucks open for business.</p>
                    </v-flex>
                    <v-flex xs8>
                        <v-layout wrap justify-space-around>
                            <img src="../assets/street_eats_mobile.png" class="project-images"/>
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
    </v-container>
</template>
<script>
import Dialog from '@/components/Dialog.vue';

export default {
    components: {
        'joss-dialog': Dialog
    },
    methods: {
        projectLink(url) {
            window.open(url);
        }
    }
}
</script>
<style scoped>
.project-images {
    max-height: 200px;
    max-width: 300px;
    margin-bottom: 10px;
}
.project-titles {
    font-family: AvenirNext, Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
}
</style>