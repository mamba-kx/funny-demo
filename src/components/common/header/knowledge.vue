<template>
  <ul>
    <li v-for="item in KNOWLEDGE_LIST" :key="item.label">
      <a-select
        ref="select"
        v-model:value="selectValue"
        :style="{ width: item.width }"
        :bordered="false"
        :placeholder="item.label"
        @change="onSelect"
      >
        <a-select-option
          v-for="i in item.children"
          :key="i.value"
          :value="i.value"
          >{{ i.label }}</a-select-option
        >
      </a-select>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { KNOWLEDGE_LIST } from "../../../constants";
import router from "../../../router";
import { getRoutePath } from "../../../utils/index";
import { useRoute } from "vue-router";
const route = useRoute();

const selectValue = ref(undefined);

const onSelect = () => {
  const path = getRoutePath(selectValue.value)[0];
  router.push(path);
};

watch(
  () => {
    route.path;
  },
  () => {
    if (route.path === "/") selectValue.value = undefined;
  },
  {
    deep: true
  }
);
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  :deep(.ant-select-selection-placeholder) {
    color: var(--primary-textColor) !important;
  }
  :deep(.ant-select-arrow) {
    color: var(--primary-textColor) !important;
  }
}
</style>
