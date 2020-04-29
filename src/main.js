import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode:'history',
  
})


// custom directive

Vue.directive('theme', {
  bind(el, binding, ) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
});
new Vue({
  el:'#app',
  render: h => h(App),
  router:router
})