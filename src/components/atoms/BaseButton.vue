<template>
  <button
    :class="`btn ${variation} ${disabled ? 'disabled' : ''}`"
    @click="disabled ? '' : $emit('clickBtn')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    variation: String,
    text: String,
    disabled: Boolean,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  max-height: 100%;
  height: 56px;
  font-size: 13px;
  font-family: "Mazda Bold";
  border-radius: 3px;
  letter-spacing: 1.5px;
  cursor: pointer;
  &:hover {
    background-color: #910a2d;
    border-color: #910a2d;
    color: white;
  }
}

.primary {
  background-color: black;
  color: white;
  border: solid 2px black;
}

.secondary {
  background-color: white;
  color: black;
  border: solid 2px black;
}

.disabled {
  cursor: default;
  pointer-events: none;
  color: white;
  background-color: gray;
  border-color: gray;
}
</style>
