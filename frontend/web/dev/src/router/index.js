import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import Pricing from '@/components/pages/Pricing'
import Blog from '@/components/pages/Blog'
import Gallery from '@/components/pages/Gallery'
import VideoTemplates from '@/components/pages/VideoTemplates'
import Benefits from '@/components/pages/Benefits'
import SignIn from '@/components/pages/SignIn'
import SignUp from '@/components/pages/SignUp'
import Article from '@/components/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }, {
      path: '/video-template',
      name: 'VideoTemplates',
      component: VideoTemplates
    }, {
      path: '/benefits',
      name: 'Benefits',
      component: Benefits
    }, {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }, {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    }, {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }, {
      path: '/blog/:slug',
      name: 'Article',
      component: Article
    }, {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    }, {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
