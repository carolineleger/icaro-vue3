<template>
  <div class="footer-wrapper">
    <div class="footer-container lazy">
      <div class="phone-container lazy">
        <div class="wow phone bounce" ng-click="togglePhone(!decroche)"></div>
        <img
          src="../assets/images/handler.png"
          class="wow handler bounce"
          ng-class="{'open': decroche == true}"
        />

        <div class="bulle" ng-class="{'none': decroche == false}">
          <a href="tel:0421433621">0421 433 621</a>
        </div>
      </div>

      <div class="copyright">
        ©Copyright 2019 Caroline Léger <br /><br />
        Images from: Freepik
        <br />
        <br />
        Background city gif by: Toyoi Yuuta
      </div>

      <a href="mailto:caroline@icaro-designs.com">
        <div class="mail-container lazy">
          <div
            class="wow rotateInUpLeft mail"
            data-wow-duration="6"
            data-wow-delay="4"
          ></div>
          <div class="box lazy"></div></div
      ></a>
    </div>

    <div class="footer-responsive lazy">
      <a href="mailto:caroline@icaro-designs.com"
        >✉ caroline@icaro-designs.com</a
      >
      <br /><br />
      <a href="tel:0421433621">☏ 0421 433 621 </a><br /><br />
      <div class="copyright">
        ©Copyright 2019 Caroline Léger
        <br />
        Images from: Freepik
        <br />
        Background city gif by: Toyoi Yuuta
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
