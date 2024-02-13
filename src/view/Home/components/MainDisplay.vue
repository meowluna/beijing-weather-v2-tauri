<template>
    <suspense> <BMS v-if="isScoreShow('bms')"></BMS></suspense>
    <suspense> <NMC v-if="isScoreShow('nmc')"></NMC></suspense>
    <suspense> <CMA v-if="isScoreShow('cma')"></CMA></suspense>
    <suspense><CMDC v-if="isScoreShow('cmdc')"></CMDC></suspense>
    <suspense><BM v-if="isScoreShow('bm')"></BM></suspense>
    <suspense><WeatherOL v-if="isScoreShow('weatherol')"></WeatherOL></suspense>
    <suspense><warning12379 v-if="isScoreShow('12379')"></warning12379></suspense>
</template>

<script lang="ts" setup>
    import BMS from './components/BMS/BMS.vue'
    import NMC from './components/NMC.vue'
    import CMA from './components/CMA.vue'
    import CMDC from './components/CMDC.vue'
    import BM from './components/BM.vue'
    import WeatherOL from './components/WeatherOL.vue'
    import warning12379 from './components/12379.vue'

    let props = defineProps(['scoreSelectsList'])
    // console.log(props.scoreSelectsList)
    function isScoreShow(item: any) {
        localStorage.setItem('scoreSelectsList', JSON.stringify(props.scoreSelectsList))
        return props.scoreSelectsList.find((el: string) => el == item)
    }
</script>

<style scoped></style>
