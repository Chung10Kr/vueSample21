export default {
	getUserName(state) {
		return state.username || null;
	},
	getMenuList(state) {
		return state.menuList || null;
	},
};
