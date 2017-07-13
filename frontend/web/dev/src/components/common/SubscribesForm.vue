<template>
    <div class='subscribes-form'>
        <h2>New Videos are released each week!</h2>
        <h3>Subscribe to our newsletter to receive latest news and offers</h3>
        <form>
            <div class="form-group" :class="{}">

                <div class="content"><input type="text" class="form-control"
                                            v-model="name"
                                            placeholder="Name"
                /></div>
                <div class="message">{{ error.name }}</div>
            </div>
            <div class="form-group" :class="{}">
                <div class="content"><input type="email" class="form-control"
                                            v-model="email"
                                            placeholder="email"
                /></div>
                <div class="message">{{ error.email }}</div>
            </div>
            <div class="form-group">
                <div class="actions">
                    <button type="button" class="btn btn-primary" @click="submit">Subscribe</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default{
  data () {
    return {
      msg: 'hello vue',
      name: '',
      email: '',
      error: {
        name: '',
        email: ''
      },
      validate: ''
    }
  },
  watch: {
    name: _.debounce(
      function () {
        this.error.email = 'Думаю...'
        var vm = this
        axios.post(this.$apiBaseUrl + '/subscribes/validation', {
          name: this.name,
          email: this.email
        })
          .then(function (response) {
            if (response.data.name) {
              vm.error.name = _.capitalize(response.data.name[0])
            } else {
              vm.error.name = ''
            }
            if (response.data.email) {
              vm.error.email = _.capitalize(response.data.email[0])
            } else {
              vm.error.email = ''
            }
          })
          .catch(function (error) {
            vm.error.email = 'Ошибка! Не могу связаться с API. ' + error
          })
      },
      500
    ),
    email: _.debounce(
      function () {
        this.error.email = 'Думаю...'
        var vm = this
        axios.post(this.$apiBaseUrl + '/subscribes/validation', {
          name: this.name,
          email: this.email
        })
          .then(function (response) {
            if (response.data.email) {
              vm.error.email = _.capitalize(response.data.email[0])
            } else {
              vm.error.email = ''
            }
            if (response.data.name) {
              vm.error.name = _.capitalize(response.data.name[0])
            } else {
              vm.error.name = ''
            }
          })
          .catch(function (error) {
            vm.error.email = 'Ошибка! Не могу связаться с API. ' + error
          })
      },
      500
    )
  },
  methods: {
    submit: function () {
      var vm = this
      axios.post(this.$apiBaseUrl + '/subscribes/validation', {
        name: this.name,
        email: this.email
      })
        .then(function (response) {
          if (response.data.email) {
            vm.error.email = _.capitalize(response.data.email[0])
          } else {
            vm.error.email = ''
          }
          if (response.data.name) {
            vm.error.name = _.capitalize(response.data.name[0])
          } else {
            vm.error.name = ''
          }
        })
        .catch(function (error) {
          vm.error.email = 'Ошибка! Не могу связаться с API. ' + error
        })
      console.log(vm.error)
      if (vm.error.email === undefined && vm.error.name === undefined) {
        axios.post(`http://127.0.0.1:8000/subscribes/store`, {
          name: this.name,
          email: this.email
        })
        .then(response => {
          this.name = ''
          this.email = ''
          alert('Отправлено!')
          console.log(response)
        })
        .catch(e => {
          console.log(e)
          this.errors.push(e)
        })
      }
    }
  }
}

</script>

<style lang="scss" scoped>
form {
  .form-group{
    display: inline-block;
  }
}
</style>
