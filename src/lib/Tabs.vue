<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div
        class="gulu-tabs-nav-item"
        @click="select(t)"
        :class="{ selected: t === selcted }"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="gulu-tabs-content">
      {{ current }}
      <component class="gulu-tabs-content-item" :is="current"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    // 检查是否都是Tab组件
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    // 获取选中的组件
    const current = computed(() => {
      return defaults.filter((tag) => tag.props.title === props.selected)[0];
    });
    const titles = defaults.map((tag) => tag.props.title);

    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, current, select };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>