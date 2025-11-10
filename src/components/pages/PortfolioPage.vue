<template>
  <div class="portfolio-page">
    <section class="portfolio-banner">
      <h1>{{ portfolioItem.title }}</h1>
    </section>

    <div class="portfolio-labels">
      <div class="label" v-for="label in portfolioItem.labels" :key="label">
        {{ label }}
      </div>
    </div>

    <div class="portfolio-content">
      <div
        class="portfolio-item"
        v-for="(item, index) in portfolioItem.content[0].items"
        :key="item.title"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="portfolio-media">
          <template v-if="item.image">
            <img
              :src="require(`@/assets/images/${item.image}`)"
              :alt="item.title"
            />
          </template>
          <template v-else-if="item.video">
            <video
              :src="require(`@/assets/images/${item.video}`)"
              type="video/webm"
              controls
              autoplay
              muted
            ></video>
          </template>
        </div>
        <div class="portfolio-description" v-html="item.description"></div>
      </div>
    </div>
    <button class="back-to-portfolio" @click="goBack">
      <span class="arrow-left">&larr;</span> Back to Portfolio
    </button>
  </div>
</template>

<script>
import { portfolio } from "@/assets/data/portfolio";
import { useRoute } from "vue-router";

export default {
  name: "PortfolioPage",
  data() {
    return {
      portfolioItem: null,
    };
  },
  created() {
    const route = useRoute();
    const link = route.params.link;

    this.portfolioItem = portfolio.find((item) => item.link === link);

    if (!this.portfolioItem) {
      this.$router.push("/404");
    }
  },
  methods: {
    goBack() {
      this.$router.push("/portfolio#portfolio");
    },
  },
};
</script>
