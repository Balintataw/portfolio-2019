<template>
  <v-layout row fill-height style="position:relative;">
    <v-flex xs9></v-flex>
    <v-flex
      xs3
      class="right-bar"
      :style="{ backgroundColor: $vuetify.theme.primary }"
    >
      <div class="overhyped-tag-container">
        <p class="overhyped-tag-line">driven</p>
        <p class="overhyped-tag-line">dauntless</p>
        <p class="overhyped-tag-line">defiant</p>
        <p class="overhyped-tag-line">design</p>
      </div>
      <p :style="{ color: $vuetify.theme.accent }" class="vertical-text">
        Development
      </p>
      <h1 class="text-headline">Jossendal</h1>
      <p class="text-sub-headline">
        Specializing in app development, design, and user experience.
      </p>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.right-bar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
}
.overhyped-tag-container {
  position: absolute;
  top: 30px;
  left: -45px;
}
.overhyped-tag-line {
  font-family: "Playfair Display", serif;
  font-size: 40px;
  margin: -10px 0;
}
.text-headline {
  font-family: AvenirNext, Avenir, Helvetica, Arial, sans-serif;
  font-display: auto;
  position: absolute;
  right: 20px;
  bottom: 40px;
  font-size: 12rem;
}
.text-sub-headline {
  font-family: "Playfair Display", serif;
  font-display: auto;
  position: absolute;
  bottom: 20px;
  font-size: 16px;
  margin: 0 8%;
}
.vertical-text {
  font-family: AvenirNext, Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  bottom: 255px;
  right: 12px;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  font-size: 3rem;
}

@media only screen and (max-width: 960px) {
  .text-headline {
    font-size: 8rem;
    bottom: 60px;
  }
  .vertical-text {
    bottom: 200px;
  }
}
@media only screen and (max-width: 775px) {
  .text-sub-headline {
    font-size: 14px;
  }
}
@media only screen and (max-width: 640px) {
  .text-headline {
    font-size: 6rem;
  }
  .vertical-text {
    bottom: 170px;
    font-size: 2.2rem;
  }
  .text-sub-headline {
    left: -60px;
  }
}
@media only screen and (max-width: 575px) {
  .overhyped-tag-container {
    left: -70px;
  }
}
@media only screen and (max-width: 450px) {
  .text-headline {
    font-size: 5rem;
  }
  .text-sub-headline {
    left: -80px;
  }
  .vertical-text {
    bottom: 150px;
    font-size: 2rem;
  }
}
</style>
