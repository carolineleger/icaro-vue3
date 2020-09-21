<template>
 <div class="portfolio-wrapper">
   <div class="contenu">
      <h1>Portfolio</h1>

      <div class="portfolio" id="portfolio">
        <div class="item"
            v-for="(item, i) in portfolio" 
            :key="item.title"
            :class="{'extended': i === cardVisible}">

            <div class="card"
                 v-lazy:background-image="'http://icaro-designs.com/images/' + item.thumbnail"
                 v-on:click="toggleCard(i)">
                 <div class="card-hover">
                   <span>{{ item.title }}</span>
                 </div>
            </div>
            <div class="arrow" :class="{'visible': i === cardVisible }"></div>

            <div class="expander" :class="{'open': i === cardVisible }">
              <div v-on:click="toggleCard()"><span class="close"></span></div>

              <div class="description">
                <div class="full-image">
                  <img v-lazy="'http://icaro-designs.com/images/' + item.large" />
                </div>

                <div class="details">
                  <h3>{{item.title}}</h3>
                  <div v-html="item.description"></div>

                  <a v-for="button in item.button_list" :key="button.title" :href="button.url" target="_blank">{{button.title}}</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div id="bottomPortfolio"></div>
  </div>
</template>

<script>
import { portfolio } from '../assets/data/portfolio'

export default {
  name: 'Portfolio',

  data() {
    return {
      portfolio: portfolio,
      cardVisible: null,
    }
  },

  methods: {
    toggleCard(num) {
      num !== this.cardVisible ? this.cardVisible = num : this.cardVisible = null
    },
  }
}
</script>