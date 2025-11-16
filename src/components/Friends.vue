<template>
    <div class="page">
        <div class="toppart" :style="{ opacity: topOpacity }">
            <div class="title">好友排行</div>
            <div class="choice">
                <div class="week" :class="{ active: activeTab === 'week' }" @click="toggleTab('week')">近七天</div>
                <div class="alltime" :class="{ active: activeTab === 'alltime' }" @click="toggleTab('alltime')">所有时间
                </div>
            </div>
            <div class="topthree">
                <div class="topthree-item1">
                    <img src="../../public/source/crown/金皇冠.png" alt="" class="goldcrown">
                    <img :src="testfriendsinfo[1].useravatar" alt="" class="circle">
                    <div class="base">{{ testfriendsinfo[1].username }}</div>
                </div>
                <div class="topthree-item2">
                    <img src="../../public/source/crown/银皇冠.png" alt="" class="silvercrown">
                    <img :src="testfriendsinfo[2].useravatar" alt="" class="circle">
                    <div class="base">{{ testfriendsinfo[2].username }}</div>
                </div>
                <div class="topthree-item3">
                    <img src="../../public/source/crown/铜皇冠.png" alt="" class="coppercrown">
                    <img :src="testfriendsinfo[3].useravatar" alt="" class="circle">
                    <div class="base">{{ testfriendsinfo[3].username }}</div>
                </div>
            </div>
        </div>
        <div class="scrollpart" ref="scrollContainer">
            <div class="content">
                <!-- 这里放置你的滚动内容 -->
                <div class="item" v-for="i in 9" :key="i">
                    <div class="item-content">
                        <div class="item-number">{{ i }}</div>
                        <img :src="testfriendsinfo[i].useravatar" alt="" class="item-profilepicture">
                        <div class="item-information">
                            <div class="item-username">{{ testfriendsinfo[i].username }}</div>
                            <div class="item-details">
                                <div class="item-power">能量: {{ testfriendsinfo[i].power }}</div>
                                <div class="item-plantnumber">药草数量: {{ testfriendsinfo[i].plantnumber }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated } from 'vue'

// 导入头像图片资源
import avatar1 from '../../public/source/profilepictures/nightunending.png'
import avatar2 from '../../public/source/profilepictures/夏枯草.jpg'
import avatar3 from '../../public/source/profilepictures/枸杞.jpg'
import avatar4 from '../../public/source/profilepictures/百合.jpg'
import avatar5 from '../../public/source/profilepictures/酸枣仁.jpg'


// 头像数组
const avatarImages = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5
]

const testfriendsinfo = {
    "1": {
        "username": "烟雨任平生",
        "useravatar": avatar1,
        "power": 95,
        "plantnumber": 4
    },
    "2": {
        "username": "像素世界",
        "useravatar": avatar5,
        "power": 92,
        "plantnumber": 4
    },
    "3": {
        "username": "奶油泡芙",
        "useravatar": avatar3,
        "power": 80,
        "plantnumber": 4
    },
    "4": {
        "username": "调色盘失窃",
        "useravatar": avatar1,
        "power": 77,
        "plantnumber": 3
    },
    "5": {
        "username": "云卷云舒",
        "useravatar": avatar5,
        "power": 71,
        "plantnumber": 3
    },
    "6": {
        "username": "碳基代码体",
        "useravatar": avatar4,
        "power": 70,
        "plantnumber": 3
    },
    "7": {
        "username": "平行宇宙快递员",
        "useravatar": avatar5,
        "power": 65,
        "plantnumber": 2
    },
    "8": {
        "username": "神经云备份员",
        "useravatar": avatar3,
        "power": 62,
        "plantnumber": 1
    },
    "9": {
        "username": "候鸟",
        "useravatar": avatar2,
        "power": 46,
        "plantnumber": 0
    }
}



const scrollContainer = ref(null)
const topOpacity = ref(1)

const activeTab = ref('week')

const toggleTab = (tab) => {
    activeTab.value = tab
}
const handleScroll = () => {
    if (scrollContainer.value) {
        const scrollTop = scrollContainer.value.scrollTop
        // 根据滚动距离计算透明度，滚动越多透明度越低
        // 假设完全滚动覆盖toppart需要滚动200px
        const maxScroll = 200
        topOpacity.value = Math.max(0, 1 - scrollTop / maxScroll)
    }
}

onMounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', handleScroll)
    }
})

onUnmounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.removeEventListener('scroll', handleScroll)
    }
})

onActivated(() => {
    topOpacity.value = 1
})
</script>

