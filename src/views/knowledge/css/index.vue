<template>
  <div class="nav">
    <NavVue
      :selectKey="store.key.cssSelectedKey"
      :menu-list="CSS_MENU_LIST"
      @emit_component="emit_component"
    />
  </div>
  <div class="content">
    <div class="contentWrap">
      <component :is="componentId"></component>
    </div>
  </div>
  <div class="code">
    <CodeVue :code="code" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import NavVue from "../../../components/common/nav.vue";
import CodeVue from "../css//components/content/code.vue";
import { CODE_DETAIL } from "../css/constants/code";
import { CSS_MENU_LIST } from "../css/constants";
import { useStore } from "../../../store";

const store = useStore();
const componentId = ref();
const code = ref(CODE_DETAIL["文字交融展开"]);

watchEffect(() => {
  CSS_MENU_LIST.forEach(item => {
    const res = item.children.filter(
      i => i.key === store.key.cssSelectedKey[0]
    );
    componentId.value = res[0].comp;
  });
});

const emit_component = (codeText: string) => {
  code.value = codeText;
};
</script>

<style lang="scss" scoped>
.content {
  width: calc(100vw - $codeWidth - $menuWidth);
  min-width: 500px;
  position: relative;
  .contentWrap {
    height: 100%;
    position: relative;
  }
}
.code {
  width: $codeWidth;
  max-width: 700px;
}
</style>
