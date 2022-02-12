export default {
	getAccessToken(state) {
		return state.accessToken;
	},
	getMenuList(state) {
		return state.menuList || null;
	},
};
