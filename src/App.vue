<template>
  <div id="app" class="Router">  
    <transition :name="transitionName">
　　<router-view></router-view>
</transition>  
    
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
      return {
          transitionName:'slide-left'
      }
  },
  
}

</script>

<style lang="scss">
.Router{
  overflow-x: hidden;
}
@import "~@/assets/scss/reset.scss";
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  
}
.slide-right-enter {
  opacity: 0;
  // transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  // transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  // transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  // transform: translate3d(-100%, 0, 0);
}

</style>
