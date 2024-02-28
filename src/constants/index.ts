import { h } from "vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";
import TextBlendSpreadVue from "../components/css/text_blend_spread.vue";
import TestGraduallyAppear from "../components/css/test_gradually_appear.vue";
import { CODE_DETAIL } from "../constants/code";

export const MENU_LIST = [
  {
    key: "1",
    icon: () => h(AppstoreOutlined),
    label: "css效果",
    title: "css效果",
    children: [
      {
        key: "2",
        label: "文字交融展开",
        title: "文字交融展开",
        comp: TextBlendSpreadVue,
        code: CODE_DETAIL["文字交融展开"]
      },
      {
        key: "3",
        label: "文字逐渐出现",
        title: "文字逐渐出现",
        comp: TestGraduallyAppear,
        code: CODE_DETAIL["文字逐渐出现"]
      }
    ]
  }
];
