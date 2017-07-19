<template>
  <div class="sign-in">
    <spinner v-if='spinner'></spinner>
    <carousel :list="carousel"></carousel>

    <form>
      <div class="form-group">
        <label for="email">Username: {{ auth.username }}</label>
        <input type="text" class="form-control" id="username" v-model.trim="auth.username">
      </div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" v-model.trim="auth.email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" v-model.trim="auth.pwd">
      </div>
      <div class="form-group">
        <label for="pwd">Repeat Password:</label>
        <input type="password" class="form-control" id="rpwd" v-model.trim="auth.rpwd">
      </div>
      <div class="checkbox">
        <label><input type="checkbox"> Remember me</label>
      </div>
      <button type="submit" class="btn btn-default" @click.prevent="submit">Submit</button>
    </form>
    <router-link to="/sign-in"><p>Login</p></router-link>
  </div>
</template>

<script>
import Carousel from '@/components/common/Carousel'
import Spinner from '@/components/common/spinner'
import { mapGetters } from 'vuex'
export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carousel: {
        header: 'Shaky Typography Toolkit',
        description: 'Promotes any message with dynamic text and modern feel'
      },
      auth: {
        username: 'aivavic',
        email: 'aivavic@aivavic.com',
        pwd: 'aivavic',
        rpwd: 'aivavic'
      },
      tokens: []
    }
  },
  computed: mapGetters({
    spinner: 'getSpinnerStatus',
    storage: 'getStorageUrl'
  }),
  methods: {
    submit: function () {
      this.$store.dispatch('signUp', this.auth)
    }
  },
  components: {
    'carousel': Carousel,
    'spinner': Spinner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
    margin-bottom: 15px;
    width: 600px;
    margin: 0 auto;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
</style>
