<template>
    <p>卫星云图</p>
    <img :src="cloud.fileName" />
    <mdui-chip>发布时间{{ cloud.datatime }}</mdui-chip>

    <p>雷达图</p>
    <img :src="radar.img" />
    <mdui-chip>发布时间{{ radar.datetime }}</mdui-chip>

    <p>天气预报</p>
    <video :src="video.src" controls></video>
    <mdui-chip>发布时间{{ video.datetime }}</mdui-chip>
</template>

<script lang="ts" setup>
    import axios from 'axios'

    let cloudRes: any = (await axios.get('http://62.234.62.126:8001/bms?id=5')).data
    let cloud = {
        fileName: 'http://101.200.145.109:8087/qxj/' + cloudRes.fileName,
        datatime: cloudRes.datatime
    }

    let radarRes: any = (await axios.get('http://62.234.62.126:8001/bms?id=12')).data
    let radar = {
        img: 'http://101.200.145.109:8087/qxj/' + radarRes[0].fileName,
        datetime: radarRes[0].datetime
    }

    let videoRes: any = (await axios.get('http://62.234.62.126:8001/bms/video')).data.value
    let video = {
        src: 'http://101.200.145.109:8087/qxj/' + videoRes[0].videopath,
        datetime: videoRes[0].videodate
    }
</script>

<style scoped>
    img,
    video {
        max-width: 100%;
    }
</style>
