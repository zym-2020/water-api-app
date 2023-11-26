<template>
  <div class="home">
    <test-context></test-context>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TestContext from "@/components/TestContext.vue";
export default defineComponent({
  components: { TestContext },
  setup() {},
});
</script>
