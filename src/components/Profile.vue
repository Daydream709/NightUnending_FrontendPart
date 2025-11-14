<template>
    <div class="page">
        <div class="maininfo">
            <div class="avatar"></div>
            <div class="nameiconid">
                <div class="nameicon">
                    <div class="name">睡大觉</div>
                    <div class="icon"><img class="down" src="../../public/source/icon/sleepsituation.png" alt=""></div>
                </div>
                <div class="id">id : 1235481263</div>
            </div>
        </div>
        <div class="options">
            <div class="sleepsituation">
                <img class="opticon" src="../../public/source/icon/sleepsituation.png" alt="">
                <span class="content">睡眠情况</span>
                <span class="arrowhead">></span>
            </div>
            <div class="healthanalytics">
                <img class="opticon" src="../../public/source/icon/healthanalytics.png" alt="">
                <span class="content">健康分析</span>
                <span class="arrowhead">></span>
            </div>
            <div class="accomplishment">
                <img class="opticon" src="../../public/source/icon/sleepsituation.png" alt="">
                <span class="content">成就</span>
                <span class="arrowhead">></span>
            </div>
            <div class="settings">
                <img class="opticon" src="../../public/source/icon/settings.png" alt="">
                <span class="content">设置</span>
                <span class="arrowhead">></span>
            </div>
        </div>
    </div>
</template>

<script setup>
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
    width: 24.26vw;
    height: 24.26vw;
    border-radius: 12.13vw;
    background-color: #D9D9D9;
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



.sleepsituation,
.healthanalytics,
.accomplishment,
.settings {
    height: 5.54vh;
    background-color: #D1DBC7;
    text-align: left;
    line-height: 5.54vh;
    font-size: 4vw;
    color: #436850;

}

.sleepsituation {
    margin-bottom: 0.4vh;
}

.healthanalytics,
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
</style>