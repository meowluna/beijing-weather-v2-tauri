import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/view/Home/Home.vue";
import Other from "@/view/Other/Other.vue"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/home',
			component: Home
		},
		{
			path: '/other',
			component: Other
		},
		{
			path: '/',
			redirect: '/home'
		}
	]
})

export default router