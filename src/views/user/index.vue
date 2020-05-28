<template>
  <div class="user">
    <div class="top">
      <div class="userinfo">
        <div class="imga">
          <img
            src="@/assets/img/toux1.jpg"
            alt=""
          >
        </div>
        <div class="mingz">
          <h2>哈罗PUA520</h2>
          <span>已认证</span>
        </div>

      </div>
      <div class="shezhi">
        <img
          src="@/assets/img/shez.png"
          alt=""
        >
      </div>
    </div>
    <div class="main">
      <div class="card-two planecard">
        <div>
          <h2><i>￥</i>12093.00</h2>
          <p>余额</p>
        </div>
        <div>
          <h2>9999</h2>
          <p>积分</p>
        </div>
      </div>
      <div class="planecard">
        <router-link
          to='/home'
          class="vip"
        >

          超级会员&gt;

        </router-link>
      </div>
      <div class="planecard order">
        <div class="title">
          <span>我的订单</span>
          <span>全部订单></span>
        </div>
        <ul class='flex-icon'>
          <li>
            <router-link to="/home">
              <h2>
                <img
                  src="@/assets/img/dier_my_img.png"
                  alt=""
                >
                <i>1</i>
              </h2>
              <p>待付款</p>
            </router-link>

          </li>
          <li>
            <router-link to="/home">
              <img
                src="@/assets/img/dier_my_img1.png"
                alt=""
              >
              <p>待发货</p>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
              <img
                src="@/assets/img/dier_my_img2.png"
                alt=""
              >
              <p>待收货</p>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
              <img
                src="@/assets/img/dier_my_img3.png"
                alt=""
              >
              <p>退货退款</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="planecard">
        <ul class="flex-icon">
          <li>
            <router-link to="/home">
              <img
                src="@/assets/img/dier_my_img_bottom.png"
                alt=""
              >
              <p>我的收藏</p>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
              <img
                src="@/assets/img/dier_my_img_bottom1.png"
                alt=""
              >
              <p>我的银行卡</p>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
              <img
                src="@/assets/img/dier_my_img_bottom2.png"
                alt=""
              >
              <p>我的预约</p>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
              <img
                src="@/assets/img/dier_my_img_bottom3.png"
                alt=""
              >
              <p>防伪查询</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="list_indexmy planecard">

        <router-link
          to="/home"
          class="flex-sp"
        >
          <div>
            <h3><img src="@/assets/img/hou_tjimg.png">设 置</h3>
            <div class="right">
              <img src="@/assets/img/right_jiant.png">
            </div>
          </div>

        </router-link>
        <router-link
          to="/home"
          class="flex-sp"
        >
          <div>
            <h3><img src="@/assets/img/hou_tjimg1.png">帮助与客服</h3>
            <div class="right">
              <img src="@/assets/img/right_jiant.png">
            </div>
          </div>

        </router-link>
        <router-link
          to="/home"
          class="flex-sp"
        >
          <div>
            <h3><img src="@/assets/img/hou_tjimg2.png">意见反馈</h3>
            <div class="right">
              <img src="@/assets/img/right_jiant.png">
            </div>
          </div>

        </router-link>
        <router-link
          to="/home"
          class="flex-sp"
        >
          <div>
            <h3><img src="@/assets/img/hou_tjimg3.png">关于</h3>
            <div class="right">
              <img src="@/assets/img/right_jiant.png">
            </div>
          </div>

        </router-link>
       

      </div>

    </div>

    <Navbar />

  </div>
</template>

<script>
import Navbar from "../public/navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.user {
  margin-bottom: 100px;
  background: #f6f6f6;
}
.top {
  box-sizing: border-box;
  height: 280px;
  width: 100%;
  position: relative;
  background: url(~@/assets/img/my_bj.jpg) center center no-repeat/cover;
  .userinfo {
    position: absolute;
    top: 0;
    left: 0;
    padding: 34px 22px;
    display: flex;
    align-items: center;
    .imga {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      border: 2px solid #fff;
      overflow: hidden;
      margin-right: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .mingz {
      color: #fff;
      h2 {
        font-size: 36px;
        margin-bottom: 16px;
      }
      span {
        font-size: 24px;
      }
    }
  }

  .shezhi {
    position: absolute;
    width: 50px;
    height: 53px;
    top: 27px;
    right: 25px;
  }
}
.main {
  position: relative;
  top: -55px;
}
.card-two {
  display: flex;
  justify-content: center;
  margin: 0 13px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 0.15rem;
  text-align: center;
  > div {
    width: 50%;
    h2 {
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 12px;
      color: red;
      i {
        font-size: 19px;
      }
    }
    p {
      font-size: 28px;
    }
  }
}
.planecard {
  background: #fff;
  box-shadow: 0 0 5px rgba(121, 121, 121, 0.05);
  margin-bottom: 20px;
}
.vip {
  display: block;
  padding: 0 24px 0 48px;
  display: block;
  line-height: 100px;
  margin: 0 23px;
  background: url(~@/assets/img/grzx.png) no-repeat center left;
  background-size: 38px;
  color: #ff2e26;
  font-size: 30px;
  box-sizing: border-box;
  text-decoration: none;
}
.order {
  > .title {
    display: flex;
    justify-content: space-between;
    padding: 35px 20px;
    box-sizing: border-box;
    color: #333;
    align-items: center;
    border-bottom: solid 1px #f6f6f6;
    span:nth-child(1) {
      font-size: 32px;
    }
    span:nth-child(2) {
      color: #999;
      font-size: 26px;
    }
  }
}
.flex-icon {
  display: flex;
  justify-content: left;

  text-align: center;
  padding: 30px 0;
  > li {
    width: 25%;
    position: relative;
    img {
      width: 76px;
    }
    p {
      font-size: 28px;
    }
    h2 {
      width: 76px;
      position: relative;
      margin: auto;
    }
    i {
      background: #ff0000;
      border-radius: 50%;
      display: block;
      padding: 4px;
      position: absolute;
      color: #fff;
      border: solid 1px #fff;
      top: 0;
      right: 0;
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      overflow: hidden;
    }
  }
}
.list_indexmy .flex-sp {
  > div {
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 30px 16px;
    box-sizing: border-box;
    align-items: center;
    height: 86px;
    h3 {
      font-size: 28px;
      
      color: #666;
      img {
        width: 40px;
            vertical-align: -10px;
        margin-right: 10px;
      }
    }
    .right {
      img {
        width: 14px;
        height: 26px;
      }
    }
  }
  
}
.list_indexmy .flex-sp:nth-child(1)>div{
      border-top:none;
}
</style>