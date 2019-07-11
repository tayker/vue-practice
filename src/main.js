import Vue from 'vue';
import App from './App.vue';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import VueCharts from 'vue-chartjs';

Vue.use(element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
