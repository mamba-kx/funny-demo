<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectKey"
    mode="inline"
    :keyText="keyText"
    :items="menuList"
    @click="handleClick"
    class="menu"
  />
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "../../store/index";

const props = defineProps({
  menuList: [] as any[],
  selectKey: {
    default: ["2"] as string[]
  },
  keyText: {
    default: "cssSelectedKey" as "cssSelectedKey" | "jsSelectedKey"
  }
});

const selectKey = computed(() => props.selectKey);
const store = useStore();
const openKeys = ref(["1"]);

const emit = defineEmits(["emit_component"]);

const handleClick = (menuInfo: { key: string }) => {
  localStorage.setItem(`${props.keyText}`, menuInfo.key);
  store.key[props.keyText] = [menuInfo.key];
};
</script>

<style lang="scss" scoped>
.menu {
  width: $menuWidth;
}
</style>
