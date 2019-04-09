import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BoS from './components/BoS.vue';
import TeamStats from './components/TeamStats.vue';
import GamerDetail from './components/GamerDetail.vue';

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'home',
    component: BoS
  },
  {
    path: '/team-stats',
    name: 'testStats',
    component: TeamStats
  },
  {
    path: '/:pid',
    name: 'gamerDetail',
    component: GamerDetail
  }
];

const router = new Router({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
