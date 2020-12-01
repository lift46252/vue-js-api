import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store"
import VueRouter from 'vue-router'
import Home from './components/Home'

Vue.use(VueRouter)

const routes = [
  {path: "/", component: Home, name: "home"},
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
