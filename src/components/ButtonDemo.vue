<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">大按钮</Button>
    <Button>中按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">大链接</Button>
    <Button theme="link">中链接</Button>
    <Button theme="link" size="small">小链接</Button>
  </div>
  <div>
    <Button theme="text" size="big">大文本</Button>
    <Button theme="text">中文本</Button>
    <Button theme="text" size="small">小文本</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>