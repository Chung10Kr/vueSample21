import networkUtils from '@/utils/NetworkUtils.js';

export default {
	request_login: function (params, successFn, errorFnc) {
		return networkUtils.POST('/login', params, successFn, errorFnc);
	},
	request_loginToken: function (params, successFn, errorFnc) {
		return networkUtils.POST('/login/token', params, successFn, errorFnc);
	},
	request_userInfo: function (params, successFn, errorFnc) {
		return networkUtils.POST('/user/info', params, successFn, errorFnc);
	},
	request_menuList: function (params, successFn, errorFnc) {
		return networkUtils.GET('/set/menu', params, successFn, errorFnc);
	},

	request_sample_get: function (params, successFn, errorFnc) {
		return networkUtils.GET('/sample/name', params, successFn, errorFnc);
	},
	request_sample_post: function (params, successFn, errorFnc) {
		return networkUtils.POST('/sample/name', params, successFn, errorFnc);
	},
};
