<template>
  <div id="buyerIndex">
    <div class="maxWidth">
      <div class="list-nav bg-white">
        <el-row :gutter="10">
          <el-col :span="4">
            <div class="list sel">数字资产申购</div>
          </el-col>
          <el-col :span="4">
            <div class="list">数字资产发售列表</div>
          </el-col>
          <el-col :span="4">
            <div class="list">已申购数字资产列表</div>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'buyerIndex',
    data() {
      return {
        mySwiper: "",
      }
    },
    created() {

    },
    mounted: function() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  #buyerIndex {
    .list-nav {
      margin-top: 10px;
      text-align: center;
      line-height: 50px;
      font-size: 18px;

      .list {
        border-right: 1px solid #d7dae2;
      }

      .list.sel {
        color: #f10215;
        font-weight: blod;
      }
    }
  }
</style>
