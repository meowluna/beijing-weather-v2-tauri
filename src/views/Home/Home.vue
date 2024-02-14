<template>
    <mdui-top-app-bar variant="center-aligned">
        <mdui-button-icon icon="refresh" onclick="location.reload()"></mdui-button-icon>
        <mdui-top-app-bar-title>京城气象</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
        <mdui-dropdown stay-open-on-click>
            <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
            <mdui-menu selects="multiple" :value="componentsSelectsList" @change="componentsSelectsList = $event.target.value">
                视图组件:
                <mdui-menu-item value="Scene">实况</mdui-menu-item>
                <mdui-menu-item value="Forcast">预报</mdui-menu-item>
                <mdui-menu-item value="Warning">预警</mdui-menu-item>
                <mdui-menu-item value="Other">其他</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
    </mdui-top-app-bar>

    <!-- <MainView :componentsSelectsList="componentsSelectsList"></MainView> -->
    <Suspense><Scene v-if="isComponentShow('Scene')"></Scene></Suspense>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import Scene from './components/Scene/Scene.vue'

    let componentsSelectsList = ref(JSON.parse(localStorage.getItem('componentsSelectsList') || '["Scene"]'))

    // console.log(JSON.parse(localStorage.getItem('componentsSelectsList') || '["Scene"]'))
    function isComponentShow(item: any) {
        localStorage.setItem('componentsSelectsList', JSON.stringify(componentsSelectsList.value))
        return componentsSelectsList.value.find((el: string) => el == item)
    }
</script>

<style scoped></style>
