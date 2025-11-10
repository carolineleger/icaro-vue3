<template>
  <div class="full">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { WOW } from "wowjs";

onMounted(() => {
  new WOW().init();
});
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
