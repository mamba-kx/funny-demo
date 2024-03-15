<template>
  <HeaderVue />
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import HeaderVue from "../components/common/header/index.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: calc(100vh - $headerHeight);
  overflow: auto;
  display: flex;
}
</style>
