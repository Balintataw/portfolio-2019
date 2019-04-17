<template>
    <v-layout column align-center>
        <v-layout align-center>
            <h3 class="my-3" style="font-size:2.5rem;" :style="{color:$vuetify.theme.accent}">Recent Activity</h3>
            <square-spinner v-if="working"/>
        </v-layout>
        <div class="changelog-list" v-if="repos.length > 0">
            <div class="line"></div>
            <div v-for="repo in repos" :key="repo.id" class="changelog-item not-showing">
                <div class="date" v-if="repo.pushed_at">{{ formatDate(repo.pushed_at) }}</div>
                <div style="flex-direction: column;">
                    <p class="repo-name">{{ repo.name }}</p>
                    <p class="repo-desc">{{ repo.description }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="error-message">Sorry, the dev team must be out to lunch or something... Check back later.</p>
        </div>
    </v-layout>
</template>
<script>
import axios from 'axios';
import dateFns from 'date-fns';

import SquareSpinner from './SquareSpinner.vue';

export default {
    components: {
        'square-spinner': SquareSpinner
    },
    data() {
        return {
            repos: [],
            observer: null,
            working: true
        }
    },
    methods: {
        formatDate(date) {
            return dateFns.format(date, 'MM/DD/YY')
        }
    },
    mounted() {
        // get my github data / first 20 repos
        // need to call twice to get all then sort and slice to get recent
        // then finally set up observer
        // axios.get('https://api.github.com/users/balintataw/repos?per_page=100')
        axios.get('https://api.github.com/user/repos?per_page=100', {
            headers: { 'Authorization': 'token ' + process.env.VUE_APP_GIT_TOKEN }
        })
        .then(resp => {
            this.repos = resp.data;
            if(resp.data.length >= 100) {
                // return axios.get('https://api.github.com/user/balintataw/repos?per_page_100&page=2')
                return axios.get('https://api.github.com/user/repos?per_page=100&page=2', {
                    headers: { 'Authorization': 'token ' + process.env.VUE_APP_GIT_TOKEN }
                })
            }
        })
        .then(resp => {
            this.repos.push(resp.data)
            let sortedResults = this.repos.sort((a, b) => {
                return a.pushed_at > b.pushed_at ? -1 : a.pushed_at < b.pushed_at ? 1 : 0;
            })
            this.repos = sortedResults.slice(0, 15);
        })
        .catch(err => {
            this.working= false;
            console.log("Error getting github data", err);
            throw new Error(err)
        })
        .finally(() => {
            this.working= false;
            // set up IntersectionObserver, grab all the changelog items
            // retreived from above get request
            const changelogItems = document.querySelectorAll('.changelog-item');

            this.observer = new IntersectionObserver(items => {  
                items.forEach(item => {
                    if (!item.isIntersecting) {
                        // if item not showing, hide it
                        item.target.classList.add('not-showing')
                        return;
                    }
                    
                    item.target.classList.remove('not-showing')
                })
            });

            // start observing
            changelogItems.forEach(item => this.observer.observe(item));
        })
    },
};
</script>
<style lang="scss" scoped>

$changelogLeftSpacing: 120px;

.changelog-list {
  position: relative;
  width:70%;
}

.line {
  width: 2px;
  top: 2px;
  display: block;
  height: 100%;
  position: absolute;
  background: black;
  left: $changelogLeftSpacing - 16;
}

.changelog-item {
  position: relative;
  display: flex;
  padding-left: $changelogLeftSpacing;
  margin-bottom: 200px;
  
  &:before,
  .date,
  p {
    transform: none;
    opacity: 1;
    transition: all 0.4s cubic-bezier(.76,0,.26,1.46);
  }
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: $changelogLeftSpacing - 21px;
    background: var(--v-primary-base);
    border: 2px solid black;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }  
  
  &:last-child:before {
    top: 7px;
  }
  
  .date {
    position: absolute;
    text-align: right;
    left: 0;
    color: #bbb;
  }
  
  p {
    margin: 0;
    padding-left: 20px;
  }
}
.repo-name {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--v-accent-base);
}
.repo-desc {
    color: var(--v-primary-base);
    // width: 70%;
}
.error-message {
    color: var(--v-primary-base);
    font-size: 1.2rem;
}

.changelog-item.not-showing {
  &:before,
  .date,
  p {
    opacity: 0;
    transform: scale(0.5);
  }
  
  .date {
    transform: scale(0.5) translateX(100px);
  }
  
  p {
    transform: scale(0.5) translateX(-170px);
  }
}
</style>
