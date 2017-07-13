<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id='spinner'>
        <img v-bind:src='img' />
        <div>{{ msg }}</div>
    </div>
</template>

<script>
import spinner from '@/assets/images/box.gif'
export default{
  data () {
    return {
      msg: 'Loading...',
      img: spinner
    }
  }
}
</script>

<style lang="scss" scoped>
#spinner{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    background-color: #fff;
    z-index: 9999;
    img{
        margin-top: 36vh;
    }
}
</style>
