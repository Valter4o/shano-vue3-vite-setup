<template>
  <div class="select">
    <label>{{ label }}</label>
    <select></select>
    <div class="select__trigger">
      <input type="text" readonly value=""/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    color: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 15px;
  }

  &__trigger {
    border-bottom: solid 2px #999999;
    pointer-events: none;
    cursor: pointer;

    /* &:after{
      content:url()
    } */

    input {
      border: none;
      visibility: none;
      font-size: 16px;
      width: 100%;
      background-color: transparent;
      padding-bottom: 8px;
      &:focus {
        outline: none;
      }
    }
  }
}
select {
  display: none;
}
</style>
