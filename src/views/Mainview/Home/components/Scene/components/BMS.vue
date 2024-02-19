<template>
    <mdui-select :value="distrect" @change=";(distrect = $event.target.value), getDistrectInfo()" style="max-height: 50px">
        <mdui-menu-item :value="item.name" v-for="(item, index) in distrectSceneRes.value">{{ item.name }}</mdui-menu-item>
    </mdui-select>
    <div style="margin: 20px 20px 10px 20px">
        <img v-show="current.weather" :src="current.weatherIcon" style="float: right; width: 70px" />
        <strong style="font-size: var(--mdui-typescale-display-large-size)">{{ current.temperature }}</strong>
        <strong style="font-size: var(--mdui-typescale-headspanne-small-size)">℃ </strong>
        <strong v-show="current.weather">{{ current.weather }}</strong>
    </div>
    <mdui-divider></mdui-divider>
    <div class="subitem">
        <img src="/env-icon/jiangyuliang.svg" />
        <div>
            降水量:{{ current.jiangshuiliang }}mm
            <mdui-linear-progress :value="current.jiangshuiliang" max="250"></mdui-linear-progress>
        </div>
    </div>
    <div class="subitem">
        <img src="/env-icon/fengsu.svg" />
        <div>
            风速:{{ current.windspeed }}m/s • 风向:{{ current.winddirection }}°
            <mdui-linear-progress :value="current.windspeed" max="24.5"></mdui-linear-progress>
        </div>
    </div>
    <div class="subitem">
        <img src="/env-icon/yali.svg" />
        <div>
            气压:{{ current.airpressure }}hPa
            <mdui-linear-progress :value="current.airpressure - 950" max="100"></mdui-linear-progress>
        </div>
    </div>
    <div class="subitem">
        <img src="/env-icon/kongqishidu.svg" />
        <div>
            相对湿度:{{ current.humidity }}%
            <mdui-linear-progress :value="current.humidity" max="100"></mdui-linear-progress>
        </div>
    </div>
    <br />
    <mdui-chip>发布时间 {{ current.datetime }}</mdui-chip>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import axios from 'axios'
    //分区实况
    const distrectSceneRes = (await axios.get('http://62.234.62.126:8001/bms?id=8')).data
    const forecastRes = (await axios.get('http://62.234.62.126:8001/bms?id=11')).data
    let current: any = {}
    let distrect = ref('市中心')

    let weatherIconList = [
        { name: '晴', path: 'qingtian' },
        { name: '多云', path: 'duoyun' },
        { name: '阴', path: 'yintian' },
        { name: '台风', path: 'taifeng' },
        { name: '雾', path: 'wu' },
        { name: '小雪', path: 'xiaoxue' },
        { name: '中雪', path: 'zhongxue' },
        { name: '大雪', path: 'daxue' },
        { name: '暴雪', path: 'baoxue' },
        { name: '阵雪', path: 'zhongxue' },
        { name: '霾', path: 'wumai' },
        { name: '小雨', path: 'xiaoyu' },
        { name: '中雨', path: 'zhongyu' },
        { name: '大雨', path: 'dayu' },
        { name: '暴雨', path: 'baoyu' },
        { name: '特大暴雨', path: 'baoyu' },
        { name: '阵雨', path: 'zhongyu' },
        { name: '雷雨', path: 'leibao' },
        { name: '雷阵雨', path: 'leizhenyu' },
        { name: '雨夹雪', path: 'yujiaxue' }
    ]
    function getWeatherIcon(item: string) {
        let temp = weatherIconList.find(el => el.name == item)
        return temp == undefined ? false : temp.path
    }

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
            console.log(currentRes.jiangshuiliang)
            current.isRainning = true
        }
        if (currentRes.name == '市中心') {
            current.weather = JSON.parse(forecastRes.Scene).value.name
            let iconPath = getWeatherIcon(current.weather)
            if (iconPath != false) {
                current.weatherIcon = new URL('/weather-icon/' + iconPath + '.svg', import.meta.url).href
            }
        }
    }
</script>

<style scoped>
    mdui-select::part(menu) {
        overflow: auto;
        max-height: 300px;
    }
    .subitem {
        margin-top: 20px;
        img {
            width: 40px;
            position: absolute;
        }
        div {
            margin-left: 50px;
        }
    }
</style>
