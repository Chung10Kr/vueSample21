import Vue from 'vue';
import App from '@/App';

import router from '@/router/index';
import store from '@/store/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/css/BasicSet.css';
import '@/assets/css/common.css';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

async function init() {
	const storeToken = store.state.accessToken;
	if (storeToken) {
		return store.dispatch('loginByToken', storeToken);
	}
	return true;
}

init().then(() => {
	new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount('#app');
});
