<template>
  <div :class="{ 'no-scroll': !loaded }">
    <LoadingScreen v-if="!loaded" />
    <HeaderSection />
    <AboutSection />
    <PortfolioSection />
    <ClientsSection />
    <FooterSection />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import LoadingScreen from "../LoadingScreen.vue";
import AboutSection from "../AboutSection.vue";
import HeaderSection from "../HeaderSection.vue";
import PortfolioSection from "../PortfolioSection.vue";
import ClientsSection from "../ClientsSection.vue";
import FooterSection from "../FooterSection.vue";

const store = useStore();
let loaded;
if (store) {
  loaded = computed(() => store.state.loaded);
}
</script>
