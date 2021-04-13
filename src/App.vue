<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { provide } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const context = {
      $store: useStore(),
      $router: useRouter(),
      $route: useRoute(),
    };
    provide("context", context);
    return {};
  },
};
</script>
