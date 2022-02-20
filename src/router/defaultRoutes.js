export default [
	{
		path: '/main',
		name: 'main',
		component: () => import('@/view/common/main.vue'),
		meta: { auth: true },
	},
	{
		path: '/set',
		name: 'setting',
		component: () => import('@/view/common/setting.vue'),
		meta: { auth: true },
	},
	{
		path: '/paging',
		name: 'paging',
		component: () => import('@/view/sample/paging.vue'),
		meta: { auth: true },
	},
	{
		path: '/ajax',
		name: 'ajax',
		component: () => import('@/view/sample/ajax.vue'),
		meta: { auth: true },
	},
];
