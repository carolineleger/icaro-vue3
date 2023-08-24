<template>
  <section class="portfolio-wrapper">
    <div class="contenu">
      <h1 class="wow fadeIn">Portfolio</h1>
      <div class="underline"></div>

      <div class="portfolio" id="portfolio">
        <div
          class="item"
          v-for="(item, i) in portfolio"
          :key="item.title"
          :class="{ extended: i === cardVisible }"
        >
          <div
            class="card"
            preLoad="300"
            v-lazy:background-image="
              require('../assets/images/' + item.thumbnail)
            "
            @click="toggleCard(i)"
          >
            <div class="card-hover">
              <span>{{ item.title }}</span>
            </div>
          </div>
          <div class="arrow" :class="{ visible: i === cardVisible }"></div>

          <div class="expander" :class="{ open: i === cardVisible }">
            <div @click="toggleCard()"><span class="close"></span></div>

            <div class="description">
              <div class="full-image">
                <img :src="require('../assets/images/' + item.large)" />
              </div>

              <div class="details">
                <h3>{{ item.title }}</h3>
                <p v-html="item.description"></p>

                <a
                  v-for="button in item.button_list"
                  :key="button.title"
                  :href="button.url"
                  target="_blank"
                  >{{ button.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="@/assets/images/bottom-portfolio.jpg"
      class="bottom-portfolio"
      alt=""
    />
  </section>
</template>

<script setup>
import { portfolio } from "../assets/data/portfolio";
import { ref } from "vue";

let cardVisible = ref(null);

function toggleCard(num) {
  cardVisible.value = num !== cardVisible.value ? num : null;
}
</script>
