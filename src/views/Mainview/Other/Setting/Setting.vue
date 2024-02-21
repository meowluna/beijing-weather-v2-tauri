<template>
    <mdui-top-app-bar variant="large" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="arrow_back" onclick="window.history.back()"></mdui-button-icon>
        <mdui-top-app-bar-title> 设置 </mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <mdui-list>
        <mdui-list-subheader>显示</mdui-list-subheader>
        <mdui-list-item nonclickable>
            自动夜间模式
            <span slot="description">*跟随时间设定</span>
            <mdui-switch checked-icon="" slot="end-icon" :checked="isAutoDarkMode" @change="isAutoDarkMode = $event.target.checked"></mdui-switch>
        </mdui-list-item>
    </mdui-list>
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue'
    import emitter from '@/utils/emitter'

    let isAutoDarkMode = ref(JSON.parse(localStorage.getItem('Settings_autoDarkMode') || 'false'))
    watch(
        isAutoDarkMode,
        value => {
            if (value) {
                emitter.emit('toggleDarkMode')
                localStorage.setItem('Settings_autoDarkMode', 'true')
            } else {
                document.getElementsByTagName('html')[0].classList.remove('mdui-theme-dark')
                localStorage.setItem('Settings_autoDarkMode', 'false')
            }
        },
        { immediate: true }
    )
</script>

<style scoped></style>
