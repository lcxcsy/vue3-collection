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
          <span v-if="row.isTransform && row.data" :title="row.data[scope.row[row.value]]">
            {{ row.data[scope.row[row.value]] || '--' }}
          </span>
          <!-- 是否为插槽 -->
          <slot v-else-if="row.isSlot" :name="row.label" :scope="scope" />
          <!-- 正常显示的文字 -->
          <span v-else :title="scope.row[row.value]" class="column-text">
            {{ scope.row[row.value] || '--' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column v-if="hasAction" label="操作" width="120">
        <template #default="scope">
          <slot name="table-buttons" :scope="scope" />
          <el-button
            v-if="hasEdit"
            type="link"
            @click="handleEdit({ row: scope.row, index: scope.$index })"
          >
            编辑
          </el-button>
          <el-button
            v-if="hasDelete"
            type="link"
            @click="handleDelete({ row: scope.row, index: scope.$index })"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { ColumnItemType, UnCertainType } from '@/types'
import { ElMessageBox, ElMessage } from 'element-plus'

export type EditDeleteParamType = {
  row: RowType
  index: number
}

export type TableProps = {
  tableData: Array<UnCertainType> // 表格数据
  columns: Array<ColumnItemType> // 每一列对应的字段
  hasAdd?: boolean // 是否有添加按钮
  hasEdit?: boolean // 是否有编辑按钮
  hasDelete?: boolean // 是否有删除按钮
  hasAction?: boolean // 是否显示操作栏
  hasIndex?: boolean // 是否显示索引
}

const props = withDefaults(defineProps<TableProps>(), {
  hasAdd: false,
  hasEdit: false,
  hasDelete: false,
  hasAction: false,
  hasIndex: true
})

export type RowType = typeof props.tableData[0]

const emitEvent = defineEmits<{
  (e: 'add'): void
  (e: 'edit', param: EditDeleteParamType): void
  (e: 'delete', param: EditDeleteParamType): void
}>()

const handleAdd = (): void => {
  emitEvent('add')
}

const handleEdit = (params: EditDeleteParamType): void => {
  console.log(params)
  emitEvent('edit', params)
}

const handleDelete = (params: EditDeleteParamType): void => {
  emitEvent('edit', params)
  ElMessageBox.confirm('此操作将删除该内容, 是否继续？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      emitEvent('delete', params)
    })
    .catch(() => {
      ElMessage.info('已取消')
    })
}
</script>

<style lang="scss" scoped>
.custom-table {
  padding: 0px 24px 56px 24px;
  .header-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0px;
  }
  .column-text {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
