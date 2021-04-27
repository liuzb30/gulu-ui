<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        indicator.value.style.left = left2 - left1 + "px";
      });
    });

    const defaults = context.slots.default();
    // 检查是否都是Tab组件
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);

    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background-color: $blue;
      left: 0;
      bottom: -1px;
      transition: all 200ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>