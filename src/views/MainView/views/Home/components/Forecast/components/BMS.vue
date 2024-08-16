<template>
    <mdui-collapse accordion>
        <mdui-collapse-item>
            <mdui-list-item slot="header">3小时预报</mdui-list-item>
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
            <mdui-chip>发布时间{{ threeHours.datetime }}</mdui-chip>
        </mdui-collapse-item>

        <mdui-collapse-item>
            <mdui-list-item slot="header">36小时预报</mdui-list-item>
            <div class="mdui-table">
                <table>
                    <thead>
                        <tr>
                            <th>时间</th>
                            <th>天气</th>
                            <th>气温</th>
                            <th>风力</th>
                            <th>风向</th>
                            <th>相对湿度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in thirtysixHours" :key="item.lv">
                            <td>{{ item.date }}</td>
                            <td>{{ item.weather }}</td>
                            <td>{{ item.plain_temp }}</td>
                            <td>{{ item.windspeed }}</td>
                            <td>{{ item.wind }}</td>
                            <td>{{ item.other }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <mdui-chip>发布时间{{ thirtysixHoursDateTime }}</mdui-chip>
        </mdui-collapse-item>

        <mdui-collapse-item>
            <mdui-list-item slot="header">7天预报</mdui-list-item>
            <div class="mdui-table">
                <table>
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>时段</th>
                            <th>天气</th>
                            <th>气温</th>
                            <th>风力</th>
                            <th>风向</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in sevenDaysRes" :key="item.lv">
                            <td>{{ item.time }}</td>
                            <td>{{ item.Nighttime }}</td>
                            <td>{{ item.condition }}</td>
                            <td>{{ item.temperature }}</td>
                            <td>{{ item.windscale }}</td>
                            <td>{{ item.winddirection }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </mdui-collapse-item>
    </mdui-collapse>
</template>

<script lang="ts" setup>
    import axios from 'axios'

    const forecastRes = (await axios.get('http://62.234.62.126:8001/bms?id=11')).data
    //3小时
    let threeHours = JSON.parse(forecastRes.ThreeHours)
    //36小时
    let temp = JSON.parse(forecastRes.thirtysix)
    let thirtysixHoursDateTime = temp.datetime
    let thirtysixHours: any = {}
    for (let item in temp.value) {
        thirtysixHours[temp.value[item].lv] = temp.value[item]
    }
    //7d
    const sevenDaysRes = (await axios.get('http://62.234.62.126:8001/bms?id=10')).data
    for (let item in sevenDaysRes) {
        if (sevenDaysRes[item].Nighttime == '夜间') {
            sevenDaysRes[item].time = ''
        }
    }
    console.log('7d:', sevenDaysRes)
</script>

<style scoped>
    .mdui-table {
        width: unset;
        margin: 5px 0 5px 0 !important;
    }
    table {
        white-space: nowrap;
    }
</style>
