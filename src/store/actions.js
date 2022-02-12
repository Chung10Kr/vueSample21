import defaultApi from '@/api/defaultApi';
import router from '@/router/index';
import store from '@/store/index';
import {
	SET_ACCESS_TOKEN,
	SET_USER_INFO,
	DESTROY_ACCESS_TOKEN,
	DESTROY_USER_INFO,
	SET_MY_MENU,
} from '@/store/mutations-types';

export default {
	async login({ commit }, oParam) {
		let oParams = {
			user_id: oParam['user_id'],
			user_pwd: oParam['user_pwd'],
		};

		let sucFn = function (result) {
			const accessToken = result.accessToken;
			if (!accessToken) {
				alert(`${result.msg}`);
				document.getElementById('user_id').focus();
				return false;
			}
			commit(SET_ACCESS_TOKEN, accessToken);
			store.dispatch('userInfo', oParams);
		};
		await defaultApi.request_login(oParams, sucFn);
	},
	async loginByToken({ commit }, token) {
		let oParams = {
			token: token,
		};
		let sucFn = function (result) {
			const accessToken = result.accessToken;
			if (!accessToken) {
				alert('로그인 기간이 만료되었습니다.');
				commit(DESTROY_USER_INFO);
				commit(DESTROY_ACCESS_TOKEN);
				router.push({ path: '/login' });
				return false;
			}
			commit(SET_ACCESS_TOKEN, accessToken);
			commit(SET_USER_INFO, result['userInfo']);
			store.dispatch('getMenu', result['userInfo']);
		};
		await defaultApi.request_loginToken(oParams, sucFn);
	},
	async userInfo({ commit }, oParams) {
		let sucFn = async function (result) {
			commit(SET_USER_INFO, result['userInfo']);
			await store.dispatch('getMenu', result['userInfo']);
			router.push({ path: '/main' });
		};
		await defaultApi.request_userInfo(oParams, sucFn);
	},
	logout({ commit }) {
		commit(DESTROY_USER_INFO);
		commit(DESTROY_ACCESS_TOKEN);
		router.push({ path: '/login' });
	},

	async getMenu({ commit }, params) {
		let sucFn = function (result) {
			commit(SET_MY_MENU, result['menu']);
		};
		await defaultApi.request_menuList(params, sucFn);
	},
};
