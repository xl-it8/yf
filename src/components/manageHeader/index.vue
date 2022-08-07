<template>
  <el-card style="margin: 10px 10px 0">
    <el-form
      :label-position="labelPosition"
      :model="selectedForm"
      :inline="true"
    >
      <el-form-item :label="identifier">
        <el-input v-model="selectedForm.identifier" placeholder="请输入" />
      </el-form-item>
      <el-form-item :label="name">
        <el-input v-model="selectedForm.name" placeholder="请输入" />
      </el-form-item>
      <el-form-item :label="linkman">
        <el-input v-model="selectedForm.linkman" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <div class="btn">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onSubmit">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  props: {
    identifier: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    linkman: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      labelPosition: 'top',
      selectedForm: {
        identifier: '',
        name: '',
        linkman: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__content {
  width: 300px;
}
.btn {
  margin-left: 30px;
  margin-top: 50px;
}
</style>
