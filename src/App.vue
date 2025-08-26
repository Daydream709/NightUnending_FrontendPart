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

<template>
  <div class="app-container">
    <div class="content">
      <component :is="components[activeTab]"></component>
    </div>
    <div class="tab-bar">
      <div class="tab-item" :class="{ active: activeTab === 'home' }" @click="activeTab = 'home'">
        <img class="tab-icon" src="../source/icon/home.png" alt="">
        <span>首页</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'plant' }" @click="activeTab = 'plant'">
        <img class="tab-icon" src="../source/icon/plant.png" alt=""></img>
        <span>种植</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'friends' }" @click="activeTab = 'friends'">
        <img class="tab-icon" src="../source/icon/friends.png" alt=""></img>
        <span>好友</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'profile' }" @click="activeTab = 'profile'">
        <img class="tab-icon" src="../source/icon/profile.png" alt=""></img>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
  background-color: #EBEBEB;
  border-top: 1px solid #eee;
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #AAAAAA;
  cursor: pointer;
  opacity: 0.4;
}

.tab-icon {
  width: 12vw;
}

.tab-item.active {
  color: #000000;
  font-weight: bold;
  opacity: 1;
}
</style>