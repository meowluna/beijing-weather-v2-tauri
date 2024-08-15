import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/MainView/views/Home/Home.vue";
import Other from "@/views/MainView/views/Other/Other.vue"
import Setting from "@/views/MainView/views/Other/views/Setting/Setting.vue"
import About from '@/views/MainView/views/Other/views/About/About.vue'
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