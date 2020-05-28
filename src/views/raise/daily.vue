<template lang="html">
    <Panel title="每日签到" :class="$style.panel">
        <section :class="$style.content">
          <Slider :options="options" :items="items" cname="product-slider1"/>          
            <p>不抢白不抢</p>
            
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
    components: {
        Panel,
          Slider,
    },
    data() {
        return {
            items: [{
                href: "download",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160",
            }, {
                href: "download",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160",
            }, {
                href: "download",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160",
            }, {
                href: "download",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160",
            }],
            options: {
                slidesPerView: 2,
                spaceBetween: 30,
                freeMode: true,
            },
        }
    },
}
</script>

<style lang="scss" >
  .product-slider1{
    overflow: hidden;
    .swiper-container{
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
          img{
            width: 100%;
            display: block;
            height: 136px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>
<style lang="scss" module>
  @import "~@/assets/scss/element.scss";
  .panel{
    @include panel;
    .content{
      @include flex(row);
      position: relative;
      padding-bottom: 40px;
      img{
        width: 320px;
        height: 136px;
      }
      p{
        position: absolute;
        top:-112px;
        right: 20px;
        font-size: 28px;
        color: #999;
        height: 112px;
        line-height: 112px;
      }
    }
  }
</style>
