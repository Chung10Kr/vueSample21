import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from '@/router/defaultRoutes';
import emptytRoutes from '@/router/emptytRoutes';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', name: '/', redirect: '/login' },
		{
			path: '/',
			name: 'emptyLayout',
			component: () => import('@/components/layout/EmptyLayout.vue'),
			children: emptytRoutes,
		},
		{
			path: '/',
			name: 'defaultLayout',
			component: () => import('@/components/layout/DefaultLayout.vue'),
			children: defaultRoutes,
		},
		{
			path: '*',
			name: 'NotFoundPAge',
			component: () => import('@/view/common/NotFoundPage.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.getAccessToken) {
		next('/');
		return;
	}
	next();
});
export default router;
