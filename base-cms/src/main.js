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
    name: 'vue2-cms-app',
    entry: '//localhost:8080',
    container: '#subapp-container',
    activeRule: '/vue2-cms-app',
  },
  {
    name: 'vue3-cms-app',
    entry: '//localhost:8081',
    container: '#subapp-container',
    activeRule: '/vue3-cms-app',
  },
  {
    name: 'react-cms-app',
    entry: '//localhost:3000',
    container: '#subapp-container',
    activeRule: '/react-cms-app',
  },
]);

start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
