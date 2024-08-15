<template>
    <mdui-card style="position: relative; overflow: hidden">
        <mdui-top-app-bar ref="appBar" scroll-target=".content">
            <mdui-top-app-bar-title>{{ homeComponentTitle }}</mdui-top-app-bar-title>
            <div style="flex-grow: 1"></div>
            <mdui-dropdown stay-open-on-click>
                <mdui-button-icon icon="filter_list" slot="trigger"></mdui-button-icon>
                <mdui-menu selects="multiple" :value="sourceSelectsList" @change="sourceSelectsList = $event.target.value">
                    <span style="font-size: var(--mdui-typescale-label-large-size)">数据源:</span>
                    <mdui-menu-item v-for="(item, index) in sourceList" :key="index" :value="index.toString()">{{ item.name }}</mdui-menu-item>
                </mdui-menu>
            </mdui-dropdown>
        </mdui-top-app-bar>

        <div ref="content" class="content">
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
    import { ref, onMounted, defineAsyncComponent, nextTick } from 'vue'

    let props: any = defineProps(['homeMainComponentsData'])
    props = props.homeMainComponentsData
    let sourceList: any = []
    let homeComponentTitle = props.title
    for (let index = 0; index < props.sourceList.length; index++) {
        const el = props.sourceList[index]
        const comp = defineAsyncComponent(() => import(`./${props.name}/components/${el.component}.vue`))
        sourceList[index] = { name: el.name, component: comp }
    }

    let content = ref()
    let appBar = ref()
    onMounted(() => {
        try {
            ;(content.value.querySelector('mdui-tab')! as HTMLElement).click()
        } catch (error) {}
    })

    let sourceSelectsList = ref(JSON.parse(localStorage.getItem(props.name + '_sourceSelectsList') || '["0"]'))
    function isSourceShow(item?: string) {
        nextTick(() => {
            try {
                ;(content.value.querySelector('mdui-tab')! as HTMLElement).click()
            } catch (error) {}
        })
        localStorage.setItem(props.name + '_sourceSelectsList', JSON.stringify(sourceSelectsList.value))
        return sourceSelectsList.value.find((el: string) => el == item) != undefined ? true : false
    }
</script>

<style src="/src/assets/css/homePage.css" scoped></style>
