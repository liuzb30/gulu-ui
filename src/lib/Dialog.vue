<template>
  <template v-if="visible">
    <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
    <div class="gulu-dialog-wrapper">
      <div class="gulu-dialog">
        <header>
          标题<span class="gulu-dialog-close" @click="close"></span>
        </header>
        <main>
          <p>111</p>
          <p>111</p>
        </main>
        <footer>
          <Button level="main" @click="ok">ok</Button>
          <Button @click="cancel">cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnOverlay: {
      type: Boolean,
      default: false,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnOverlay) {
        close();
      }
    };
    const ok = () => {
      if (!props.ok || props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };
    return { close, onClickOverlay, ok, cancel };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background-color: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: fade-out(black, 0.5);
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    padding: 12px 16px;
    border-top: 1px solid $border-color;
    text-align: right;
  }
  &-close {
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 50%;
      top: 50%;
      background-color: black;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>