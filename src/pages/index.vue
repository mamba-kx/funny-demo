<template>
  <div class="wrapper">
    <div class="nav">
      <NavVue @emit_component="emit_component" />
    </div>
    <div class="content">
      <component :is="componentId"></component>
    </div>
    <div class="code">
      <CodeVue :code="code" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NavVue from "../components/nav.vue";
import CodeVue from "../components/code.vue";
import TextBlendSpreadVue from "../components/css/text_blend_spread.vue";
import { CODE_DETAIL } from "../constants/code";

const componentId = ref(TextBlendSpreadVue);
const code = ref(CODE_DETAIL["文字交融展开"]);

const emit_component = (component: any, codeText: string) => {
  componentId.value = component;
  code.value = codeText;
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wh(100vw, 100vh);
  overflow: auto;
  display: flex;
  .content {
    width: calc(100vw - $codeWidth - $menuWidth);
    min-width: 500px;
  }
  .code {
    width: $codeWidth;
    max-width: 700px;
  }
}
</style>
