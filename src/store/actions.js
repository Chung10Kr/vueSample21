import CFGNetwork from '@/utils/CFGNetwork';

import { SET_MY_MENU, SET_USER_NAME } from '@/store/mutations-types';

export default {
	getMenu({ commit }, params) {
		let sucFn = function (result) {
			commit(SET_MY_MENU, result['menu']);
		};
		return CFGNetwork.request_get_menu(params, sucFn);
	},
	getUserNm({ commit }, params) {
		return commit(SET_USER_NAME, params);
	},
};
