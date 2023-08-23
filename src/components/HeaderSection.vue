<template>
  <section class="header-wrapper">
    <!-- avoid bg flickering -->
    <img src="../assets/images/header/ban3.webp" class="load-and-kill" />
    <ul id="scene" class="scene">
      <li class="layer layer1" data-depth="0.00">
        <img src="@/assets/images/header/ban1.webp" class="ban1" alt="" />
      </li>

      <li class="layer" data-depth="0.30" data-invert-y="true">
        <img
          src="@/assets/images/header/ban3.webp"
          class="ban3"
          @load="onImgLoad"
          alt=""
        />
        <img src="@/assets/images/header/cocci.webp" class="cocci" alt="" />
        <div class="screen">
          <div class="code"></div>
        </div>
      </li>

      <li class="layer" data-depth="0.40">
        <img src="@/assets/images/header/ban4.webp" class="ban4" alt="" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import Parallax from "parallax-js";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => {
  const scene = document.getElementById("scene");
  new Parallax(scene, {
    limitY: 0,
  });
});

function onImgLoad() {
  store.commit("imageLoaded");
}
</script>
