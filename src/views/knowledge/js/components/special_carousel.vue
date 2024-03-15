<template>
  <div class="wrap">
    <div class="swiperBox">
      <swiper
        direction="horizontal"
        :loop="true"
        :autoplay="false"
        :slidesPerView="3"
        :spaceBetween="0"
        :centeredSlides="true"
        :modules="modules"
        effect="coverflow"
        :navigation="true"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
      >
        <swiper-slide v-for="(item, key) in CAROUSEL_LIST" :key="key">
          <img :src="item" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CAROUSEL_LIST } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/scrollbar";
import { nextTick, onMounted } from "vue";

const modules = [Navigation, Pagination, Scrollbar, A11y];

onMounted(() => {
  nextTick(() => {
    const swiper = document.querySelector(".swiper-wrapper") as HTMLElement;
    swiper.style.transform = `translate3d(-400px,0px,0px) !important`;
    // console.log(swiper.style.transform);
  });
});
</script>

<style lang="scss" scoped>
.wrap {
  @include wh(100%, 100%);
  background-color: #000;
  @include dfc;
}
.swiperBox {
  border: 1px solid #000;
  width: 600px;
  margin: 0 auto;
  @include dfc;
  .swiper-slide {
    transition: all 0.3s ease-in-out;
    img {
      @include wh(100%, 100%);
    }
  }
  .swiper-slide-prev {
    transform: translateX(50px) scale(0.8);
    z-index: -10;
  }
  .swiper-slide-next {
    transform: translateX(-50px) scale(0.8);
    z-index: -10;
  }
}
</style>
