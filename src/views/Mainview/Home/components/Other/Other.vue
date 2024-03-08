<template>
    <homeCommonComponents :homeCommonComponentsData="homeCommonComponentsData"></homeCommonComponents>
</template>

<script lang="ts" setup>
    import homeCommonComponents from '../homeCommonComponents.vue'
    let homeCommonComponentsData = {
        title: '其他',
        name: 'Other',
        sourceList: [{ name: '北京气象台', component: 'BMS' }]
    }
</script>
