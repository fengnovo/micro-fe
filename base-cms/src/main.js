import Vue from 'vue'
import ElementUI from 'element-ui';
import { registerMicroApps, start } from 'qiankun';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import App from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'vue2-cms',
    entry: '//localhost:8080', // http://localhost:8080/child/vue-hash/
    container: '#subapp-container',
    activeRule: '/vue2',
  },
  {
    name: 'vue3-cms',
    entry: '//localhost:8081', // http://localhost:8080/child/vue-hash/
    container: '#subapp-container',
    activeRule: '/vue3',
  },
  {
    name: 'react-cms',
    entry: '//localhost:3000', // http://localhost:8080/child/vue-hash/
    container: '#subapp-container',
    activeRule: '/react',
  },
]);

start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#root-app');
