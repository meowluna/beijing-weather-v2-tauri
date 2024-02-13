<template>
    <mdui-card>
        北京气象台
        <mdui-tabs value="tab-1">
            <mdui-tab value="tab-1">实况</mdui-tab>
            <mdui-tab value="tab-2">Tab 2</mdui-tab>
            <mdui-tab value="tab-3">Tab 3</mdui-tab>

            <mdui-tab-panel slot="panel" value="tab-1">
                <Scene></Scene>
            </mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="tab-2">Panel 2</mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="tab-3">Panel 3</mdui-tab-panel>
        </mdui-tabs>
    </mdui-card>
</template>

<script lang="ts" setup>
    import axios, { AxiosError } from 'axios'
    import { ref } from 'vue'
    import Scene from './components/Scene.vue'

    //
</script>

<style scoped>
    mdui-card {
        width: 100%;
    }
</style>
