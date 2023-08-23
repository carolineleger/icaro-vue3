<template>
  <section class="clients">
    <h1 class="wow fadeIn">Worked for</h1>
    <div class="underline"></div>

    <div class="logo-wrapper">
      <div v-for="index in logosNum" :key="index" class="logo">
        <img
          v-lazy="require('../assets/images/logos/logo' + index + '.jpg')"
          preLoad="91"
        />
      </div>
    </div>
  </section>
</template>

<script type="ts" setup>
const logosNum = 15
</script>
