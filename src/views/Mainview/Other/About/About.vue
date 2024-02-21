<template>
    <mdui-top-app-bar variant="large" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="arrow_back" onclick="window.history.back()"></mdui-button-icon>
        <mdui-top-app-bar-title> 关于 </mdui-top-app-bar-title>
    </mdui-top-app-bar>

    <mdui-list>
        <mdui-list-item>
            版本名称
            <span slot="description">{{ appInfo.version.name }}</span>
        </mdui-list-item>
        <mdui-list-item>
            版本号
            <span slot="description">{{ appInfo.version.code }}</span>
        </mdui-list-item>
        <mdui-list-item>
            构建时间
            <span slot="description">{{ appInfo.buildTime }}</span>
        </mdui-list-item>
        <mdui-divider></mdui-divider>
        <mdui-list-item onclick="window.location.href='https://github.com/MiaoLuoNa/beijing-weather-v2'">
            项目地址
            <span slot="description">https://github.com/MiaoLuoNa/beijing-weather-v2</span>
        </mdui-list-item>
    </mdui-list>
</template>

<script lang="ts" setup>
    let appInfo = JSON.parse(localStorage.getItem('appInfo'))
</script>

<style scoped></style>
