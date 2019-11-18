import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import movieDetail from '@/pages/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/movieDetail',
    	name: 'movieDetail',
    	component: movieDetail
    }
  ]
})
