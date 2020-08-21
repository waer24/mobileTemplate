import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import 'lib-flexible';

import { button } from 'vant';

Vue.use(button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
