<template>
  <header>
    <div class="logoWrap" @click="onGoHome">
      <div class="logo"></div>
      <p class="title">知识星球</p>
    </div>
    <div class="tool">
      <KnowledgeMenuVue />
      <HandleVue />
    </div>
  </header>
</template>

<script lang="ts" setup>
import KnowledgeMenuVue from "./knowledge.vue";
import HandleVue from "./handle.vue";
import router from "../../../router";

const onGoHome = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: $headerHeight;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-bgColor);
  color: var(--primary-textColor);
  .logoWrap {
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    .logo {
      @include wh(50px, 50px);
      background: url("@/assets/logo.png") 100% / cover no-repeat;
      margin-right: 20px;
    }
    .title {
      font-size: 26px;
      font-weight: bold;
    }
  }
  .tool {
    display: flex;
  }
}
</style>
