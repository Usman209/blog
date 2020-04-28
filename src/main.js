import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.config.productionTip = false


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

  render: h => h(App),
}).$mount('#app')