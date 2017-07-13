<template>
  <div class="container">
      <carousel :list="carousel"></carousel>
      <h1>{{ msg }}</h1>
  </div>

</template>

<script>
import Carousel from '@/components/common/Carousel'
export default {
  name: 'pricing',
  data () {
    return {
      msg: 'Pricing Page',
      carousel: {
        header: 'BEST PRICES FOR THE QUALITY YOU GET!',
        description: 'RenderForest provides free editing access to all categories of videos. You can create broadcast quality videos in no time!'
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
