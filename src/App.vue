<template>
  <div id="app">
    <div id="appHeader">
      <!-- nav -->
      <div id="appNav">
        <ul class="nav-list maxWidth flexEndCenter">
          <li>您好，请登录</li>
          <li>我的资产</li>
          <li>客户服务</li>
          <li>网站导航</li>
          <li>微信小程序</li>
        </ul>
      </div>
      <!-- search -->
      <div id="appSearch">
        <div class="maxWidth flexAllCenter">
          <!-- logo -->
          <img class="logo" src="@/assets/img/default.png" alt="">
          <!-- search-sel -->
          <div class="search-box">
            <ul class="search-tab flex">
              <li class="sel">数字资产</li>
              <li>锚定物</li>
            </ul>
            <div class="search-content">
              <input type="text" placeholder="请输入搜索内容">
              <button>搜索</button>
            </div>
          </div>
          <!-- wxQRcode -->
          <img class="wxQRcode" src="@/assets/img/default.png" alt="">
        </div>
      </div>

    </div>
    <!-- RoleNav -->
    <RoleNav></RoleNav>

    <router-view />
  </div>
</template>
<script>
  import RoleNav from '@/components/RoleNav.vue'

  export default {
    name: 'App',
    components: {
      RoleNav
    },
    mounted: function() {
      // var that = this;
      // that.$store.commit('setRole', 'owner');
      // that.$store.dispatch('setRoleAsync', 'owner');
      // setTimeout(function(){
      //   console.log(11111111, that.$store, that.$store.getters.role);
      // },1000);
    }
  }
</script>

<style>
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;
  }

  #appHeader {
    text-align: center;
  }

  /* nav */
  #appHeader #appNav {
    border-bottom: 1px solid #ddd;
    background-color: #e3e4e5;
  }

  #appHeader .nav-list {
    color: #999;
    margin: 0 auto;
  }

  #appHeader .nav-list li {
    position: relative;
    cursor: pointer;
    height: 28px;
    line-height: 28px;
    padding: 0 22px;
  }

  #appHeader .nav-list li::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 10px;
    background-color: #ccc;
  }

  #appHeader .nav-list li:hover {
    color: #f10215;
  }

  /* search */
  #appHeader #appSearch {
    background-color: #fff;
    height: 140px;
  }

  #appHeader #appSearch .maxWidth {
    position: relative;
    height: 140px;
  }

  #appHeader .logo {
    width: 190px;
    height: 120px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  #appHeader .search-box .search-tab li {
    width: 100px;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    cursor: pointer;
    line-height: 32px;
  }

  #appHeader .search-box .search-tab li.sel {
    background-color: #e1251b;
    color: #fff;
    border-left: 1px solid #e1251b;
    border-top: 1px solid #e1251b;
  }

  #appHeader .search-box .search-tab li:last-child {
    border-right: 1px solid #ccc;
  }

  #appHeader .search-box .search-content {
    border: 2px solid #e2231a;
  }

  #appHeader .search-box .search-content input {
    padding: 2px 16px;
    width: 600px;
    height: 50px;
    border: 1px solid transparent;
    line-height: 50px;
  }

  #appHeader .search-box .search-content button {
    width: 80px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #e1251b;
    color: #fff;
    cursor: pointer;
  }

  #appHeader .wxQRcode {
    width: 66px;
    height: 66px;
    position: absolute;
    top: 5px;
    right: 0;
  }
</style>
