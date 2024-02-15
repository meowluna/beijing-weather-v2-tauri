<template>
    <mdui-card style="position: relative; overflow: hidden; width: 100%">
        <mdui-top-app-bar scroll-target=".content">
            <mdui-top-app-bar-title>实况</mdui-top-app-bar-title>
            <div style="flex-grow: 1"></div>
            <mdui-dropdown stay-open-on-click>
                <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
                <mdui-menu selects="multiple" :value="scoreSelectsList" @change="scoreSelectsList = $event.target.value">
                    数据源:
                    <mdui-menu-item value="BMS">北京气象台</mdui-menu-item>
                    <mdui-menu-item value="Forcast">预报</mdui-menu-item>
                    <mdui-menu-item value="Warning">预警</mdui-menu-item>
                    <mdui-menu-item value="Other">其他</mdui-menu-item>
                </mdui-menu>
            </mdui-dropdown>
        </mdui-top-app-bar>

        <div class="content">
            <mdui-tabs>
                <mdui-tab value="tab-1" v-if="isScoreShow('BMS')">北京气象台</mdui-tab>
                <mdui-tab value="tab-2">Tab 2</mdui-tab>
                <mdui-tab value="tab-3">Tab 3</mdui-tab>
                <mdui-tab-panel slot="panel" value="tab-1">
                    <BMS></BMS>
                </mdui-tab-panel>
                <mdui-tab-panel slot="panel" value="tab-2">Panel 2</mdui-tab-panel>
                <mdui-tab-panel slot="panel" value="tab-3">Panel 3</mdui-tab-panel>
            </mdui-tabs>
        </div>
    </mdui-card>
</template>

<script lang="ts" setup>
    import { nextTick } from 'vue'
    import { ref, onMounted } from 'vue'
    import BMS from './components/BMS.vue'
    let scoreSelectsList = ref(JSON.parse(localStorage.getItem('scoreSelectsList') || '["BMS"]'))

    onMounted(() => {
        ;(document.querySelector('mdui-tab')! as HTMLElement).click()
    })
    function isScoreShow(item?: any) {
        nextTick(() => {
            try {
                ;(document.querySelector('mdui-tab')! as HTMLElement).click()
            } catch (error) {}
        })
        // console.log(scoreSelectsList.value.find((el: string) => el == item))
        localStorage.setItem('scoreSelectsList', JSON.stringify(scoreSelectsList.value))
        return scoreSelectsList.value.find((el: string) => el == item)
    }
</script>

<style scoped>
    mdui-top-app-bar {
        z-index: 1999;
        background-color: rgb(var(--mdui-color-surface-container-low)) !important;
    }
    mdui-tabs::part(container) {
        background-color: rgb(var(--mdui-color-surface-container-low)) !important;
        margin-bottom: 10px;
    }
</style>
