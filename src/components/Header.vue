<template>
 <div class="header-wrapper">
   <img src="../assets/images/header/ban3.png" class="load-and-kill"/>

    <ul id="scene" class="scene">
      <li class="layer layer1" data-depth="0.00">
        <img src="../assets/images/header/ban1.png" class= "ban1"/>
      </li>

      <li class="layer" data-depth="0.30"  data-invert-y="true">
        <!-- <img src="./images/header/ban3-day.png" class= "ban3"/> -->
        <img src="../assets/images/header/ban3.png" class= "ban3" @load="onImgLoad" />
        <img src="../assets/images/header/cocci.png" class= "cocci"/>
        <div class="screen">
          <div class="code"></div>
        </div>
      </li>
      
      <li class="layer" data-depth="0.40">
        <img src="../assets/images/header/ban4.png" class= "ban4"/>
      </li>
    </ul>

     <!-- <div class="updates">** Website updates in progress - some things might be buggy **</div> -->
 </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'Header',
  mounted() {
    const scene = document.getElementById('scene');
    new Parallax(scene, {
      limitY: 0
    });
  },
  methods: {
    onImgLoad() {
      this.$store.commit('imageLoaded')
    }
  }
}
</script>