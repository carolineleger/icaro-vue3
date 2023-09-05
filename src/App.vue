<template>
  <div id="app" class="full" :class="{ 'no-scroll': !loaded }">
    <LoadingScreen v-if="!loaded" />

    <HeaderSection />
    <AboutSection />
    <PortfolioSection />
    <ClientsSection />
    <FooterSection />
  </div>
</template>

<script setup>
import LoadingScreen from "./components/LoadingScreen.vue";
import AboutSection from "./components/AboutSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ClientsSection from "./components/ClientsSection.vue";
import FooterSection from "./components/FooterSection.vue";
import { computed, onMounted } from "vue";

import { WOW } from "wowjs";
import { useStore } from "vuex";

onMounted(() => {
  new WOW().init();
});

const store = useStore();
let loaded;
if (store) {
  loaded = computed(() => store.state.loaded);
}
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
