import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/MainView/Home/Home.vue";
import Other from "@/views/MainView/Other/Other.vue"
import Setting from "@/views/MainView/Other/Setting/Setting.vue"
import About from '@/views/MainView/Other/About/About.vue'
import MainView from '@/views/MainView/MainView.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home',
			component: MainView,
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