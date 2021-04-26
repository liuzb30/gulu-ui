<template>
  <h1>示例1</h1>
  <Button @click="toggle">切换显示</Button>
  <Dialog
    v-model:visible="y"
    :closeOnOverlay="true"
    :ok="f1"
    :cancel="f2"
  ></Dialog>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const y = ref(false);
    const toggle = () => {
      y.value = !y.value;
      console.log(y.value);
    };

    const f1 = () => {
      return false;
    };
    const f2 = () => {};

    return { y, toggle, f1, f2 };
  },
};
</script>