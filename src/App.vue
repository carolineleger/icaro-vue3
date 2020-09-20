<template>
  <div id="app" class="full">
    <Header />
    <About />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import About from './components/About.vue'
import Header from './components/Header.vue'
import Portfolio from './components/Portfolio.vue'
import Footer from './components/Footer.vue'

import {WOW} from 'wowjs'

export default {
  name: 'App',
  components: { About, Header, Portfolio, Footer },
  mounted() { new WOW().init() }
}
</script>

<style lang="scss">
  @import "./assets/sass/main.scss";
</style>
