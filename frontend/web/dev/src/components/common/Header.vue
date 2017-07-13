<template>
    <div class="header container">
        <router-link to="/" exact class="logo"><p>Youniq Animation</p></router-link>
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.href" exact>{{ item.text }} </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menu: [
        {
          href: '/',
          text: 'Home'
        }, {
          href: '/video-template',
          text: 'Video Templates'
        }, {
          href: '/benefits',
          text: 'Benefits'
        }, {
          href: '/gallery',
          text: 'Gallery'
        }, {
          href: '/pricing',
          text: 'Pricing'
        }, {
          href: '/blog',
          text: 'Blog'
        }, {
          href: '/sign-in',
          text: 'Sign In'
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .header{

        .logo {
            float: left;
            line-height: 40px;
        }

        h1, h2 {
            font-weight: normal;
        }

        ul {
            list-style-type: none;
            padding: 0;
            float: right;
            line-height: 40px;
            li {
                display: inline-block;
                margin: 0 10px;
            }
        }
        a {
            color: #42b983;
            &.router-link-active {
                color: red;
            }
        }

    }


</style>
