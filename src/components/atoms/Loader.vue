<template>
  <div class="loading-dots">
    <div v-for="(dot, index) in dots" :key="index">{{ dot }}</div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, onBeforeUnmount, ref } from "vue";

export default {
  setup() {
    const dots: any = reactive([]);
    const dead = ref(false);

    function loop() {
      setTimeout(() => {
        dots.push(".");
        if (dots.length === 4) {
          dots.length = 0;
        }
        if (!dead.value) {
          loop();
        }
      }, 300);
    }

    onMounted(() => {
      loop();
    });
    onBeforeUnmount(() => {
      dead.value = true;
    });
    return {  
      dots,
    };
  },
};
</script>

<style lang="scss" scoped>
.loading-dots {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
}
</style>
