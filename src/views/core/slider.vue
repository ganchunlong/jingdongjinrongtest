<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="(item,index) in items" :key="item.href+index">
                <router-link :to='item.href'>
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style lang="css">
  @import "~swiper/dist/css/swiper.css";

</style>

<style lang="scss">
 
//   .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
//           border: 1px solid #fff;
          
//   }
//   .swiper-pagination-bullet{
//       background: transparent; 
//      opacity: 1;
//   }
   .swiper-pagination-bullet-active{
             background: #fff;
  }
  .swiper-slide{
    //  width: 100vw!important;
  }
</style>