<template>
  <div>
    <manageHeader identifier="货主编号" name="货主名称" linkman="联系人" />
    <el-card style="margin: 10px 10px 0">
      <el-button type="success" round style="margin-bottom: 10px"
        >新增货主</el-button
      >
      <!-- 表格 -->
      <el-table :data="tableData" border>
        <el-table-column type="index" label="序号" width="100px" />
        <el-table-column prop="code" label="货主编号" width="200px" />
        <el-table-column prop="name" label="货主名称" width="200px" />
        <el-table-column prop="personName" label="联系人" width="200px" />
        <el-table-column prop="phone" label="联系人电话" width="200px" />
        <el-table-column prop="email" label="联系邮编" width="300px" />
        <el-table-column prop="location" label="省/市/区" width="300px" />
        <el-table-column prop="address" label="详细地址" width="200px" />
        <el-table-column prop="updateTime" label="更新时间" width="200px" />
        <el-table-column label="操作" fixed="right" width="200px">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看详情</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 10px"
        :current-page="goodsOwnerInfo.currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
import { getGoodsOwner } from '@/api/manage-business'
import manageHeader from '@/components/manageHeader'
export default {
  components: { manageHeader },
  data() {
    return {
      tableData: [],
      total: 2,
      goodsOwnerInfo: {
        id: '',
        like_code: '',
        like_name: '',
        like_personName: '',
        size: 20,
        current: 1,
        descs: 'createTime'
      }
    }
  },
  mounted() {
    this.getGoodsOwner()
  },
  methods: {
    async getGoodsOwner() {
      const res = await getGoodsOwner(this.goodsOwnerInfo)
      // console.log(res)
      this.tableData = res.data.data.records
      // this.currentPage =
    },
    handleSizeChange(re) {
      this.getGoodsOwner()
    },
    handleCurrentChange(ref) {
    }
  }
}
</script>

<style>
</style>
