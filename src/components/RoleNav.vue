<!-- 模板文件用于初始化 -->
<template>
  <div id="roleNav">
    <ul class="navTab maxWidth flex">
      <li>数字资产申购</li>
      <li>我要买</li>
      <li>我要卖</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'roleNav',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  #roleNav {
    font-size: 18px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  #roleNav .navTab {
    padding-left: 190px;
  }

  #roleNav .navTab li {
    width: 150px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    border-left: 1px solid #ccc;
  }

  #roleNav .navTab li:last-child {
    border-right: 1px solid #ccc;
  }
</style>
