<template>
    <mdui-top-app-bar>
        <mdui-button-icon icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>京城气象</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
        <mdui-dropdown stay-open-on-click>
            <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
            <mdui-menu selects="multiple" class="scoreSelects" :value="sel" @change="sel = $event.target.value">
                可视数据源
                <mdui-menu-item value="bms">北京气象台</mdui-menu-item>
                <mdui-menu-item value="item-2">Item 2</mdui-menu-item>
            </mdui-menu>
        </mdui-dropdown>
    </mdui-top-app-bar>

    <BMS v-show="isScoreShow('bms')"></BMS>
</template>

<script lang="ts" setup>
    import BMS from './components/BMS.vue'
    import { ref } from 'vue'

    let sel: any = ref([])
    function isScoreShow(item: any) {
        if (sel.value.find((el: any) => el == item)) {
            return true
        }
    }
</script>

<style scoped></style>
