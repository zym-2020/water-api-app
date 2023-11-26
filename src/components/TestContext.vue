<template>
  <div class="test-context">
    <div class="search">
      <el-input v-model="urlText" class="input-with-select">
        <template #prepend>
          <el-select v-model="select" style="width: 105px">
            <el-option label="GET" value="get" />
            <el-option label="POST" value="post" />
            <el-option label="PUT" value="put" />
            <el-option label="PATCH" value="patch" />
            <el-option label="DELETE" value="delete" />
          </el-select>
        </template>
        <template #append>
          <el-button type="primary">发送</el-button>
        </template>
      </el-input>
    </div>
    <div class="param">
      <el-tabs type="border-card">
        <el-tab-pane label="Headers">
          <param-table></param-table>
        </el-tab-pane>
        <el-tab-pane label="Params"><param-table></param-table></el-tab-pane>
        <el-tab-pane label="Body"><param-table></param-table></el-tab-pane>
      </el-tabs>
    </div>
    <div class="response">
      <el-scrollbar height="200px">
        <json-viewer :value="jsonData" :expand-depth="5" copyable></json-viewer>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ParamTable from "@/components/ParamTable.vue";
import JsonViewer from "vue-json-viewer";
export default defineComponent({
  components: { ParamTable, JsonViewer },
  setup() {
    const urlText = ref("");
    const select = ref("get");
    const jsonData = {
      total: 5,
      total1: 5,
      total2: 5,
      total3: 5,
      total4: 5,
      total5: 5,
      total6: 5,
      total7: 5,
      total8: 5,
      total9: 5,
      total10: 5,
      total11: 5,
    };

    return { urlText, select, jsonData };
  },
});
</script>

<style scoped lang="scss">
.test-context {
  padding: 10px;
  .param {
    margin-top: 10px;
  }
  .response {
    margin-top: 10px;
    // max-height: 200px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
}
</style>
