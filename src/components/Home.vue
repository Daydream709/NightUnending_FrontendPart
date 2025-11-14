<template>
    <div class="page">
        <div class="top">
            <span class="title">夜未央</span>
        </div>
        <div class="morning">
            <span class="nowtime">现在是{{ time }}</span>
            <span class="gmornig">早上好</span>
        </div>
        <div class="middle">
            <div class="p1">
                <div class="p1text">
                    <div class="p1text1">您昨晚的入睡时间</div>
                    <div class="p1text2">北京时间</div>
                    <div class="timefallsleep">{{ sleepData.sleepTime }}</div>
                    <div class="p1text3">睡眠时长</div>
                    <div class="sleeptime">{{ ((sleepData.duration).replace('小', '')).replace('钟', '') }}</div>
                </div>
                <div class="p1icon">
                    <img class="more" src="../../public/source/icon/more.png" alt="">
                </div>
            </div>

            <div class="p2">
                <div class="usernamediv">
                    <span class="username">{{ username }}</span>
                </div>
                <div class="power">
                    <div class="powercontent">
                        <div class="powertext">本次睡眠获得能量</div>
                        <div class="dailyenergy">{{ dailyenergy }}</div>
                        <div class="cumulativeenergy">累计获得 {{ cumulativeenergy }}</div>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <SwiperCarousel />
        </div>
    </div>
</template>

<script setup>
import SwiperCarousel from './SwiperCarousel.vue'
import { ref, onMounted, onUnmounted, onActivated } from 'vue'

// 定义响应式数据
const sleepData = ref({
    sleepTime: '00 : 00',
    wakeTime: '00 : 00',
    duration: '0h0min',
    score: 0,
    advice: '暂无建议'
})
const dailyenergy = ref(30)

const cumulativeenergy = ref(5604)

const username = ref('睡大觉')
// 定义时间响应式变量
const time = ref('')

// 更新时间的函数
const updateTime = () => {
    time.value = new Date().toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
}
// 组件挂载时开始定时更新时间
let timer = null


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
            sleepTime: data.sleepTime || '--:--',
            wakeTime: data.wakeTime || '--:--',
            duration: data.duration || data.durationFormatted || '暂无数据',
            score: data.score !== undefined && data.score !== null ? parseFloat(data.score) : 0,
            advice: data.advice || '暂无建议'
        }
        console.log('sleepTime数据:', data.sleepTime, typeof data.sleepTime)
        console.log('wakeTime数据:', data.wakeTime, typeof data.wakeTime)
        console.log('duration数据:', data.duration, typeof data.duration)
        console.log('score数据:', data.score)
        console.log('advice数据:', data.advice)
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
    console.log('执行requestData函数')
    // 检查是否在Android WebView环境中
    if (typeof Android !== 'undefined' && Android.requestLatestSleepDataFromJs) {
        console.log('调用Android.requestLatestSleepDataFromJs')
        Android.requestLatestSleepDataFromJs()
    }
}


// 检查权限
const checkPermission = () => {
    if (typeof Android !== 'undefined' && Android.hasUsageStatsPermissionFromJs) {
        hasPermission.value = Android.hasUsageStatsPermissionFromJs()
    }
}

// 创建一个统一的加载函数，可以在多个地方调用
const loadData = () => {
    console.log('开始加载数据...')
    checkPermission()
    loadSleepHistory()

    // 直接调用requestData来获取最新数据
    requestData()
}

// 组件挂载时加载数据
onMounted(() => {
    console.log('组件已挂载，开始加载数据')
    loadData()
    // 立即更新一次时间
    updateTime()

    // 每半分钟更新一次时间
    timer = setInterval(updateTime, 30000)
})
// 组件卸载时清除定时器
onUnmounted(() => {
    if (timer) {
        clearInterval(timer)
    }
})
// 组件被激活时也加载数据（适用于动态组件切换）
onActivated(() => {
    console.log('组件被激活，重新加载数据')
    loadData()
    // 立即更新一次时间
    updateTime()
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
    font-size: 6.4vw;
    color: #12372A;
    float: left;
    padding-top: 8.62vh;
    padding-left: 7.2vw;
    font-weight: 400;
}


.morning {
    padding-right: 6.4vw;
    /* background-color: skyblue; */
    font-size: 8.534vw;
    text-align: right;
    color: #12372A;

}

.nowtime,
.gmornig {
    display: block;
    padding: 0;
    margin: 0;
}

.middle {
    /* background-color: yellow; */
    height: 17.61vh;
}

.p1 {
    background-color: #D1DBC7;
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
    padding-top: 1.847vh;
    line-height: 1.4;
}

.p1text1 {
    text-align: left;
    color: #12372A;
    font-size: 1.478vh;
}

.p1text2 {
    font-size: 1.385vh;
    color: #436850;
    text-align: left;
}

.p1text3 {
    font-size: 1.385vh;
    color: #436850;
    text-align: left;
}

.timefallsleep {
    color: #436850;
    font-size: 2.955vh;
    text-align: left;
}

.sleeptime {
    color: #436850;
    font-size: 2.955vh;
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

.usernamediv {
    /* background-color: #D1DBC7; */
    width: 100%;
    height: 4.69vh;
    margin-bottom: 1vh;
    float: left;
    text-align: right;
    padding-right: 2.5vw;


}

.username {
    font-size: 8vw;
    color: #12372A
}

.power {
    background-color: #D1DBC7;
    border-radius: 5.4vw;
    width: 100%;
    height: 11.92vh;
    float: left;
}

.powercontent {
    padding-left: 3.5vw;
    padding-top: 1.6vh;
    text-align: left;
    line-height: 1.35;
}

.powertext {

    color: #12372A;
    font-size: 1.478vh;
}

.dailyenergy {
    color: #436850;
    font-size: 3.94vh;
}

.cumulativeenergy {
    color: #AAAAAA;
    font-size: 1.3vh;

}

.card {
    height: 44vh;
    /* background-color: chocolate; */
}

h1 {
    color: #42b983;

}
</style>