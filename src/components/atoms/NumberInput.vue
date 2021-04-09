<template>
  <div class="input-wrapper">
    <input type="number" v-model="value" @change="changeHandler" />
  </div>
</template>

<script lang="ts">
export default {
  props: ["value"],
  setup(props: any, { emit }: any) {
    const value = props.value;
    function changeHandler(e: any) {
      emit("valueChanged", e.target.value);
    }
    return { value, changeHandler };
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  width: 95%;
  margin-left: auto;
  &:after {
    content: "€";
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    position: relative;
    display: block;
    padding: 10px 0;
    padding-left: 20px;
    border-style: solid;
    border-radius: 3px;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 20px;
    border-width: 1px;
    margin: 1px;
    padding-right: 20px;
    font-family: Mazda Regular;
    color: #999999;
    font-size: 1.125rem;
    background-color: #ffffff;
  }
}
</style>
