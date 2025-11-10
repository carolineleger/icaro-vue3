<template>
  <section class="portfolio-wrapper" id="portfolio">
    <div class="contenu">
      <h1 class="wow fadeIn">Projects</h1>
      <p>A showcase of different projects I worked on</p>
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
              require('../assets/images/thumbs/' + item.thumbnail)
            "
            @click="navigateToDetail(item.link)"
          >
            <div class="card-hover">
              <span class="title">{{ item.title }}</span>
              <span> {{ item.description }}</span>
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
import { useRouter } from "vue-router";

const router = useRouter();

function navigateToDetail(link) {
  router.push(`/portfolio/${link}`);
}
</script>
