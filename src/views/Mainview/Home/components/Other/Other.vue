<template>
    <mdui-card style="position: relative; overflow: hidden">
        <mdui-top-app-bar ref="appBar">
            <mdui-top-app-bar-title>其他</mdui-top-app-bar-title>
            <div style="flex-grow: 1"></div>
            <mdui-dropdown stay-open-on-click>
                <mdui-button-icon icon="filter_list" slot="trigger"></mdui-button-icon>
                <mdui-menu selects="multiple" :value="sourceSelectsList" @change="sourceSelectsList = $event.target.value">
                    <span style="font-size: var(--mdui-typescale-label-large-size)">数据源:</span>
                    <mdui-menu-item v-for="(item, index) in sourceList" :key="index" :value="index.toString()">{{ item.name }}</mdui-menu-item>
                </mdui-menu>
            </mdui-dropdown>
        </mdui-top-app-bar>

        <div ref="content">
            <mdui-tabs>
                <template v-for="(item, index) in sourceList">
                    <mdui-tab :key="index" :value="index.toString()" v-if="isSourceShow(index.toString())">{{ item.name }}</mdui-tab>
                </template>
                <mdui-tab-panel slot="panel" v-for="(item, index) in sourceList" :key="index" :value="index.toString()">
                    <component :is="item.component" />
                </mdui-tab-panel>
            </mdui-tabs>
        </div>
    </mdui-card>
</template>

<script lang="ts" setup>
    import { nextTick, getCurrentInstance } from 'vue'
    import { ref, onMounted } from 'vue'
    defineOptions({ name: 'Forecast' })

    const instance = getCurrentInstance()

    let content = ref()
    let appBar = ref()
    onMounted(() => {
        appBar.value.scrollTarget = content.value
        appBar.value.style.position = 'absolute'
        try {
            ;(content.value.querySelector('mdui-tab')! as HTMLElement).click()
        } catch (error) {}
    })
    import BMS from './components/BMS.vue'
    // import NMC from './components/NMC.vue'
    let sourceList = [
        { name: '北京气象台', component: BMS }
        // { name: '中央气象台',component: NMC}
    ]
    let sourceSelectsList = ref(JSON.parse(localStorage.getItem(instance!.type.name + '_sourceSelectsList') || '["0"]'))
    function isSourceShow(item?: string) {
        nextTick(() => {
            try {
                ;(content.value.querySelector('mdui-tab')! as HTMLElement).click()
            } catch (error) {}
        })
        // console.log(sourceSelectsList.value.find((el: string) => el == item))
        localStorage.setItem(instance!.type.name + '_sourceSelectsList', JSON.stringify(sourceSelectsList.value))
        return sourceSelectsList.value.find((el: string) => el == item) != undefined ? true : false
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
