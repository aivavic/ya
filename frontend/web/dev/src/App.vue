<template>
	<div id="app">
		<block-header></block-header>
			<router-view></router-view>
	</div>
</template>

<script>
import './assets/scss/main.scss'
import BlockHeader from './components/common/Header'
export default {
  name: 'app',
  components: {
    BlockHeader
  },
  created () {
    console.log('start app')
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
