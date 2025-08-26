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
                    <div class="timefallsleep">00 : 00</div>
                    <div class="p1text3">睡眠时长</div>
                    <div class="sleeptime">0h0min</div>
                </div>
                <div class="p1icon">
                    <img class="more" src="../../public/source/icon/more.png" alt="">
                </div>
            </div>

            <div class="p2"></div>
        </div>
    </div>
</template>

<script setup>
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
    background-color: pink;
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
    background-color: skyblue;
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
    background-color: yellow;
    height: 17.61vh;
    padding-left: 4.27vw;
}

.p1 {
    background-color: #EBFFEC;
    width: 42.67vw;
    height: 17.61vh;
    border-radius: 5.4vw;
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

h1 {
    color: #42b983;

}
</style>