<style scoped>
.page {
    height: 89vh;
    /* 根据你的注释设置 */
    width: 100%;
    position: relative;
    overflow: hidden;
}

.toppart {
    height: 49.5vh;
    /* background-color: green; */
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.1s ease;
    /* 平滑过渡效果 */
}

.title {
    /* background-color: red; */
    font-size: 6.4vw;
    color: #000;
    text-align: center;
    padding-top: 5.5vh;
}

.choice {
    height: 6.4vh;
    width: 93.33vw;
    background-color: #D1DBC7;
    margin: 0 auto;
    margin-top: 2vh;
    margin-bottom: 5vh;
    border-radius: 3.2vh;
    display: flex;
    overflow: hidden;
    /* 防止子元素超出父容器 */
}

.week,
.alltime {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.2vw;
    color: #fff;
    transition: all 0.3s ease;
    border-radius: 3.2vh;
    cursor: pointer;
    padding: 1.6vh;
    margin: 0.35vh;
}

/* 选中状态样式 */
.week.active,
.alltime.active {
    background-color: #2E8B57;
    /* 深绿色 */
    color: white;
}

/* 未选中状态样式 */
.week:not(.active),
.alltime:not(.active) {
    background-color: #D1DBC7;
    /* 浅绿色 */
    color: #666;
}

.topthree {
    position: relative;
}

.topthree-item1 {
    position: absolute;
    left: 37.9vw;
}

.goldcrown {
    position: absolute;
    z-index: 2;
    width: 60%;
    left: 20%;
    top: -26%;
}

.topthree-item2 {
    position: absolute;
    top: 6vh;
    left: 67.8vw;

}

.silvercrown {
    position: absolute;
    z-index: 2;
    width: 45%;
    left: 52%;
    top: -17%;
    transform: rotate(30deg);
}

.topthree-item3 {
    position: absolute;
    top: 8vh;
    left: 8vw;
}

.coppercrown {
    position: absolute;
    z-index: 2;
    width: 45%;
    top: -17%;
    transform: rotate(-30deg);
}

.circle {
    width: 24.2vw;
    height: 24.2vw;
    background-size: cover;
    /* 调整图片大小以覆盖整个区域 */
    background-position: center;
    /* 将图片居中显示 */
    background-repeat: no-repeat;
    /* 防止图片重复 */
    border-radius: 50%;
    position: relative;
    z-index: 0;
}

.base {
    width: 24.2vw;
    height: 3.45vh;
    background-color: #436850;
    position: relative;
    border-radius: 1.725vh;
    transform: translateY(-1vh);
    z-index: 1;
    color: white;
    font-size: 3.4vw;
    text-align: center;
    line-height: 3.45vh;
    /* 与height相同 */
}

.scrollpart {
    height: 89vh;
    /* 占满整个页面高度 */
    width: 100%;
    overflow-y: auto;
    /* 允许垂直滚动 */
    overflow-x: hidden;
    /* 隐藏水平滚动条 */
    -ms-overflow-style: none;
    /* IE 和 Edge 隐藏滚动条 */
    scrollbar-width: none;
    /* Firefox 隐藏滚动条 */
}

/* Webkit浏览器隐藏滚动条 */
.scrollpart::-webkit-scrollbar {
    display: none;
}

.content {
    margin-top: 49.5vh;
    padding-top: 6vh;
    /* 为toppart留出空间 */
    padding-bottom: 20px;
    /* 底部留白 */
    background-color: #D1DBC7;
    border-radius: 10.6vw 10.6vw 0 0;
    position: relative;
}

.item {
    height: 9.5vh;
    margin: 1vh 5.8vw;
    background-color: #FFFFFF;
    border-radius: 5.3vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-content {
    color: #2B2B2B;
    display: flex;
    /* 添加flex布局 */
    align-items: center;
    /* 垂直居中 */
    width: 100%;
    padding: 0 8vw;
    /* 添加一些内边距使内容不贴边 */
}

.item-number {
    display: inline-block;
    font-size: 6.4vw;
    margin-right: 3vw;

}

.item-profilepicture {
    display: inline-block;
    width: 12vw;
    height: 12vw;
    border-radius: 6vw;
    margin-right: 3vw;
}

.item-information {
    display: inline-block;
    line-height: 1.3;
}

.item-username {
    color: #2B2B2B;
    font-size: 3.5vw;
}

.item-power,
.item-plantnumber {
    display: inline-block;
    font-size: 3.5vw;
    color: #AAAAAA;
}

.item-power {
    padding-right: 8vw;
}
</style>