<template>
    <homeCommonComponents :homeCommonComponentsData="homeCommonComponentsData"></homeCommonComponents>
</template>

<script lang="ts" setup>
    import homeCommonComponents from '../homeCommonComponents.vue'
    let homeCommonComponentsData = {
        title: '实况',
        name: 'Scene',
        sourceList: [{ name: '北京气象台', component: 'BMS' }]
    }
</script>
