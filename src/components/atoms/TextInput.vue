<template>
  <div :class="`text-input ${color} ${variation}`">
    <label>{{ label }}</label>
    <input type="text" :value="value" @input="handleChange" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    color: { type: String, default: "" },
    variation: String,
    value: { type: String, default: "" },
  },
  setup(props: any, { emit }: any) {
    const color = props.color;
    const variation = props.variation;
    const label = props.label;
    const value = props.value;
    
    function handleChange(e: any) {
      emit("change", e.target.value);
    }
    return { handleChange, color, variation, label, value };
  },
};
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 15px;
  }
  input {
    border: none;
    padding-bottom: 5px;
    border-bottom: 2px solid #999999;
    font-size: 1.125rem;
    background-color: transparent;
    font-family: "Mazda Regular";
  }
}
.rounded {
  label {
    font-size: 12px;
    font-family: "Mazda Bold";
  }
  input {
    border: solid #d5d5d5 1px;
    border-radius: 3px;
    color: #999999;
    padding: 10px 20px;
  }
}

.white {
  input {
    color: #999999;
  }
}
.black {
  input {
    color: black;
  }
}
</style>
