<template>
  <div id="home">
    <div class="maxWidth">
      <!-- content1 -->
      <div class="home-content1">
        <el-row :gutter="10">
          <el-col :span="4">
            <div class="bg-white content1-left">
              <dl>
                <dt class="nav-title">数字资产类目</dt>
                <dl class="nav-box">
                  <dd>资产子类目</dd>
                  <dd>资产子类目</dd>
                  <dd>资产子类目</dd>
                  <dd>资产子类目</dd>
                  <dd>资产子类目</dd>
                </dl>
              </dl>
            </div>
          </el-col>
          <el-col :span="13">
            <div class="bg-white content1-center">
              <!-- swiper -->
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="bg-white content1-right">
              <dl>
                <dt class="nav-title">XXX数字资产行情图</dt>
                <dd class="content1-echarts">行情图</dd>
              </dl>
              <dl>
                <dt class="nav-title">消息快报</dt>
                <dl class="content1-msg">
                  <dd>消息快报名称XXX</dd>
                  <dd>消息快报名称XXX</dd>
                  <dd>消息快报名称XXX</dd>
                </dl>
              </dl>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- content2 -->
      <div class="home-content2 bg-white flex" v-for="(item,i) in 2">
        <div class="nav-title flexAllCenter">新发数字资产</div>
        <div class="assets-box flex">
          <!-- assets-contnet -->
          <div class="assets-content" v-for="(item,i) in 5">
            <img src="@/assets/img/default.png" alt="">
            <p class="title">数字资产名称</p>
            <div class="flexBetweenCenter intr-box">
              <span>发售价格</span>
              <span>剩余数量/发售数量</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '@/assets/css/swiper.css'
  export default {
    name: 'Home',
    data() {
      return {
        mySwiper: "",
      }
    },
    created() {

    },
    mounted: function() {
      // 轮播
      this.mySwiper = new Swiper('.swiper-container', {
        loop: true, //循环模式选项
        autoplay: true, //自动播放
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  #home {
    margin-top: 10px;
    padding-bottom: 100px;
  }

  .nav-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 40px;
    padding-left: 10px;
  }

  .home-content1 {
    height: 480px;

    .bg-white {
      height: 480px;
    }

    // center
    .content1-center {

      .swiper-slide {
        height: 480px;
        font-size: 50px;
        text-align: center;
        line-height: 480px;
      }
    }

    // left
    .content1-left {
      .nav-box {
        padding-left: 10px;
      }

      dd {
        display: inline-block;
      }

      dd:nth-child(2n+1) {
        padding: 0 5px 0 0;
      }
    }

    //right
    .content1-right {
      .content1-echarts {
        height: 200px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin: 0 10px;
        text-align: center;
      }

      .content1-msg {
        padding-left: 10px;
      }
    }
  }

  // content2
  .home-content2 {
    margin-top: 10px;

    .nav-title {
      width: 200px;
    }

    .assets-box {
      overflow-x: auto;

      .assets-content {
        padding: 10px;
        border: 1px solid #d7dae2;
      }

      .title {
        line-height: 30px;
        font-weight: bold;
      }

      .intr-box {
        font-size: 14px;
      }
    }

  }
</style>
