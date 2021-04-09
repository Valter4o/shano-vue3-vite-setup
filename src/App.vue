<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const i18n = useI18n({ useScope: "global" });
    // @ts-ignore
    localStorage.setItem("locale", JSON.stringify(i18n.messages.value.de));

    return {};
  },
};
</script>
