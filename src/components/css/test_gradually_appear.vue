<!-- 文字逐渐出现 -->
<template>
  <div class="wrap">
    <p>
      Please go through the tutorial steps at your own pace and challenge
      yourself using the editor on the right hand side. Here PixiJS has already
      been included as guided under the Getting Started section. Let's start
      with the creation of a PixiJS canvas application and add its view to the
      DOM.
    </p>
    <p class="eraser">
      <span class="text">
        Please go through the tutorial steps at your own pace and challenge
        yourself using the editor on the right hand side. Here PixiJS has
        already been included as guided under the Getting Started section. Let's
        start with the creation of a PixiJS canvas application and add its view
        to the DOM.
      </span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  @include wh(100%, 100%);
  background-color: #000;
  position: relative;
  p {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    @include center;
  }
  .eraser {
    @include center;
    .text {
      --p: 0%;
      background: linear-gradient(
        to right,
        #0000 var(--p),
        #000 calc(var(--p) + 100px)
      );
      color: transparent;
      animation: eraser 8s linear infinite;
    }
  }
}

@property --p {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 0%;
}

@keyframes eraser {
  to {
    --p: 100%;
  }
}
</style>
