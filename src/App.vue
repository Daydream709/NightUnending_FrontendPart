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
        <span>首页</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'plant' }" @click="activeTab = 'plant'">
        <span>种植</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'friends' }" @click="activeTab = 'friends'">
        <span>好友</span>
      </div>
      <div class="tab-item" :class="{ active: activeTab === 'profile' }" @click="activeTab = 'profile'">
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
  padding-bottom: 60px;
  box-sizing: border-box;
}

.content {
  flex: 1;
  overflow-y: auto;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  background-color: #fff;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.tab-item.active {
  color: #42b983;
  font-weight: bold;
}
</style>