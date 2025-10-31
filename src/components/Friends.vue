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
                    <div class="circle"></div>
                    <div class="base"></div>
                </div>
                <div class="topthree-item2">
                    <div class="circle"></div>
                    <div class="base"></div>
                </div>
                <div class="topthree-item3">
                    <div class="circle"></div>
                    <div class="base"></div>
                </div>
            </div>
        </div>
        <div class="scrollpart" ref="scrollContainer">
            <div class="content">
                <!-- 这里放置你的滚动内容 -->
                <div class="item" v-for="i in 15" :key="i"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated } from 'vue'

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
    padding-top: 7vh;
}

.choice {
    height: 6.4vh;
    width: 93.33vw;
    background-color: #D1DBC7;
    margin: 0 auto;
    margin-top: 3vh;
    margin-bottom: 4vh;
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

.topthree-item2 {
    position: absolute;
    top: 6vh;
    left: 67.8vw;

}

.topthree-item3 {
    position: absolute;
    top: 8vh;
    left: 8vw;
}

.circle {
    width: 24.2vw;
    height: 24.2vw;
    background-color: #D9D9D9;
    border-radius: 50%;
    position: relative;
    z-index: 1;
}

.base {
    width: 24.2vw;
    height: 3.45vh;
    background-color: #436850;
    position: relative;
    border-radius: 1.725vh;
    transform: translateY(-1vh);
    z-index: 0;
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
</style>