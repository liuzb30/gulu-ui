<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>
import md from "../markdown/install.md";
export default {
  components: { md },
};
</script>

<style>
</style>