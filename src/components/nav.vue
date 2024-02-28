<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    :items="MENU_LIST"
    @click="handleClick"
    class="menu"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { Component } from "vue";
import { MENU_LIST } from "../constants/index";

const selectedKeys = ref(["2"]);
const openKeys = ref(["1", "5"]);

const emit = defineEmits(["emit_component"]);

const handleClick = (menuInfo: { item: { comp: Component; code: string } }) => {
  console.log("click ", menuInfo);
  emit("emit_component", menuInfo.item.comp, menuInfo.item.code);
};
</script>

<style lang="scss" scoped>
.menu {
  width: $menuWidth;
}
</style>
