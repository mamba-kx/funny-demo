<template>
  <a-modal
    v-model:open="store.isShowSettingPopup"
    title="设置"
    centered
    width="600px"
  >
    <template #footer> </template>
    <div class="wrap">
      <a-tabs
        v-model:activeKey="activeKey"
        :tab-position="tabPosition"
        animated
        centered
      >
        <a-tab-pane key="1" tab="主题设置"><ThemeVue /></a-tab-pane>
        <a-tab-pane key="2" tab="">Content of Tab 2</a-tab-pane>
      </a-tabs>
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
import { useStore } from "../../store/index";
import { ref } from "vue";
import ThemeVue from "./setting/theme.vue";
import { TabsProps } from "ant-design-vue/es/tabs";

const tabPosition = ref<TabsProps["tabPosition"]>("left");
const activeKey = ref("1");

const store = useStore();
</script>

<style lang="scss" scoped>
.wrap {
  margin: 20px 0;
  height: 400px;
  :deep(.ant-tabs) {
    border-radius: 20px;
    --radius: 7px;
    .ant-tabs-nav {
      width: 120px;
      height: 400px;
      background-color: #e6e1e6;
      border-bottom-left-radius: var(--radius);
      border-top-left-radius: var(--radius);
      padding: 12px 0;
      .ant-tabs-ink-bar {
        height: 0px !important;
      }
    }
    .ant-tabs-content-holder {
      padding: 20px;
      background-color: #f3eef3;
      border-bottom-right-radius: var(--radius);
      border-top-right-radius: var(--radius);
      .ant-tabs-tabpane {
        padding-left: 0;
      }
    }
  }
}
</style>
