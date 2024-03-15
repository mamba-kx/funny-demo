<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '100%' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="vue_extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
    class="code"
  />
</template>

<script lang="ts" setup>
import { Codemirror } from "vue-codemirror";
import { vue } from "@codemirror/lang-vue";
import { oneDark } from "@codemirror/theme-one-dark";
import { ref, shallowRef, watchEffect } from "vue";
import { log } from "../../../../../utils/index";
import { CSS_MENU_LIST } from "../../constants/index";
import { useStore } from "../../../../../store";

const store = useStore();
const code = ref();
const vue_extensions = [vue(), oneDark];
const view = shallowRef();

watchEffect(() => {
  CSS_MENU_LIST.forEach(item => {
    const res = item.children.filter(i => i.key === store.key.cssSelectedKey[0]);
    code.value = res[0].code;
  });
});

const handleReady = (payload: any) => {
  view.value = payload.view;
};
</script>

<style lang="scss" scoped>
.code {
  width: $codeWidth;
}
</style>
