<template>
  <div class="sign-in">
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
import axios from 'axios'
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
        username: '',
        email: '',
        pwd: '',
        rpwd: ''
      },
      tokens: []
    }
  },
  created () {
 //   axios.get(this.$apiBaseUrl + '/oauth/personal-access-tokens')
 //     .then(response => {
 //       this.tokens = response.data
 //     })
    var params = new URLSearchParams()
    params.append('Content-Type', 'application/x-www-form-urlencoded')
    params.append('Authorization', 'Bearer eyJ0eXAiO~~~.eyJpc3MiO~~~.MSzBigimzWrc9DlZZduh~~~')
    axios.post('http://127.0.0.1:8000/api/v1/auth/app', params)
      .then(response => {
        console.log(response.data)
      })
  },
  methods: {
    submit: function () {
      this.$store.dispatch('signUp', this.auth)
      console.log(this.auth)
    }
  },
  components: {
    'carousel': Carousel
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
