<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick">你好</Button>
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
  <h1>示例3</h1>
  <div>
    <Button level="main">大按钮</Button>
    <Button>中按钮</Button>
    <Button level="danger">小按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">大链接</Button>
    <Button theme="link">中链接</Button>
    <Button theme="link" level="danger">小链接</Button>
  </div>
  <div>
    <Button theme="text" level="main">大文本</Button>
    <Button theme="text">中文本</Button>
    <Button theme="text" level="danger">小文本</Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接</Button>
    <Button theme="text" disabled>禁用文本</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
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