<template>
  <a-modal
    v-model:open="store.isShowKnowledgePointPopup"
    title="知识点"
    centered
    width="600px"
  >
    <template #footer>
      <a-button key="back" @click="store.isShowKnowledgePointPopup = false"
        >关闭</a-button
      >
    </template>
    <div class="wrap">
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel
          v-for="item in descList"
          :key="item.expandKey"
          :header="item.title"
        >
          <p class="link" v-if="item?.link" @click="onOpenLin(item?.link)">
            {{ item.desc }}
          </p>
          <p v-else>{{ item.desc }}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useStore } from "../../store/index";
// import { MENU_LIST } from "../../constants";

const store = useStore();
const activeKey = ref<string[]>(["a", "b", "c"]);
const descList = ref();

watchEffect(() => {
  // MENU_LIST.forEach(item => {
  //   const res = item.children.filter(i => i.key === store.selectedKeys[0]);
  //   descList.value = res[0].knowledge_point;
  // });
});

const onOpenLin = (link: string) => {
  window.open(link);
};
</script>

<style lang="scss" scoped>
.wrap {
  margin: 20px 0;
  .link:hover {
    color: #646cff;
    cursor: pointer;
  }
}
</style>
