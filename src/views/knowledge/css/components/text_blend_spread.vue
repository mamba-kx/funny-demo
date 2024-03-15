<!-- 文字交融展开 -->
<template>
  <div class="wrap">
    <h1>文字聚合、文字交融</h1>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  @include wh(100%, 100%);
  background-color: #000;
  @include dfc;
  filter: contrast(10);
  h1 {
    color: #fff;
    font-weight: bold;
    letter-spacing: 0;
    padding-top: 20px;
    animation: expand 2s linear infinite;
  }
}

@keyframes expand {
  from {
    letter-spacing: -51px;
    filter: blur(5px);
  }
  to {
    letter-spacing: 0px;
    filter: blur(1px);
  }
}
</style>
