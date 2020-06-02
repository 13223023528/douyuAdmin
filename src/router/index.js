import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const video = () => import('../views/video/video')

export default new Router({
  routes: [
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
