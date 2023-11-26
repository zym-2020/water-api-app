<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" height="200">
      <el-table-column prop="key" label="KEY" />
      <el-table-column prop="value" label="VALUE" />
    </el-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const tableData = [
      {
        key: "2016-05-03",
        value: "Tom",
      },
      {
        key: "2016-05-03",
        value: "Tom",
      },
      {
        key: "2016-05-03",
        value: "Tom",
      },
      {
        key: "2016-05-03",
        value: "Tom",
      },
      {
        key: "2016-05-03",
        value: "Tom",
      },
      {
        key: "2016-05-03",
        value: "Tom",
      },
    ];

    return { tableData };
  },
});
</script>

<style scoped lang="scss"></style>
