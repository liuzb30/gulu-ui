<template>
  <button @click="toggle" :class="{ checked: value }"><span></span></button>
</template>

<script>
export default {
  props: {
    value: Boolean | String,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  outline: none;
}
span {
  position: absolute;
  left: 2px;
  top: 2px;
  width: $h2;
  height: $h2;
  background-color: #fff;
  border-radius: $h2/2;
  transition: all 250ms;
}
button.checked {
  background-color: #1890ff;
  span {
    left: calc(100% - #{$h2} - 2px);
  }
}
button:active {
  > span {
    width: $h2 + 4px;
  }
}
button.checked:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>