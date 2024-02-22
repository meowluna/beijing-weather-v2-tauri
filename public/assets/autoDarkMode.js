function toggleDarkMode() {
	const hour = new Date().getHours()
	const isDarkModeTime = hour >= 18 || hour < 6
	// const isDarkModeTime = true
	if (isDarkModeTime) {
		document.getElementsByTagName('html')[0].classList.add('mdui-theme-dark')
	} else {
		document.getElementsByTagName('html')[0].classList.remove('mdui-theme-dark')
	}
}
let temp = localStorage.getItem('Settings_autoDarkMode')
if (temp != undefined) {
	if (JSON.parse(temp)) {
		toggleDarkMode()
		setInterval(toggleDarkMode, 5 * 60 * 1000) //5分钟检查一下，可以实现不刷新页面切换
	}
}