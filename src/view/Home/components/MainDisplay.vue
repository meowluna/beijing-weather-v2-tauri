<template>
    <BMS v-show="isScoreShow('bms')"></BMS>
    <NMC v-show="isScoreShow('nmc')"></NMC>
    <CMA v-show="isScoreShow('cma')"></CMA>
    <CMDC v-show="isScoreShow('cmdc')"></CMDC>
    <BM v-show="isScoreShow('bm')"></BM>
    <WeatherOL v-show="isScoreShow('weatherol')"></WeatherOL>
    <warning12379 v-show="isScoreShow('12379')"></warning12379>
</template>

<script lang="ts" setup>
    import BMS from './components/BMS.vue'
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
