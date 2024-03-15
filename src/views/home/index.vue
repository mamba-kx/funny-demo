<template>
  <div class="homeWrapper">
    <div class="wrap">
      <h2>如果你害怕失败，那意味着你已经输了。</h2>
      <div class="cover"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.homeWrapper {
  width: 100%;
  /* background-color: #000; */
  text-align: center;
  color: #fff;
  @include dfc;
  .wrap {
    width: 900px;
    @include dfc;
    align-items: baseline;
    flex-direction: column;
    h2 {
      color: #000;
      margin-bottom: 10px
    }
    .cover {
      @include wh(100%, 600px);
      object-fit: contain;
      background: url("@/assets/kobe.jpeg") 100% / cover no-repeat;
    }
  }
}
</style>
