import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About  from './views/About.vue'
import Menus  from './views/Menus.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'
import Gallery from './views/SingleGallery.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/menus',
      name: 'menus',
      component: Menus
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  mode: 'history'
})
