import Vue from 'vue'
import App from './App.vue'//路由挂载
import router from './router'//路由列表
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render:h=>h(App)
}).$mount('#app')
