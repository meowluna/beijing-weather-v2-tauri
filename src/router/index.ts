import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from "@/views/Mainview/Home/Home.vue";
import Other from "@/views/Mainview/Other/Other.vue"
import Setting from "@/views/Setting/Setting.vue"

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
					component: Home
				},
				{
					path: 'other',
					component: Other
				},
			]
		},
		{
			path: '/setting',
			component: Setting
		}
	]
})

export default router