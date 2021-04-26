<template>
  <button class="gulu-button" :class="classes">
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  setup(props) {
    const { size, theme } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border-radius: $radius;
  border: 1px solid $border-color;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gulu-theme-link {
    background: transparent;
    box-shadow: none;
    color: $blue;
    border: 0;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text {
    background: transparent;
    box-shadow: none;
    border: 0;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>