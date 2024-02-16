<template>
    <mdui-top-app-bar variant="large" scroll-behavior="shrink">
        <mdui-top-app-bar-title>
            京城气象
            <mdui-badge>Alpha</mdui-badge>
        </mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>

        <mdui-button-icon icon="refresh" onclick="location.reload()"></mdui-button-icon>
        <mdui-dropdown stay-open-on-click>
            <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
            <mdui-menu selects="multiple" :value="componentsSelectsList" @change="componentsSelectsList = $event.target.value">
                <span style="font-size: var(--mdui-typescale-label-large-size)">视图组件:</span>
                <mdui-menu-item value="Scene">实况</mdui-menu-item>
                <mdui-menu-item value="Forecast">预报</mdui-menu-item>
                <mdui-menu-item value="Warning">预警</mdui-menu-item>
                <mdui-menu-item value="Other">其他</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
    </mdui-top-app-bar>
    <mdui-linear-progress v-if="isLoading"></mdui-linear-progress>
    <Suspense><Scene v-if="isComponentShow('Scene')"></Scene></Suspense>

    <Suspense><Forecast v-if="isComponentShow('Forecast')"></Forecast></Suspense>
    <div style="height: 500px"></div>
</template>

<script lang="ts" setup>
    import { ref, onBeforeUnmount, onMounted } from 'vue'
    import Scene from './components/Scene/Scene.vue'
    import Forecast from './components/Forecast/Forecast.vue'

    import { useRouter } from 'vue-router'
    const router = useRouter()

    let isLoading = ref(true)
    onMounted(() => {
        isLoading.value = false
    })

    let componentsSelectsList = ref(JSON.parse(localStorage.getItem('componentsSelectsList') || '["Scene"]'))

    document.body.classList.add('body')
    // console.log(JSON.parse(localStorage.getItem('componentsSelectsList') || '["Scene"]'))
    function isComponentShow(item: any) {
        localStorage.setItem('componentsSelectsList', JSON.stringify(componentsSelectsList.value))
        return componentsSelectsList.value.find((el: string) => el == item)
    }
    onBeforeUnmount(() => {
        document.body.classList.remove('body')
    })
</script>

<style>
    .body {
        padding-top: 152px !important;
    }
    mdui-card {
        margin-top: 10px;
    }
</style>
