<template>
  <div>
    <v-container
      dark
      fluid
      fill-height
      :style="{ backgroundColor: $vuetify.theme.secondary }"
    >
      <v-layout column align-space-between>
        <v-layout wrap style="width:90%; margin:20px auto 0;">
          <v-flex xs12 md6>
            <v-layout align-center>
              <v-img
                src="/assets/sweet_lossy.webp"
                aspect-ratio="1.7"
                style="border-radius:8px; border-size:4px; border-style:solid;"
                :style="{ borderColor: $vuetify.theme.accent }"
                alt="Best in development history!"
              ></v-img>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6>
            <v-layout column fill-height align-center justify-center>
              <h3 class="developer-name">Kevin Jossendal</h3>
              <p
                :style="{ color: $vuetify.theme.primary }"
                class="about-the-dev"
              >
                As the creative force behind Jossendal Development, I specialize
                in using JavaScript and modern frameworks to create everything
                from the simple to the experimental. What I produce aims to be
                as much digital art as it is practical application.
              </p>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
    <v-layout align-end justify-space-around>
      <span
        @click="
          socialLink('https://www.linkedin.com/in/jossendal-development/')
        "
        class="icons"
        :style="{ color: $vuetify.theme.primary }"
      >
        <i class="fab fa-linkedin"></i>
      </span>
      <span
        @click="socialLink('https://github.com/Balintataw')"
        class="icons"
        :style="{ color: $vuetify.theme.primary }"
      >
        <i class="fab fa-github-square"></i>
      </span>
      <span
        @click="mailTo()"
        class="icons"
        :style="{ color: $vuetify.theme.primary }"
      >
        <i class="fas fa-envelope-square"></i>
      </span>
      <!-- <span @click="play" class="icons" :style="{color: $vuetify.theme.primary}">
                <i class="fas fa-gamepad"></i>
            </span> -->
    </v-layout>
    <v-layout justify-space-around>
      <github-timeline />
    </v-layout>
  </div>
</template>
<script>
import GithubTimeline from "./GithubTimeline";

export default {
  components: {
    "github-timeline": GithubTimeline
  },
  methods: {
    socialLink(url) {
      window.open(url);
    },
    mailTo() {
      window.location = "mailto:jossendal@pm.me?subject=From%20Jossendal.com";
    },
    play() {
      this.$store.dispatch("toggleDrawer");
      this.$router.push("/shooter");
    }
  }
};
</script>
<style scoped>
.developer-name {
  color: var(--v-accent-base);
  font-size: 2.5rem;
}
.about-the-dev {
  text-align: center;
  font-size: 1.2rem;
  margin: 0 12px;
}
.icons {
  font-size: 3.6rem;
  cursor: pointer;
  margin: 20px 0;
}
</style>
