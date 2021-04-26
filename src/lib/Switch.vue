<template>
  <button><span></span></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: blue;
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
}
button:hover > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>