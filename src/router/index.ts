import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from "@/views/Mainview/Home/Home.vue";
import Other from "@/views/Mainview/Other/Other.vue"
import Setting from "@/views/Mainview/Other/Setting/Setting.vue"
import About from '@/views/Mainview/Other/About/About.vue';

import Mainview from "@/views/Mainview/Mainview.vue"

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home',
			component: Mainview,
			children: [
				{
					path: 'home',
					component: Home,
				},
				{
					path: 'other',
					component: Other,
				},
			],
			meta: { keepAlive: true },
		},
		{
			path: '/other',
			children: [
				{
					path: 'setting',
					component: Setting
				}, {
					path: 'about',
					component: About
				}
			],
			meta: { keepAlive: true },
		}
	]
})

export default router