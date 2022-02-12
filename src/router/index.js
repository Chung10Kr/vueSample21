import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from '@/router/defaultRoutes';
import emptytRoutes from '@/router/emptytRoutes';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', redirect: '/main' },
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

export default router;
