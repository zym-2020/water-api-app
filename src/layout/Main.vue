<template>
  <div class="main">
    <div class="header">
      <div class="opera">
        <div class="title">工具</div>
        <div class="btn min" @click="minimizeHandle">
          <el-icon><Minus /></el-icon>
        </div>
        <div class="btn close" @click="closeHandle">
          <el-icon><Close /></el-icon>
        </div>
      </div>
      <div class="nav">
        <div class="nav-item" @click="navClick('/')">API测试</div>
        <div class="nav-item" @click="navClick('/data')">数据</div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import router from "@/router";
export default defineComponent({
  setup() {
    const closeHandle = () => {
      window.api.close();
    };

    const minimizeHandle = () => {
      window.api.minimize();
    };

    const navClick = (path) => {
      router.push({
        path: path,
      });
    };

    return { closeHandle, minimizeHandle, navClick };
  },
});
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  .header {
    height: 50px;

    .opera {
      height: 30px;
      line-height: 30px;
      display: flex;
      position: relative;
      -webkit-app-region: drag;
      -webkit-user-select: none;
      .btn {
        text-align: center;
        width: 30px;
        -webkit-app-region: no-drag;
        cursor: pointer;
        position: absolute;
      }
      .min {
        &:hover {
          background: #373737;
        }
        right: 30px;
      }
      .close {
        &:hover {
          background: #e81123;
        }

        right: 0px;
      }
    }
    .nav {
      background: black;
      height: 20px;
      color: white;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      .nav-item {
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          background: #3c3d40;
        }
      }
    }
  }
}
</style>
