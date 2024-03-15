import { KNOWLEDGE_LIST } from "../constants";

export const log = (...arg: any) => console.log(arg);

/**
 * @description 获取跳转路由
 * @param value
 */
export const getRoutePath = (value: undefined | string) => {
  return KNOWLEDGE_LIST.map(item => {
    return item.children.filter(i => i.value === value)[0].path;
  });
};
