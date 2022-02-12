import {
	SET_ACCESS_TOKEN,
	SET_USER_INFO,
	DESTROY_ACCESS_TOKEN,
	DESTROY_USER_INFO,
	SET_MY_MENU,
} from '@/store/mutations-types';
import api from '@/api/index';

export default {
	[SET_ACCESS_TOKEN](state, accessToken) {
		if (accessToken) {
			state.accessToken = accessToken;
			api.defaults.headers.common.Authorization = `${accessToken}`;
			sessionStorage.setItem('accessToken', accessToken);
		}
	},
	[SET_USER_INFO](state, userInfo) {
		if (userInfo) {
			state.userInfo = userInfo;
		}
	},
	[DESTROY_ACCESS_TOKEN](state) {
		state.accessToken = '';
		delete api.defaults.headers.common.Authorization;
		sessionStorage.removeItem('accessToken');
	},
	[DESTROY_USER_INFO](state) {
		state.userInfo = null;
	},
	[SET_MY_MENU](state, value) {
		state.menuList = value;
	},
};
