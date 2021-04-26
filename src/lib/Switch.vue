<template>
  <button @click="toggle" :class="{ checked }"><span></span></button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { toggle, checked };
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
  background-color: grey;
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
  transition: left 250ms;
}
button.checked {
  background-color: blue;
  span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>