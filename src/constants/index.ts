import { BookOutlined, SettingOutlined } from "@ant-design/icons-vue";

export const SETTING_LIST = [
  {
    id: 1,
    label: "知识点",
    icon: BookOutlined
  },
  {
    id: 2,
    label: "设置",
    icon: SettingOutlined
  }
];

export const KNOWLEDGE_LIST = [
  {
    label: "知识点",
    width: "100px",
    children: [
      {
        type: "group",
        label: "css动画",
        value: "1",
        path: "/knowledge/css"
      },
      {
        type: "group",
        label: "js相关",
        value: "2",
        path: "/knowledge/js"
      }
    ]
  }
];
