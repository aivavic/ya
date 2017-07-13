<template>
  <div class="container">
    <header>
      <slot name="header">IndexHeader</slot>
    </header>
    <subscribes></subscribes>
  </div>
</template>

<script>
import Subscribes from './common/SubscribesForm'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
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
