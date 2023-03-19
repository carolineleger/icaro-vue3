<template>
  <div class="clients">
    <h1 class="wow fadeIn">Worked for</h1>
    <div class="underline"></div>

    <div class="logo-wrapper">
      <div v-for="index in logos" :key="index" class="logo">
        <img
          v-lazy="require('../assets/images/logos/logo' + index + '.jpg')"
          preLoad="91"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      logos: 14,
    };
  },
};
</script>
