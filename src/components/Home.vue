<template>
    <div class="page">
        <div class="top">
            <span class="title">夜未央</span>
            <div class="avatar"></div>
        </div>
        <div class="morning">
            <span class="gmornig">早上好</span>
            <span class="username">XXX</span>
        </div>
        <div class="middle">
            <div class="p1">
                <div class="p1text">
                    <div class="p1text1">您昨晚的入睡时间</div>
                    <div class="p1text2">北京时间</div>
                    <div class="timefallsleep">{{ sleepData.sleepTime }}</div>
                    <div class="p1text3">睡眠时长</div>
                    <div class="sleeptime">{{ sleepData.duration }}</div>
                </div>
                <div class="p1icon">
                    <img class="more" src="../../public/source/icon/more.png" alt="">
                </div>
            </div>

            <div class="p2">
                <div class="todolist">
                    <div class="todolisttitle">任务列表</div>
                    <ol class="todolistcontent">
                        <li>test1</li>
                        <li>test2</li>
                    </ol>
                </div>
                <div class="aiadvice"></div>
            </div>
        </div>
        <div class="card">
            <SwiperCarousel />
        </div>
    </div>
</template>

<script setup>
import SwiperCarousel from './SwiperCarousel.vue'
import { ref, onMounted } from 'vue'

// 定义响应式数据
const sleepData = ref({
    sleepTime: '00 : 00',
    wakeTime: '00 : 00',
    duration: '0h0min',
    score: 0,
    advice: '暂无建议'
})

const hasPermission = ref(false)
// 定义更新睡眠数据的方法，供Android调用
window.updateLatestSleepData = function (jsonData) {
    try {
        // 先尝试解析传入的数据，如果不成功再当作字符串处理
        let data;
        if (typeof jsonData === 'string') {
            data = JSON.parse(jsonData)
        } else {
            data = jsonData
        }

        sleepData.value = {
            sleepTime: data.sleepTime || data.fallAsleepTime || '--:--',
            wakeTime: data.wakeTime || '--:--',
            duration: data.duration || data.durationFormatted || '暂无数据',
            score: data.score !== undefined && data.score !== null ? parseFloat(data.score) : 0,
            advice: data.advice || '暂无建议'
        }
        console.log('更新睡眠数据:', sleepData.value)
    } catch (error) {
        console.error('解析睡眠数据失败:', error)
        // 如果解析失败，尝试作为原始字符串处理
        try {
            const cleanJson = jsonData.replace(/\\/g, '')
            const data = JSON.parse(cleanJson)
            sleepData.value = {
                sleepTime: data.sleepTime || data.fallAsleepTime || '--:--',
                wakeTime: data.wakeTime || '--:--',
                duration: data.duration || data.durationFormatted || '暂无数据',
                score: data.score !== undefined && data.score !== null ? parseFloat(data.score) : 0,
                advice: data.advice || '暂无建议'
            }
        } catch (secondError) {
            console.error('二次解析也失败:', secondError)
        }
    }
}

// 获取睡眠历史数据
const loadSleepHistory = () => {
    try {
        if (typeof Android !== 'undefined' && Android.getSleepHistory) {
            const historyJson = Android.getSleepHistory()
            const history = JSON.parse(historyJson)
            console.log('睡眠历史数据:', history)
            // 可以在这里处理历史数据
        }
    } catch (error) {
        console.error('获取睡眠历史数据失败:', error)
    }
}
// 请求最新数据
const requestData = () => {
    if (typeof Android !== 'undefined' && Android.requestLatestSleepDataFromJs) {
        Android.requestLatestSleepDataFromJs()
    } else {
        // 模拟测试数据
        window.updateLatestSleepData({
            sleepTime: "01:30",
            wakeTime: "08:30",
            duration: "7小时0分钟",
            score: 85.50,
            advice: "睡眠质量很好，继续保持！"
        })
    }
}
// 请求权限
const requestPermission = () => {
    if (typeof Android !== 'undefined' && Android.requestPermissionFromJs) {
        Android.requestPermissionFromJs()
    }
}

