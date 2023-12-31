import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './public-path'

Vue.config.productionTip = false
// 判断qiankun环境
const __qiankun__ = window.__POWERED_BY_QIANKUN__

let instance,logout,closeCurrentPage;
const render = (props={})=>{
 const { container } = props
 instance = new Vue({
  router,
  store,
  render:h=>h(App)
 }).$mount(container ? container.querySelector('#app') : '#app')
}



export async function bootstrap() {
  // console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  const { onGlobalStateChange, name } = props
  onGlobalStateChange(state => {
    console.log(state);
    closeCurrentPage = state.closeCurrentPage
    logout = state.logout
  })
  setTimeout(() => {
    render(props);
  });
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}


// 独立运行时
if (!__qiankun__) {
  render();
}