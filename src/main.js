import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 在main.js或main.ts中
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否在Android WebView环境中
  if (typeof Android !== 'undefined' && Android.requestSleepDataFromJS) {
    // 请求更新睡眠数据
    Android.requestSleepDataFromJS()
  }
})
createApp(App).mount('#app')
