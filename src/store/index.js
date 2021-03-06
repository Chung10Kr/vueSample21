import Vue from 'vue';
import Vuex from 'vuex';
import statue from '@/store/states';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import actions from '@/store/actions';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	statue,
	getters,
	mutations,
	plugins: [createPersistedState()],
});
