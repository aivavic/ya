<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="article container">
        <spinner v-if='spinner'></spinner>
        <h1>{{ article.title }}</h1>
        <img v-bind:src="'http://127.0.0.1:8000/storage/' + article.image"/>
        <div v-html="article.body" class='content'></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from '@/components/common/spinner'
export default {
  name: 'article',
  computed: mapGetters({
    article: 'getArticleBySlug',
    spinner: 'getSpinnerStatus'
  }),
  created () {
    this.$store.commit('START_SPINNER')
    this.$store.dispatch('getArticleBySlug', this.$route.params.slug)
  },
  components: {
    Spinner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.spinner{
}
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
img{
    width: 200px
}
</style>
