<template>
  <div>
    <div class="dropdown">
      <label>{{ label }}</label>
      <select></select>
      <div
        :class="`dropdown__trigger ${open ? 'hasFlag' : ''} ${
          variation === 'white' ? 'white' : ''
        }`"
        @click="toggleDropdown"
      >
        <input class="dropdown-input" type="text" readonly :value="selectedText" />
      </div>
      <ul :class="`dropdown__content ${open ? 'hasFlag' : ''}`">
        <li
          v-for="(item, ind) in items"
          :key="ind"
          @click="() => handleClick(currentSelected, item)"
          :class="`option ${item.selected ? 'hasFlag' : ''}`"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="responsive-dropdown">
      <div class="responsive-dropdown__wrapper">
        <label>{{ label }}</label>
        <select></select>
        <div
          :class="`responsive-dropdown__wrapper__trigger ${
            open ? 'hasFlag' : ''
          } ${variation === 'white' ? 'white' : ''}`"
          @click="toggleDropdown"
        ></div>
        <ul
          :class="`responsive-dropdown__wrapper__content ${
            open ? 'hasFlag' : ''
          }`"
        >
          <li
            v-for="(item, ind) in items"
            :key="ind"
            @click="() => handleClick(currentSelected, item)"
            :class="`option ${item.selected ? 'hasFlag' : ''}`"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { ISelectData } from "../../shared/interfaces";
export default {
  props: {
    label: String,
    color: String,
    variation: String,
    items: {
      type: Array,
      default: [],
    },
  },
  setup(props: any, { emit }) {
    const items: ISelectData[] = props.items;
    const variation = props.variation;

    const currentSelected: any = computed({
      get: () => items.find((item) => item.selected),
      set: () => {},
    });

    const selectedText = ref(currentSelected.value?.label);
    const open: any = ref(false);

    function toggleDropdown() {
      open.value = !open.value;
    }

    function handleClick(currentSelected: ISelectData, item: ISelectData) {
      emit("change", item.value);

      if (currentSelected) {
        delete currentSelected.selected;
      }

      item.selected = true;
      selectedText.value = item.label;
      toggleDropdown();
    }

    return {
      open,
      selectedText,
      items,
      toggleDropdown,
      variation,
      handleClick,
      currentSelected,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_index.scss";

@include breakpoint-down(1020px) {
  .dropdown {
    display: none !important;
  }
  .responsive-dropdown {
    position: absolute;
    right: 14px;
    top: -72px;
  }
}
@include breakpoint-up(1021px) {
  .responsive-dropdown {
    display: none;
  }
}
.dropdown {
  display: flex;
  flex-direction: column;
  position: relative;
  label {
    margin-bottom: 15px;
  }

  &__trigger {
    position: relative;
    border-bottom: solid 2px #999999;
    cursor: pointer;
    z-index: 0;

    &:hover {
      color: white;
      border-color: white;
      &:after {
        filter: brightness(110);
      }
      .dropdown-input {
        color: white;
      }
    }
    &.white {
      &:hover {
        border-color: black;
        &:after {
          filter: none;
        }
      }
      .dropdown-input {
        color: black;
      }
    }

    &:after {
      content: url("../../../static/icons/IconNavigateDownLight.svg");
      position: absolute;
      right: 0;
      top: -8px;
      transition: transform 0.2s linear;
    }

    &.hasFlag {
      &:after {
        transform: rotate(180deg);
      }
    }

    .dropdown-input {
      border: none;
      visibility: none;
      font-size: 16px;
      width: 100%;
      background-color: transparent;
      padding-bottom: 8px;
      color: #999999;
      cursor: pointer;
      font-family: "Mazda Regular";
      &:focus {
        outline: none;
      }
    }
  }

  &__content {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding-top: 5px;
    background-color: white;
    color: black;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s linear;
    z-index: 99999;

    &.hasFlag {
      transform: scaleY(1);
    }

    .option {
      padding: 5px 7px;
      cursor: pointer;
      &.hasFlag {
        color: #d5d5d5;
      }
    }
  }
}

.responsive-dropdown__wrapper {
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 10px 0 rgb(42 38 38 / 20%);
  border-radius: 50%;
  max-width: 48px;

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    user-select: none;

    &::after {
      content: url(../../../static/icons/IconFilterSort.svg);
    }

    &:hover {
      color: white;
      border-color: white;
    }

    &.hasFlag {
      &::after {
        content: url("../../../static/icons/IconNavigateUp.svg");
        transform: rotate(180deg);
      }
    }
  }
  &__content {
    position: absolute;
    min-width: 100%;
    right: 0;
    margin-top: 7px;
    background: #fff;
    box-shadow: 0 4px 10px 0 rgb(42 38 38 / 20%);
    padding-top: 5px;
    background-color: white;
    color: black;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s linear;
    z-index: 99999;

    &.hasFlag {
      transform: scaleY(1);
    }

    .option {
      padding: 5px 7px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      &.hasFlag {
        color: #d5d5d5;
      }
    }
  }
}
select {
  display: none;
}
</style>
