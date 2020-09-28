<template>
  <div id="app" class="full">
    <LoadingScreen v-if="isLoading" />

    <div v-if="!isLoading">
      <Header />
      <About />
      <Portfolio />
      <Clients />
      <Footer />
    </div>

  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import About from './components/About.vue'
import Header from './components/Header.vue'
import Portfolio from './components/Portfolio.vue'
import Clients from './components/Clients.vue'
import Footer from './components/Footer.vue'

import {WOW} from 'wowjs'

export default {
  name: 'App',
  components: { About, Header, Portfolio, Clients, Footer, LoadingScreen },
  mounted() { 
    new WOW().init()
  }
}
</script>

<style lang="scss">
  @import "./assets/sass/main.scss";
</style>
