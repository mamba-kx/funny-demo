import { h } from "vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";
import SpecialCarousel from "../components/special_carousel.vue";
import { CODE_DETAIL } from "../constants/code";
import img1 from "../../../../assets/carousel/1.webp";
import img2 from "../../../../assets/carousel/2.webp";
import img3 from "../../../../assets/carousel/3.webp";
import img4 from "../../../../assets/carousel/4.webp";
import img5 from "../../../../assets/carousel/5.webp";

export const JS_MENU_LIST = [
  {
    key: "1",
    icon: () => h(AppstoreOutlined),
    label: "js效果",
    title: "js效果",
    children: [
      {
        key: "2",
        label: "异形轮播图",
        title: "异形轮播图",
        comp: SpecialCarousel,
        code: CODE_DETAIL["文字交融展开"],
        expandKeys: ["a,b,c"],
        knowledge_point: [
          {
            expandKey: "a",
            title: "letter-spacing",
            desc: "通过调整letter-spacing属性，实现展开动画"
          }
        ]
      }
    ]
  }
];

export const CAROUSEL_LIST = [img1, img2, img3, img4, img5];
