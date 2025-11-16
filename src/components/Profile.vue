<template>
    <div class="page">
        <div class="maininfo">
            <img :src="useravatar" class="avatar">
            <div class="changeavatar" @click="showModal = true">更换头像</div></img>

            <div class="nameiconid">
                <div class="nameicon">
                    <div class="name">睡大觉</div>
                    <!-- <div class="icon"><img class="down" src="../../public/source/icon/sleepsituation.png" alt=""></div> -->
                </div>
                <div class="id">id : 1235481263</div>
            </div>
        </div>
        <div class="options">
            <!-- 修改: 添加点击事件打开全屏模态框 -->
            <div class="personalinfo" @click="showPersonalInfoModal = true">
                <img class="opticon" src="../../public/source/icon/personalinfo.png" alt="">
                <span class="content">个人信息</span>
                <span class="arrowhead">></span>
            </div>
            <div class="sleepanalytics">
                <img class="opticon" src="../../public/source/icon/sleepanalytics.png" alt="">
                <span class="content">睡眠情况与分析</span>
                <span class="arrowhead">></span>
            </div>
            <div class="accomplishment">
                <img class="opticon" src="../../public/source/icon/accomplishment.png" alt="">
                <span class="content">成就</span>
                <span class="arrowhead">></span>
            </div>
            <div class="settings">
                <img class="opticon" src="../../public/source/icon/settings.png" alt="">
                <span class="content">设置</span>
                <span class="arrowhead">></span>
            </div>
        </div>

        <!-- 原有的头像更换模态框 -->
        <div v-if="showModal" class="modal-overlay" @click="showModal = false">
            <div class="modal-content" @click.stop>
                <div class="modal-header">
                    <span class="close-button" @click="showModal = false">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="avatarplus modal-body-avatar">+</div>
                    <img :src="avatar1" alt="" class="avatarp1 modal-body-avatar" @click="changetoavatar1">
                    <img :src="avatar2" alt="" class="avatarp2 modal-body-avatar" @click="changetoavatar2">
                    <img :src="avatar3" alt="" class="avatarp3 modal-body-avatar" @click="changetoavatar3">
                    <img :src="avatar4" alt="" class="avatarp4 modal-body-avatar" @click="changetoavatar4">
                    <img :src="avatar0" alt="" class="avatarp0 modal-body-avatar" @click="changetoavatar0">
                </div>
            </div>
        </div>

        <!-- 新增: 全屏个人信息模态框 -->
        <div v-if="showPersonalInfoModal" class="fullscreen-modal">
            <div class="modal-header">
                <span class="close-button-2" @click="showPersonalInfoModal = false">&times;</span>
                <h2 class="modal-title">个人信息</h2>
            </div>
            <div class="personal-info-content">
                <div class="toppart">
                    <img :src="useravatar" alt="" class="toppart-avatar">
                    <div class="toppart-info">
                        <div class="toppart-info-username">用户名：睡大觉</div>
                        <div class="toppart-info-id">id：1235481263</div>
                        <div class="toppart-info-email">注册邮箱：<br> 1235481263@qq.com</div>
                    </div>
                </div>
                <div class="bottompart">
                    <div class="bottompart-gender">性别：男</div>
                    <div class="bottompart-age">年龄段：18-20岁</div>
                    <div class="bottompart-area">地区：东京都丰岛区千早町</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// 导入头像图片资源
import avatar0 from '../../public/source/profilepictures/nightunending.png'
import avatar1 from '../../public/source/profilepictures/夏枯草.jpg'
import avatar2 from '../../public/source/profilepictures/枸杞.jpg'
import avatar3 from '../../public/source/profilepictures/百合.jpg'
import avatar4 from '../../public/source/profilepictures/酸枣仁.jpg'

// 头像数组
const avatarImages = [
    avatar0,
    avatar1,
    avatar2,
    avatar3,
    avatar4
]

const useravatar = ref(avatarImages[0])
const changetoavatar0 = () => {
    useravatar.value = avatarImages[0]
}
const changetoavatar1 = () => {
    useravatar.value = avatarImages[1]
}
const changetoavatar2 = () => {
    useravatar.value = avatarImages[2]
}
const changetoavatar3 = () => {
    useravatar.value = avatarImages[3]
}
const changetoavatar4 = () => {
    useravatar.value = avatarImages[4]
}

// 控制模态框显示状态
const showModal = ref(false)
const showPersonalInfoModal = ref(false) // 新增: 控制个人信息模态框
</script>

