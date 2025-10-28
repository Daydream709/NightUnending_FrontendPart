<template>
    <div class="page">
        <div class="topofpage">
            <div class="power">能量</div>
            <div class="storage" @click="openModal">
                <img class="storage_picture" src="../../public/source/药材库.png" alt="">
                <div class="storage_words">药材库</div>
            </div>
        </div>
        <div class="medicine">
            <img src="../../public/source/plants/枸杞.png" alt="" class="medicine_picture">
        </div>
        <div class="bottomofpage">
            <img src="../../public/source/告示牌.png" alt="" class="board">
            <div class="board_words">
                <div class="plant_name">百合</div>
                <div class="plant_period">成熟期</div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 70%"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 添加模态框 -->
        <div v-if="showModal" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <!-- 将背景图片作为普通图片 -->
                <img src="../../public/source/柜子.png" class="cabinet-image" alt="柜子">

                <!-- 在图片上定位其他元素 -->
                <img src="../../public/source/plants/夏枯草种子.png" class="fixed-item item-1" alt="药材1">
                <img src="../../public/source/plants/枸杞种子.png" class="fixed-item item-2" alt="药材2">
                <img src="../../public/source/plants/百合种子.png" class="fixed-item item-3" alt="药材3">
                <img src="../../public/source/plants/酸枣仁种子.png" class="fixed-item item-4" alt="药材4">

                <button @click="closeModal" class="close-button">关闭</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 控制模态框显示状态
const showModal = ref(false)

// 打开模态框的方法
const openModal = () => {
    showModal.value = true
}

// 关闭模态框的方法
const closeModal = () => {
    showModal.value = false
}
</script>

<style scoped>
.page {
    padding: 0;
    text-align: center;
    height: 100%;
    background-image: url('../../public/source/种植背景.png');
    background-size: cover;
    background-position: 50% 60%;
    background-repeat: no-repeat;
}

.topofpage {
    height: 16.75vh;
}

.power {
    float: left;
    color: #FFC169;
    font-size: 3.94vh;
    margin-top: 5.5vh;
    margin-left: 5.3vw;
}

.storage {
    float: right;
    margin-top: 3vh;
    margin-right: 5.6vw;
    font-size: 3.4vw;
}

.storage_picture {
    width: 8.7vh;
}

.medicine {
    height: 54.8vh;

}

.medicine_picture {
    max-height: 100%;
    max-width: 100%;
}

.bottomofpage {
    height: 17.45vh;
    position: relative;
}

.board {
    max-height: 100%;
    max-width: 100%;
    float: left;
}

.board_words {
    text-align: left;
    position: absolute;
    top: 4.6vh;
    left: 6.5vh;
}

.plant_name {
    font-size: 2.54vh;
    display: inline-block;
    margin-right: 0.923vh;
}

.plant_period {
    font-size: 1.293vh;
    display: inline-block;
}

.progress-container {
    display: flex;
    align-items: center;
}

.progress-bar {
    width: 11.54vh;
    max-width: 13vh;
    height: 1vh;
    background-color: #e0e0e0;
    border-radius: 0.5vh;
    overflow: hidden;
    margin-right: 0.923vh;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50, #8BC34A);
    border-radius: 1vh;
    transition: width 0.3s ease;
}

/* 新增模态框样式 */
/* 其他样式保持不变 */

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    display: inline-block;
    /* 根据内容自适应大小 */
    max-width: 90vw;
    max-height: 90vh;
}

.cabinet-image {
    width: 100%;
    height: auto;
    display: block;
    max-width: 90vw;
    max-height: 90vh;
}

/* 固定位置的图片样式 - 使用百分比定位 */
.fixed-item {
    position: absolute;
    width: 12%;
    /* 相对于柜子图片的大小 */
    height: auto;
    z-index: 2;
}

/* 根据柜子图片的实际布局调整位置 */
.item-1 {
    top: 23%;
    left: 27%;
}

.item-2 {
    top: 23%;
    right: 27%;
}

.item-3 {
    top: 37%;
    left: 27%;
}

.item-4 {
    top: 37%;
    right: 27%;
}

.close-button {
    position: absolute;
    top: 2%;
    left: 3%;
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 3;
    font-size: calc(8px + 0.5vmin);
    /* 响应式字体大小 */
}

.close-button:hover {
    background-color: #45a049;
}

</style>
// 812
// 89vh