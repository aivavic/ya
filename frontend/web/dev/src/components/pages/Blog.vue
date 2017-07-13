<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="article-list container">
        <spinner v-if='spinner'></spinner>
        <carousel :list="carousel"></carousel>

        <div v-for="item in articles" class='article-item col-lg-4 col-md-6'>
            <img v-bind:src="storage + '/' + item.image"/>
            <span class='date'>{{ item.created_at }}</span>
            <router-link :to="'/blog/' + item.slug">{{ item.title }}</router-link>
            <p>{{ item.excerpt }}</p>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/common/Carousel'
import Spinner from '@/components/common/spinner'
import { mapGetters } from 'vuex'
export default {
  name: 'blog',
  data () {
    return {
      carousel: {
        header: 'THE YAN BLOG',
        description: 'Useful articles, tutorials related to Video Production and more ...'
      },
      errors: []
    }
  },
  computed: mapGetters({
    articles: 'allArticles',
    spinner: 'getSpinnerStatus',
    storage: 'getStorageUrl'
  }),
  components: {
    'carousel': Carousel,
    Spinner
  },
  created () {
    this.$store.commit('START_SPINNER')
    this.$store.dispatch('getAllProducts')
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
img {
max-width: 100%;
height: auto;
}
.date{
float:right;
}


</style>
