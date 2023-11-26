<template>
  <layout />
</template>

<script>
import { defineComponent } from "vue";
import Layout from "@/layout/Main.vue";
export default defineComponent({
  components: { Layout },
});
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#app {
  height: 100%;
  
}
</style>
