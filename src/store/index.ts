import { defineStore } from "pinia";

export const useStore = defineStore("useStore", {
  state: () => ({
    ligthColor: true,
    key: {
      cssSelectedKey: localStorage.getItem("cssSelectedKey")
        ? ([localStorage.getItem("cssSelectedKey")] as string[])
        : ["2"],
      jsSelectedKey: localStorage.getItem("jsSelectedKey")
        ? ([localStorage.getItem("jsSelectedKey")] as string[])
        : ["2"]
    },
    isShowKnowledgePointPopup: false,
    isShowSettingPopup: false,
    theme: {
      isDark: false
    }
  }),
  actions: {}
});
