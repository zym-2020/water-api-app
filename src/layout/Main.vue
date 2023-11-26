<template>
  <div class="main">
    <div class="header">
      <div class="opera">
        <div class="title">工具</div>
        <div class="btn">一</div>
        <div class="btn"></div>
        <div class="btn"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  .header {
    height: 50px;
    background: black;
    .opera {
      height: 30px;
      color: white;
      line-height: 30px;
      display: flex;
    }
  }
}
</style>
