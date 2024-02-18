<template>
    <h2>3小时预报</h2>
    <mdui-chip>发布时间{{ threeHours.datetime }}</mdui-chip>

    <div class="mdui-table">
        <table>
            <thead>
                <tr>
                    <th>时间</th>
                    <th>天气</th>
                    <th>气温</th>
                    <th>风力</th>
                    <th>风向</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in threeHours.value" :key="item.hour">
                    <td>{{ index }}</td>
                    <td>{{ item.wp }}</td>
                    <td>{{ item.t }}℃</td>
                    <td>{{ item.wspeed }}</td>
                    <td>{{ item.wdir }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import axios from 'axios'
    const forecastRes = (await axios.get('http://62.234.62.126:8001/bms?id=11')).data

    //3小时
    let threeHours = JSON.parse(forecastRes.ThreeHours)
    console.log(threeHours)
    //36小时
    let temp = JSON.parse(forecastRes.thirtysix)
    let thirtysixHoursDateTime = temp.datetime
    let thirtysixHours: any = {}
    for (let item in temp.value) {
        thirtysixHours[temp.value[item].lv] = temp.value[item]
    }
    console.log(thirtysixHours)
    //7d
    const sevenDaysRes = await axios.get('http://101.200.145.109:8087/weather/scene/data.do?callback=&id=10')
    let sevenDaysData = JSON.parse(sevenDaysRes.data.substr(1, sevenDaysRes.data.length - 2))
    for (let item in sevenDaysData) {
        if (sevenDaysData[item].Nighttime == '夜晚') {
            sevenDaysData[item].time = ''
        }
    }
    console.log('7d:', sevenDaysData)
</script>

<style scoped></style>
