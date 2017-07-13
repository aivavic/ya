<template>
  <div class="hello">
    <carousel :list="carousel"></carousel>
    <subscribes></subscribes>
  </div>
</template>

<script>
import Carousel from '@/components/common/Carousel'
import Subscribes from '@/components/common/SubscribesForm'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carousel: {
        header: 'GET INSPIRED BY VIDEOS CREATED USING RENDERFOREST',
        description: 'Our simplified video maker will do its best to exceed all your expectations!'
      }
    }
  },
  components: {
    'carousel': Carousel,
    Subscribes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
