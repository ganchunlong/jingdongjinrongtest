<template lang="html">
    <Panel title="导航条" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <router-link  to='/home'>
                   <span class="iconfont icon-daohangshouye"></span>
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'money'}">
                    <span class="iconfont icon-licaishouyi"></span>
                    <p>理财</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'ious'}">
                    <span class="iconfont icon-baitiaoshanfu"></span>
                    <p>白条</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'raise'}">
                   <span class="iconfont icon-jingdongzhongchou"></span>
                    <p>众筹</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'user'}">
                    <span class="iconfont icon-wode"></span>
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel
  }
};
</script>
<style lang="scss">
.router-link-exact-active {
  p,
  span {
    color: red !important;
  }
}
</style>
<style lang="scss" module>
@import "~@/assets/scss/element.scss";

.panel {
  @include panel;
  position: fixed;
  box-shadow: 0px 1px 17px 2px #ccc;
  z-index: 9999;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  margin: 0;
  > h4 {
    display: none;
  }
  .content {
    @include flex(row);
    justify-content: space-around;
    li {
      text-align: center;
      a {
        text-decoration: none;
      }
      span {
        width: 44px;
        height: 44px;
        line-height: 44px;
        font-size: 38px;
        color: #656565;
        display: inline-block;
        margin: 12px auto 6px;
      }
      p {
        font-size: 22px;
        color: #656565;
      }
    }
  }
}
</style>
