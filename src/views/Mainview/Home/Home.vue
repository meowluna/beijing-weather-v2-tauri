<template>
    <mdui-top-app-bar variant="large" scroll-behavior="shrink elevate">
        <mdui-top-app-bar-title>
            京城气象
            <mdui-badge>Beta</mdui-badge>
        </mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>

        <mdui-button-icon icon="refresh" onclick="location.reload()"></mdui-button-icon>
        <mdui-dropdown stay-open-on-click>
            <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
            <mdui-menu selects="multiple" :value="componentsSelectsList" @change="componentsSelectsList = $event.target.value">
                <span style="font-size: var(--mdui-typescale-label-large-size)">视图组件:</span>

                <mdui-menu-item v-for="(item, index) in componentsList" :key="index" :value="index.toString()">{{ item.name }}</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
    </mdui-top-app-bar>
    <mdui-linear-progress v-if="isLoading"></mdui-linear-progress>
    <template v-for="(item, index) in componentsList" :key="index">
        <Suspense><component :is="item.component" v-if="isComponentShow(index.toString())"></component></Suspense>
    </template>
</template>

<script lang="ts" setup>
    import { ref, onBeforeUnmount, onMounted, nextTick } from 'vue'
    import Scene from './components/Scene/Scene.vue'
    import Forecast from './components/Forecast/Forecast.vue'
    import Warning from './components/Warning/Warning.vue'
    import Other from './components/Other/Other.vue'

    import { useRouter } from 'vue-router'
    const router = useRouter()
    defineOptions({ name: 'Home' })

    let isLoading = ref(true)
    onMounted(() => {
        nextTick(() => {
            isLoading.value = false
        })
    })

    let componentsList = [
        { name: '实况', component: Scene },
        { name: '预报', component: Forecast },
        { name: '预警', component: Warning },
        { name: '其他', component: Other }
    ]
    let componentsSelectsList = ref(JSON.parse(localStorage.getItem('componentsSelectsList') || '["0"]'))

    document.body.classList.add('body')
    function isComponentShow(item: string) {
        localStorage.setItem('componentsSelectsList', JSON.stringify(componentsSelectsList.value))
        return componentsSelectsList.value.find((el: string) => el == item) != undefined ? true : false
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
        width: 96%;
        margin: 0 2% 2% 2%;
    }
    mdui-tab-panel {
        width: 96%;
        margin: 1% 2% 2% 2%;
    }
</style>
