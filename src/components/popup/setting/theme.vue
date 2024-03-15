<template>
  <div class="themeRadio">
    <span>主题</span>
    <a-radio-group v-model:value="value">
      <a-radio :value="1">菜单主题</a-radio>
      <a-radio :value="2">演示区域主题</a-radio>
    </a-radio-group>
  </div>
  <div class="themeColor">
    <span>颜色</span>
    <div>
      <a-switch
        v-model:checked="store.theme.isDark"
        checked-children="深"
        un-checked-children="浅"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "../../../store/index";

const store = useStore();
const value = ref(1);
</script>

<style lang="scss" scoped>
.themeRadio,
.themeColor {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
