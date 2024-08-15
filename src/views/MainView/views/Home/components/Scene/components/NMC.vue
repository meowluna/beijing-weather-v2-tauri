<template>
    <mdui-chip>发布时间{{ current.publish_time }}</mdui-chip>
    <ul>
        <li>天气：{{ current.weather.info }}</li>
        <li>气温：{{ current.weather.temperature }}℃</li>
        <li>风力：{{ current.wind.power }}</li>
        <li>风速：{{ current.wind.speed }}m/s</li>
        <li>风向：{{ current.wind.direct }} {{ current.wind.degree }}°</li>
        <li>气压：{{ current.weather.airpressure }}hPa</li>
        <li>相对湿度：{{ current.weather.humidity }}%</li>
        <li>AQI：{{ currentAQI.aqi }} {{ currentAQI.text }}</li>
    </ul>
</template>

<script lang="ts" setup>
    import axios from 'axios'
    const forecastRes = (await axios.get('http://62.234.62.126:8001/nmc?stationid=54511')).data.data
    let current = forecastRes.real
    let currentAQI = forecastRes.air
</script>

<style scoped></style>
