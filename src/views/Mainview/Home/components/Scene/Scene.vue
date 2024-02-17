<template>
    <mdui-card style="position: relative; overflow: hidden; width: 100%">
        <mdui-top-app-bar ref="appBar">
            <mdui-top-app-bar-title>实况</mdui-top-app-bar-title>
            <div style="flex-grow: 1"></div>
            <mdui-dropdown stay-open-on-click>
                <mdui-button-icon icon="filter_list" slot="trigger"></mdui-button-icon>
                <mdui-menu selects="multiple" :value="sourceSelectsList" @change="sourceSelectsList = $event.target.value">
                    <span style="font-size: var(--mdui-typescale-label-large-size)">数据源:</span>
                    <mdui-menu-item value="0">北京气象台</mdui-menu-item>
                    <mdui-menu-item value="1">中央气象台</mdui-menu-item>
                    <mdui-menu-item value="2">中国气象局</mdui-menu-item>
                </mdui-menu>
            </mdui-dropdown>
        </mdui-top-app-bar>

        <div ref="content">
            <mdui-tabs>
                <mdui-tab value="tab-1" v-if="issourceShow('0')">北京气象台</mdui-tab>
                <mdui-tab value="tab-2" v-if="issourceShow('1')">中央气象台</mdui-tab>
                <mdui-tab value="tab-3" v-if="issourceShow('2')">中国气象局</mdui-tab>
                <mdui-tab-panel slot="panel" value="tab-1">
                    <BMS></BMS>
                </mdui-tab-panel>
                <mdui-tab-panel slot="panel" value="tab-2">
                    <NMC></NMC>
                </mdui-tab-panel>
                <mdui-tab-panel slot="panel" value="tab-3">Panel 3</mdui-tab-panel>
            </mdui-tabs>
        </div>
    </mdui-card>
</template>

<script lang="ts" setup>
    import { nextTick, getCurrentInstance } from 'vue'
    import { ref, onMounted } from 'vue'
    import BMS from './components/BMS.vue'
    import NMC from './components/NMC.vue'
    defineOptions({ name: 'Scene' })

    const instance = getCurrentInstance()

    let content = ref()
    let appBar = ref()
    onMounted(() => {
        appBar.value.scrollTarget = content.value
        appBar.value.style.position = 'absolute'
        ;(content.value.querySelector('mdui-tab')! as HTMLElement).click()
    })

    let sourceSelectsList = ref(JSON.parse(localStorage.getItem(instance!.type.name + '_sourceSelectsList') || '["0"]'))
    function issourceShow(item?: any) {
        nextTick(() => {
            try {
                ;(content.value.querySelector('mdui-tab')! as HTMLElement).click()
            } catch (error) {}
        })
        console.log(sourceSelectsList.value.find((el: string) => el == item))
        localStorage.setItem(instance!.type.name + '_sourceSelectsList', JSON.stringify(sourceSelectsList.value))
        return sourceSelectsList.value.find((el: string) => el == item)
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
        white-space: nowrap;
    }
</style>
