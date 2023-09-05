<template>
  <section class="footer-wrapper">
    <div class="footer-floor"></div>
    <div class="footer-bg">
      <div class="footer-container lazy">
        <div class="phone-container lazy">
          <div class="wow phone bounce" @click="togglePhone()"></div>
          <img
            src="@/assets/images/handler.webp"
            class="wow handler bounce"
            :class="{ open: decroche }"
          />
          <div class="bulle" :class="{ none: !decroche }">
            <a href="tel:0421433621" class="phone-number">0421 433 621</a>
          </div>
        </div>

        <a href="mailto:caroline@icaro-designs.com" class="mail-container"> </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
let decroche = ref(false);

function togglePhone() {
  decroche.value = !decroche.value;
}
</script>
