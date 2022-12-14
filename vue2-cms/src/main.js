import './public-path' //需要放在最顶部
import Vue from 'vue'
import router from './router'
import App from './App.vue'


Vue.config.productionTip = false


let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    render: h => h(App),
    router,
  }).$mount(container ? container.querySelector('#app') : '#app');
}


// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
 
export async function bootstrap() {
  console.log('vue2 cms bootstraped');
}
export async function mount(props) {
  console.log('vue2 cms mount');
  render(props);
}
export async function unmount() {
  console.log('vue2 cms unmount')
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
