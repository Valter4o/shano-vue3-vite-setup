<template>
  <label :class="`checkbox flex items-center ${variation}`">
    <span
      :class="`checkbox__label ${variation}`"
      :style="`${isChecked ? 'color:black;' : ''}`"
    >
      {{ label }}
    </span>
    <input
      class="checkbox"
      type="checkbox"
      :checked="isChecked"
      @change="updateInput"
    />
    <img
      v-if="colorImg"
      :src="`../../../static/data/colors/${colorImg}.png`"
      alt=""
      class="color-img"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: ["label", "value", "colorImg", "variation"],
  setup(props: any, { emit }: any) {
    const label: string = props.label;
    const isChecked = ref(false);
    const colorImg = props.colorImg ?? "";
    setTimeout(() => {
      isChecked.value = props.value;
    }, 0);
    function updateInput(e: any) {
      emit("changeValue", e.target.checked);
      isChecked.value = !isChecked.value;
    }

    return { label, updateInput, isChecked, colorImg };
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  &:hover {
    .checkmark {
      border-color: black;
    }
  }
  &__label {
    line-height: 25px;
    font-size: 0.75rem;
    font-family: "Mazda Bold";
    &.requestForm {
      font-size: 16px;
      white-space: pre-wrap;
      line-height: 15px;
    }
  }
  &.requestForm {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 18px;
    font-size: 16px;
    flex: 0 46%;
    position: relative;
    white-space: nowrap;
  }
  &:focus {
    .checkmark {
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    }
  }
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid #d5d5d5;

  &:hover {
    input ~ .checkmark {
      background-color: white;
    }
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 3px;
    width: 6px;
    height: 13px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
.checkbox input:checked ~ .checkmark {
  background-color: black;
}
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.color-img {
  float: left;
  position: relative;
  top: 3px;
  height: 20px;
  width: 72px;
  margin-right: 1rem;
  border-radius: 4px;
  margin-bottom: -5px;
}
</style>
