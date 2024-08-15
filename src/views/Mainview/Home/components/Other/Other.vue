<template>
    <homeCommonComponents :homeMainComponentsData="homeMainComponentsData"></homeCommonComponents>
</template>

<script lang="ts" setup>
    import homeCommonComponents from '../homeMainComponents.vue'
    let homeMainComponentsData = {
        title: '其他',
        name: 'Other',
        sourceList: [{ name: '北京气象台', component: 'BMS' }]
    }
</script>
