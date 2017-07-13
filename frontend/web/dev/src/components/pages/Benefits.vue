<template>
  <div class="hello">
    <carousel :list="carousel"></carousel>

  </div>
</template>

<script>
import image from '@/assets/images/header-bg.png'
import Carousel from '@/components/common/Carousel'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carousel: {
        header: 'WHY CHOOSE OUR FREE ONLINE VIDEO EDITOR?',
        description: 'You don\'t need any previous knowledge in video editing. Make your videos online and publish to your network in one click',
        background: image
      }
    }
  },
  components: {
    'carousel': Carousel
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
