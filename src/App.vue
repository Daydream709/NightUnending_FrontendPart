<template>
  <div class="app-container">
    <div class="content">
      <keep-alive>
        <component :is="components[activeTab]">
        </component>
      </keep-alive>
    </div>
    <div class="tab-bar">
      <div class="tab-item" :class="{ active: activeTab === 'home' }" @click="activeTab = 'home'">
        <!-- 修改: 动态绑定首页图标 -->
        <img class="tab-icon"
          :src="activeTab === 'home' ? '../public/source/icon/homeactive.png' : '../public/source/icon/home.png'"
          alt="">
        <span>首页</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'plant' }" @click="activeTab = 'plant'">
        <!-- 修改: 动态绑定种植图标 -->
        <img class="tab-icon"
          :src="activeTab === 'plant' ? '../public/source/icon/plantactive.png' : '../public/source/icon/plant.png'"
          alt="">
        <span>种植</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'friends' }" @click="activeTab = 'friends'">
        <!-- 修改: 动态绑定好友图标 -->
        <img class="tab-icon"
          :src="activeTab === 'friends' ? '../public/source/icon/friendsactive.png' : '../public/source/icon/friends.png'"
          alt="">
        <span>好友</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'profile' }" @click="activeTab = 'profile'">
        <!-- 修改: 动态绑定我的图标 -->
        <img class="tab-icon"
          :src="activeTab === 'profile' ? '../public/source/icon/profileactive.png' : '../public/source/icon/profile.png'"
          alt="">
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'
import Plant from './components/Plant.vue'
import Friends from './components/Friends.vue'
import Profile from './components/Profile.vue'

const activeTab = ref('home')
const components = {
  home: Home,
  plant: Plant,
  friends: Friends,
  profile: Profile
}


</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #FFF6E9;
}

.content {
  flex: 1;
  overflow: hidden;
  height: 89vh;
  padding-bottom: 11vh;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 11vh;
  display: flex;
  background-color: #D1DBC7;
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3.2vw;
  font-weight: 400;
  color: #AAAAAA;
  cursor: pointer;
}

.tab-icon {
  width: 8vw;
}

.tab-item.active {
  color: #436850;
  font-weight: bold;
  opacity: 1;
}
</style>

<style>
/* 全局样式 */
html,
body {
  overscroll-behavior: none;
  height: 100%;
  overflow: hidden;
}

/* 或者只在应用容器上
.app-container {
  overscroll-behavior: none;
} */
</style>