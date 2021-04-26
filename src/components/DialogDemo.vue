<template>
  <h1>示例1</h1>
  <Button @click="toggle">切换显示</Button>
  <Dialog v-model:visible="y" :closeOnOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { h, ref } from "vue";
import { openDialog } from "../lib/openDialog";
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

    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };

    return { y, toggle, f1, f2, showDialog };
  },
};
</script>