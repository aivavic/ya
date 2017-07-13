<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class='carousel' v-bind:style="{ 'background-image': 'url(' + list.background + ')' }">
        <h1>{{ list.header }}</h1>
        <p>{{ list.description }}</p>
    </div>
</template>

<script>
export default{
  data () {
    return {
      msg: 'hello vue'
    }
  },
  props: ['list']
}
</script>

<style scoped>
.carousel{
    min-height: 200px;
}
</style>
