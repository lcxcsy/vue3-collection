<template>
  <CustomTable :table-data="tableData" :columns="columns"></CustomTable>
  <div class="pagination-block">
    <el-pagination
      v-model:currentPage="pagination.pageNo"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">
import CustomTable from '@/components/CustomTable.vue'
import { useTable } from '@/hooks/useTable'
import type { ColumnItemType } from '@/types'

const columns: Array<ColumnItemType> = [
  { label: '人员姓名', value: 'name' },
  { label: '日期', value: 'date' },
  { label: '地址', value: 'address' }
]

const { tableData, pagination, getTableData, handleSizeChange, handleCurrentChange } = useTable()

getTableData()
//! pagination 中Total不显示，需要确认一下是否为BUG
</script>

<style lang="scss" scoped>
.pagination-block {
  width: 100%;
  height: 42px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 99;
  padding-top: 8px;
  border-top: 1px solid $--el-border-color-base;
}
</style>