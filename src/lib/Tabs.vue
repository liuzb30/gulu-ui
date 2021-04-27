<template>
  <div v-for="(title, index) in titles" :key="index">{{ title }}</div>
  <component
    v-for="(component, index) in defaults"
    :is="component"
    :key="index"
  ></component>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    // 检查是否都是Tab组件
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);
    return { defaults, titles };
  },
};
</script>

<style>
</style>