<style scoped>
.page {
    padding: 0;
    text-align: center;
}

.maininfo {
    height: 26vh;
    position: relative;
}

.avatar {
    width: 22vw;
    height: 22vw;
    border-radius: 12.13vw;
    position: absolute;
    top: 9.6vh;
    left: 7.2vw;
}

.nameiconid {
    display: inline-block;
    position: absolute;
    top: 11.5vh;
    left: 34.1vw;
    text-align: left;
    line-height: 1.4;
    color: #000;
}

.changeavatar {
    position: absolute;
    background-color: #D9D9D9;
    width: 12.267vw;
    height: 2vh;
    border-radius: 1vh;
    text-align: center;
    font-size: 2.13vw;
    color: #fff;
    line-height: 2vh;
    top: calc(9.6vh + 22vw + 1vh);
    left: calc(7.2vw + 11vw - 6.1335vw);
}

.name {
    display: inline-block;
    font-size: 6.4vw;
}

.icon {
    display: inline-block;
}

.id {
    font-size: 3.2vw;
}

.personalinfo,
.sleepanalytics,
.accomplishment,
.settings {
    height: 5.54vh;
    background-color: #D1DBC7;
    text-align: left;
    line-height: 5.54vh;
    font-size: 4vw;
    color: #436850;
}

.personalinfo {
    margin-bottom: 0.4vh;
}

.sleepanalytics,
.accomplishment {
    margin-bottom: 3.5vh;
}

.opticon {
    width: 7vw;
    height: auto;
    vertical-align: middle;
    margin: 0 2vw;
}

.arrowhead {
    float: right;
    margin-right: 4vw;
    color: #454545;
    font-size: 5vw;
}

.down {
    width: 6vw;
    height: auto;
    vertical-align: sub;
}

/* 原有的模态框样式保持不变 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 53vh;
    background-color: white;
    z-index: 1001;
}

.modal-header {
    position: relative;
    padding: 10px;
    text-align: left;
}

.close-button {
    position: absolute;
    top: 6vh;
    left: 6vw;
    font-size: 10vw;
    font-weight: 100;
    color: black;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1003;
}

.modal-body {
    text-align: center;
    position: relative;
}

.modal-body-avatar {
    width: 22vw;
    height: 22vw;
    border-radius: 50%;
    position: absolute;
    display: block;
}

.avatarplus {
    background-color: #D9D9D9;
    top: 12vh;
    left: 7.2vw;
    font-size: 15vw;
    color: #2B2B2B;
    /* 使用行高方法实现居中 */
    line-height: 22vw;
    /* 与容器高度相同 */
    text-align: center;
    /* 水平居中 */
}

.avatarp1 {
    top: 12vh;
    left: 37.8vw;
}

.avatarp2 {
    top: 12vh;
    left: 66.93vw
}

.avatarp3 {
    top: 28vh;
    left: 7.2vw;
}

.avatarp4 {
    top: 28vh;
    left: 37.8vw;
}

.avatarp0 {
    top: 28vh;
    left: 66.93vw;
}

/* 新增: 全屏模态框样式 */
.fullscreen-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFF6E9;
    /* 不透明的白色背景 */
    z-index: 1002;
    overflow-y: auto;
}

.close-button-2 {
    position: absolute;
    top: 9.2vh;
    left: 7.5vw;
    font-size: 10vw;
    font-weight: 100;
    color: black;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1003;
}

.modal-title {
    text-align: center;
    margin-top: 7.4vh;
    font-size: 5.4vw;
    color: #2B2B2B;
}

.personal-info-content {
    background-image: url(../../public/source/个人信息背景.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1vh 2vw;
    width: 93vw;
    height: 64.4vh;
    margin: 6vh auto 0 auto;
    /* 上边距8vh，左右自动居中 */
    color: #2B2B2B;
    font-size: 4.27vw;
    text-align: left;
}

.toppart {
    /* background-color: yellow; */
    margin-top: 5.5vh;
}

.toppart-avatar {
    display: inline-block;
    width: 22vw;
    height: 22vw;
    border-radius: 50%;
    margin-left: 6vw;
}

.toppart-info {
    display: inline-block;
    margin-left: 7.5vw;
    line-height: 1.8;
}

.toppart-info-email {
    line-height: 1.3;
}

.bottompart {
    /* background-color: red; */
    margin-top: 5vh;
    padding-left: 7.5vw;
}

.bottompart-age,
.bottompart-area {
    margin-top: 2.4vh;
}
</style>