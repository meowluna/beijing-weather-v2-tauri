export function routerTransition(router: any) {
	router.afterEach((to: any, from: any) => {
		const toDepth = to.path.split('/').length
		const fromDepth = from.path.split('/').length
		if (toDepth == fromDepth || from.path == '/') {
			to.meta.transition = 'fade'
		} else if (toDepth < fromDepth) {
			to.meta.transition = 'slide-right'
		} else if (toDepth > fromDepth) {
			to.meta.transition = 'slide-left'
		}
	})
}



