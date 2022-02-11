import { SET_MY_MENU, SET_USER_NAME } from '@/store/mutations-types';

export default {
	[SET_MY_MENU](state, value) {
		state.menuList = value;
	},
	[SET_USER_NAME](state, value) {
		state.username = value;
	},
};
