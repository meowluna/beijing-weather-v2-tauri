<template>
    <RouterView></RouterView>
</template>

<script lang="ts" setup>
    import emitter from '@/utils/emitter'

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
    emitter.on('toggleDarkMode', toggleDarkMode)
    if (localStorage.getItem('Settings_autoDarkMode') != undefined) {
        if (JSON.parse(localStorage.getItem('Settings_autoDarkMode')!) == true) {
            toggleDarkMode()
            setInterval(toggleDarkMode, 5 * 60 * 1000) //5分钟检查一下，可以实现不刷新页面切换
        }
    }
</script>

<style scoped></style>
