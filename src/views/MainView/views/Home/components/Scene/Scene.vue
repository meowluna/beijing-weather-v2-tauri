<template>
    <homeCommonComponents :homeMainComponentsData="homeMainComponentsData"></homeCommonComponents>
</template>

<script lang="ts" setup>
    import homeCommonComponents from '../homeMainComponents.vue'
    let homeMainComponentsData = {
        title: '实况',
        name: 'Scene',
        sourceList: [{ name: '北京气象台', component: 'BMS' }]
    }
</script>