// 检查权限
const checkPermission = () => {
    if (typeof Android !== 'undefined' && Android.hasUsageStatsPermissionFromJs) {
        hasPermission.value = Android.hasUsageStatsPermissionFromJs()
    }
}
// 组件挂载时加载数据
onMounted(() => {
    checkPermission()
    loadSleepHistory()

    // 检查是否在Android WebView环境中
    if (typeof Android !== 'undefined' && Android.requestLatestSleepDataFromJs) {
        // 请求最新的睡眠数据
        Android.requestLatestSleepDataFromJs()
    } else {
        // 如果不在Android环境中，使用模拟数据
        setTimeout(() => {
            requestData()
        }, 1000)
    }
})
</script>


<style scoped>
.body {
    line-height: 1 !important;
    padding: 0 !important;
}

.page {
    padding: 0;
    text-align: center;
    line-height: 1.3;
}

.top {
    height: 15vh;
    /* background-color: pink; */
}

.title {
    font-size: 1.72vh;
    color: #000000;
    float: left;
    padding-top: 8.62vh;
    padding-left: 7.2vw;
    font-weight: 400;
}

.avatar {
    width: 12.53vw;
    height: 12.53vw;
    border-radius: 6.265vw;
    background-color: #D9D9D9;
    float: right;
    margin-top: 6.77vh;
    margin-right: 10.4vw;
}

.morning {
    padding-left: 6.4vw;
    /* background-color: skyblue; */
    padding-bottom: 1.5vh;
}

.gmornig,
.username {
    font-size: 8.534vw;
    display: block;
    text-align: left;
    color: #000000;
    padding: 0;
    margin: 0;
}

.middle {
    /* background-color: yellow; */
    height: 17.61vh;
}

.p1 {
    background-color: #EBFFEC;
    width: 42.67vw;
    height: 17.61vh;
    border-radius: 5.4vw;
    display: inline-block;
    margin-right: 3vw;
}

.p1text {
    width: 33.6vw;
    float: left;
    /* background-color: slateblue; */
    padding-left: 4vw;
    padding-top: 4vw;
}

.p1text1,
.p1text3 {
    font-size: 1.4vh;
    color: #000000;
    text-align: left;
}

.p1text2 {
    font-size: 1.1vh;
    color: #454545;
    text-align: left;
}

.timefallsleep {
    color: #008B12;
    font-size: 3.5vh;
    text-align: left;
    margin-bottom: 2.5vw;
}

.sleeptime {
    color: #008B12;
    font-size: 3.5vh;
    text-align: left;
    line-height: 1.1;
}

.more {
    width: 8vw;
}

.p1icon {
    float: right;
    padding-top: 1.3vw;
    padding-right: 1vw;
}

.p2 {
    /* background-color: plum; */
    width: 42.67vw;
    height: 17.61vh;
    display: inline-block;
    margin-left: 3vw;
}

.todolist {
    background-color: #EBFFEC;
    border-radius: 5.4vw;
    width: 100%;
    height: 10.59vh;
    margin-bottom: 1.1vh;
    float: left;

}

.aiadvice {
    background-color: #EBFFEC;
    border-radius: 5.4vw;
    width: 100%;
    height: 5.92vh;
    float: left;
}

.todolisttitle {
    font-size: 1.4vh;
    text-align: left;
    margin-top: 3.8vw;
    margin-left: 3vw;
    color: #000000;
}

.todolistcontent {
    padding-left: 6vw;
    line-height: 2.5;
}

.todolistcontent>li {
    font-size: 1.25vh;
    color: #000000;
    text-align: left;
}

.card {
    height: 44vh;
    /* background-color: chocolate; */
}

h1 {
    color: #42b983;

}
</style>