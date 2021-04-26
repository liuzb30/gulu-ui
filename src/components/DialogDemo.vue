<template>
  <h1>示例1</h1>
  <Button @click="toggle">切换显示</Button>
  <Dialog v-model:visible="y"></Dialog>
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

    return { y, toggle };
  },
};
</script>