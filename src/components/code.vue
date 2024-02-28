<template>
  <codemirror
    v-model="props.code"
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
import { shallowRef } from "vue";
import { log } from "../utils/index";

const vue_extensions = [vue(), oneDark];
const view = shallowRef();
const props = defineProps({
  code: {
    type: String
  }
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
