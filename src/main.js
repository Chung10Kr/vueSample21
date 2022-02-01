import Vue from 'vue'
import App from '@/components/layout/Layout.vue'
import router from '@/utils/router'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/css/BasicSet.css';
import '@/assets/css/common.css';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');