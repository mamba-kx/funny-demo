import { h } from "vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";
import TextBlendSpreadVue from "../../../../views/knowledge/css/components/text_blend_spread.vue";
import TestGraduallyAppear from "../../../../views/knowledge/css/components/test_gradually_appear.vue";
import BorderRepeatGradient from "../../../../views/knowledge/css/components/border_repeat_gradient.vue";
import { CODE_DETAIL } from "../constants/code";

export const CSS_MENU_LIST = [
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
        code: CODE_DETAIL["文字交融展开"],
        expandKeys: ["a,b,c"],
        knowledge_point: [
          {
            expandKey: "a",
            title: "letter-spacing",
            desc: "通过调整letter-spacing属性，实现展开动画"
          },
          {
            expandKey: "b",
            title: "filter: contrast(10)",
            desc: "对比度，值低于100%会降低对比度，而值高于100%会增加对比度。0或0%将创建完全灰色的图像，而1或100%使输入保持不变。不允许使用负值。插值的初始值为1。",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast"
          },
          {
            expandKey: "c",
            title: "filter: blur(5px)",
            desc: "定义了高斯函数的标准偏差值，即屏幕上有多少像素相互融合; 因此，较大的值会产生更多模糊。值为0会使输入保持不变。该值为空则为0"
          }
        ]
      },
      {
        key: "3",
        label: "文字逐渐出现",
        title: "文字逐渐出现",
        comp: TestGraduallyAppear,
        code: CODE_DETAIL["文字逐渐出现"],
        expandKeys: ["a,b"],
        knowledge_point: [
          {
            expandKey: "a",
            title: "background: linear-gradient",
            desc: "渐变可以在两个或多个指定的颜色之间显示平稳的过渡",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient"
          },
          {
            expandKey: "b",
            title: "@property",
            desc: "@keyframes动画如果在关键帧的样式中使用了不能用作动画的属性，那么这些属性会被忽略掉，支持动画的属性仍然是有效的，不受波及。可以使用@property将定义的变量变为css属性值，从而满足动画要求",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/@property"
          }
        ]
      },
      {
        key: "4",
        label: "重复渐变边框",
        title: "重复渐变边框",
        comp: BorderRepeatGradient,
        code: CODE_DETAIL["重复渐变边框"],
        expandKeys: ["a"],
        knowledge_point: [
          {
            expandKey: "a",
            title: "background: repeating-linear-gradient",
            desc: "重复渐变",
            link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/repeating-linear-gradient"
          }
        ]
      }
    ]
  }
];
