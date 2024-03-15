<template>
  <div class="setting">
    <ul>
      <li>
        <a-switch
          v-model:checked="store.theme.isDark"
          checked-children="深"
          un-checked-children="浅"
          @change="onChangeTheme"
        />
      </li>
      <!-- <li v-for="item in SETTING_LIST" :key="item.id">
        <component :is="item.icon" @click="onClickItem(item)"></component>
      </li> -->
    </ul>
  </div>
  <!-- 知识点 -->
  <KnowledgePointVue />
  <!-- 设置 -->
  <SettingVue />
</template>

<script lang="ts" setup>
// import { SETTING_LIST } from "../../constants/index";
// import { ISettingType } from "../../typing";
import KnowledgePointVue from "../../../components/popup/knowledge_point.vue";
import SettingVue from "../../../components/popup/setting_config.vue";
import { useStore } from "../../../store/index";

const store = useStore();
// const onClickItem = (item: ISettingType) => {
//   if (item.label === "知识点") {
//     store.isShowKnowledgePointPopup = true;
//   }
//   if (item.label === "设置") {
//     store.isShowSettingPopup = true;
//   }
// };

// 主题切换
const onChangeTheme = () => {
  const root = document.documentElement as HTMLElement;
  if (store.theme.isDark) {
    root.setAttribute("theme", "dark");
  } else {
    root.removeAttribute("theme");
  }
};
</script>

<style lang="scss" scoped>
.setting {
  background-color: var(--primary-bgColor);
  @include wh(100%, $settingheight);
  z-index: 10;
  ul {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    padding: 0 10px;
    li {
      margin: 0 5px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
