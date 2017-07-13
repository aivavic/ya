<template>
  <div class="video-templates">
    <carousel :list="carousel"></carousel>
      Video templates
  </div>
</template>

<script>
import Carousel from '@/components/common/Carousel'
export default {
  name: 'video-templates',
  data () {
    return {
      msg: 'VideoTemplates',
      carousel: {
        header: 'Shaky Typography Toolkit',
        description: 'Promotes any message with dynamic text and modern feel'
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

</style>
