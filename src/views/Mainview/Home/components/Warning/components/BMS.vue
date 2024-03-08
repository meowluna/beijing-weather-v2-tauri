<template>
    <mdui-list>
        <mdui-collapse accordion>
            <mdui-collapse-item v-for="(item, index) in warningData" :key="index">
                <mdui-list-item slot="header" icon="error_outline">{{ item.mainbody.signclass }}{{ item.mainbody.signrank }}预警</mdui-list-item>
                <br />{{ item.mainbody.pubtime }}<br />{{ item.mainbody.pubbody }}
            </mdui-collapse-item>
        </mdui-collapse>
    </mdui-list>
    <span v-if="noWarning">暂无预警信息</span>
</template>

<script lang="ts" setup>
    import axios from 'axios'
    const warningListRes = await axios.get('http://62.234.62.126:8001/bms/warning')
    console.log(warningListRes)
    let warningListTemp = warningListRes.data.value
    let isWarningExpired: any = []
    let warningList: any = []
    let warningData: any = []
    warningListTemp = warningListTemp.reverse()
    for (let item in warningListTemp) {
        if (warningListTemp[item].title.substr(3, 2) == '解除') {
            isWarningExpired[warningListTemp[item].title.substr(5, 2)] = true
        } else {
            isWarningExpired[warningListTemp[item].title.substr(5, 2)] = false
        }
    }
    warningListTemp = warningListTemp.reverse()
    for (let item in warningListTemp) {
        if (isWarningExpired[warningListTemp[item].title.substr(5, 2)] == false) {
            isWarningExpired[warningListTemp[item].title.substr(5, 2)] = 3
            warningList.push(warningListTemp[item])
        }
    }

    let noWarning: any
    if (warningList.length != 0) {
        let temp: any = []
        for (let item in warningList) {
            const warningRes = await axios.get('http://101.200.145.109:8087/weather/scene/warningbyid.do?callback=&doc=' + warningList[item].id)
            let warningTemp = JSON.parse(warningRes.data.substr(1, warningRes.data.length - 2))
            // let warningMainbodyTemp = JSON.parse(warningTemp.mainbody);
            // warningMainbodyTemp.title = warningMainbodyTemp.title.substr(5, warningMainbodyTemp.title.length - 1);
            warningTemp.mainbody = JSON.parse(warningTemp.mainbody)
            // console.log('////' + warningTemp.title.substr(5, 2) + '//' + isWarningExpired[warningTemp.title.substr(5, 2)])
            if (temp[warningTemp.mainbody.signclass] != true) {
                temp[warningTemp.mainbody.signclass] = true
                if (warningTemp.mainbody.signrank == '蓝色') {
                    warningTemp.signdegree = '#2196F3'
                } else if (warningTemp.mainbody.signrank == '黄色') {
                    warningTemp.signdegree = '#fdd835'
                } else if (warningTemp.mainbody.signrank == '橙色') {
                    warningTemp.signdegree = '#FF9800'
                } else if (warningTemp.mainbody.signrank == '红色') {
                    warningTemp.signdegree = '#F44336'
                }
                warningData.push(warningTemp)
                console.log(warningTemp)
            }
        }
    } else {
        noWarning = true
    }

    console.log(111)
</script>

<style scoped></style>
