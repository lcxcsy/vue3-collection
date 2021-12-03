<template>
  <div class="custom-table">
    <div class="header-buttons">
      <el-button v-if="hasAdd" icon="h-icon-add" type="iconButton" @click="handleAdd">
        添加
      </el-button>
      <slot name="header-buttons" />
    </div>
    <el-table :data="tableData">
      <el-table-column v-if="hasIndex" type="index" label="序号" width="80" />
      <el-table-column v-for="row in columns" :key="row.value" :prop="row.value" :label="row.label">
        <template #default="scope">
          <!-- 匹配数字字典文字 -->
          <span v-if="row.isTransform" :title="row.data[scope.row[row.value]]">
            {{ row.data[scope.row[row.value]] || '--' }}
          </span>
          <!-- 是否为插槽 -->
          <slot v-else-if="row.isSlot" :name="row.name" :scope="scope" />
          <!-- 正常显示的文字 -->
          <span v-else :title="scope.row[row.value]" class="column-text">
            {{ scope.row[row.value] || '--' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column v-if="hasAction" label="操作" width="120">
        <template #default="scope">
          <slot name="table-buttons" :scope="scope" />
          <el-button v-if="hasEdit" type="link" @click="handleEdit(scope.row, scope.$index)">
            编辑
          </el-button>
          <el-button v-if="hasDelete" type="link" @click="handleDelete(scope.row, scope.$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
export type TableProps = {
  tableData: Array<[]>
  columns?: Array<[]>
  hasAdd?: boolean
  hasEdit?: boolean
  hasDelete?: boolean
  hasAction?: boolean
  hasIndex?: boolean
}

const props = withDefaults(defineProps<TableProps>(), {
  tableData: () => [],
  columns: () => [],
  hasAdd: false,
  hasEdit: false,
  hasDelete: false,
  hasAction: false,
  hasIndex: true
})
</script>

<style scoped>
</style>