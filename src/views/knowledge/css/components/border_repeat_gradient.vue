<!-- 重复渐变边框 -->
<template>
  <div class="wrap">
    <div class="box">
      <div class="container">
        <p>
          Please go through the tutorial steps at your own pace and challenge
          yourself using the editor on the right hand side. Here PixiJS has
          already been included as guided under the Getting Started section.
          Let's start with the creation of a PixiJS canvas application and add
          its view to the DOM.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.wrap {
  @include wh(100%, 100%);
  background-color: #000;
  position: relative;
  .box {
    @include center;
    width: 350px;
    border-radius: 5px;
    background: repeating-linear-gradient(
      -45deg,
      red 0px 10px,
      #fff 10px 20px,
      blue 20px 30px,
      #fff 10px 20px
    );
    background-position: -20px -20px;
    background-size: 200% 200%;
    padding: 5px;
    transition: 0.5s;
    .container {
      border-radius: 5px;
      background-color: #fff;
      p {
        color: #000;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .box:hover {
    background-position: 0 0;
  }
}
</style>
