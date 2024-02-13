<template>
    <mdui-top-app-bar>
        <mdui-button-icon icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>京城气象</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
        <mdui-dropdown stay-open-on-click>
            <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
            <mdui-menu selects="multiple" class="scoreSelects" :value="scoreSelectsList" @change="scoreSelectsList = $event.target.value">
                可视数据源
                <mdui-menu-item value="bms">北京气象台</mdui-menu-item>
                <mdui-menu-item value="nmc">中央气象台</mdui-menu-item>
                <mdui-menu-item value="cma">中国气象局</mdui-menu-item>
                <mdui-menu-item value="cmdc">国家气象信息中心</mdui-menu-item>
                <mdui-menu-item value="bm">北京气象</mdui-menu-item>
                <mdui-menu-item value="weatherol">北京气象在线</mdui-menu-item>
                <mdui-menu-item value="12379">国家预警信息发布中心</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
    </mdui-top-app-bar>

    <MainDisplay :scoreSelectsList="scoreSelectsList"></MainDisplay>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import MainDisplay from './components/MainDisplay.vue'

    let scoreSelectsList: any = ref(JSON.parse(localStorage.getItem('scoreSelectsList') || '["bms"]'))
    // console.log('@@@', scoreSelectsList)
    // let scoreSelectsList: any = ref(['111'])
</script>

<style scoped></style>
