<template>
    <mdui-chip>发布时间{{ current.datetime }}</mdui-chip>
    <mdui-select :value="distrect" @change=";(distrect = $event.target.value), getDistrectInfo()" style="max-height: 50px">
        <mdui-menu-item :value="item.name" v-for="(item, index) in distrectSceneRes.value">{{ item.name }}</mdui-menu-item>
    </mdui-select>
    <ul>
        <li v-show="current.weather">天气：{{ current.weather }}</li>
        <li v-show="current.isRainning">降水量：{{ current.jiangshuiliang }}mm</li>
        <li>气温：{{ current.temperature }}℃</li>
        <li>风速：{{ current.windspeed }}m/s</li>
        <li>风向：{{ current.winddirection }}</li>
        <li>气压：{{ current.airpressure }}hPa</li>
        <li>相对湿度：{{ current.humidity }}%</li>
    </ul>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import axios from 'axios'
    //分区实况
    const distrectSceneRes = (await axios.get('http://62.234.62.126:8001/bms?id=8')).data
    const forecastRes = (await axios.get('http://62.234.62.126:8001/bms?id=11')).data
    let current: any = {}
    let distrect = ref('市中心')
    getDistrectInfo()
    function getDistrectInfo() {
        //api有间歇缺数据问题，需catch error

        let currentRes = distrectSceneRes.value[distrect.value]
        if (currentRes == null) {
            console.error('分区数据部分缺失', currentRes)
            return
        }
        current = {
            datetime: distrectSceneRes.datetime,
            temperature: currentRes.wendu,
            windspeed: currentRes.fengl,
            winddirection: currentRes.fengx,
            airpressure: currentRes.qiya,
            humidity: currentRes.shidu,
            jiangshuiliang: currentRes.jiangshuiliang
        }
        if (currentRes.jiangshuiliang != '0.0') {
            current.isRainning = true
        }
        if (currentRes.name == '市中心') {
            current.weather = JSON.parse(forecastRes.Scene).value.name
        }
    }
</script>

<style scoped>
    mdui-select::part(menu) {
        overflow: auto;
        max-height: 300px;
    }
</style>
