import { createRouter, createWebHistory } from 'vue-router';

import AnotherView from '@/views/AnotherView.vue';
import HomeView from '@/views/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},

	{
		path: '/another',
		name: 'Another',
		component: AnotherView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
