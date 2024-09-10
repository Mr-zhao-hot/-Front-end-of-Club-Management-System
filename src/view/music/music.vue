<template>
  <div class="absolute z-50 bg-white bg-opacity-100 glass-class" @mousedown="startDrag"
    :style="{ left: `${left}px`, top: `${top}px`, position: 'absolute' }" v-if="istrue">
    <div class="w-72 h-24 flex flex-row">
      <!-- 黑胶图片 -->
      <div class="h-full border w-1/3 justify-center flex">
        <!-- 可选的黑胶图片 -->
        <p class="rounded-full justify-center w-32 h-18">
          <img :src="phote_music" alt="" class="rounded-full"
            :style="{ animation: `spin ${spinDuration}s linear infinite` }">
          <!-- 白圈 -->
        <p style="z-index:1; position: absolute; top: 32px; left: 32px; background-color: #ffffff"
          class="rounded-full h-8 w-8"></p>
        </p>
      </div>
      <!-- 内容 -->
      <div class="flex flex-col w-2/3">
        <!-- 第一行 -->
        <div class="flex flex-col h-1/2">
          <!-- 名字 和删除键位 -->
          <div class="flex flex-row">
            <!-- 名字 -->
            <div class="flex items-center justify-center w-4/5 h-full font-black"
              style="position: relative; left:10px;">
              {{ music_name }}
              <audio ref="music" @ended="handleEnded">
                <source :src="list">
              </audio>
            </div>
            <!-- 删除键位 -->
            <div class="w-1/12">
              <img src="./pt/delete.png" alt="" class="w-6"
                style="position: relative; left: 19px; top: 4px; cursor: pointer;" @click="off">
            </div>
          </div>
          <!-- 进度条 -->
          <div class="w-100%" style="position: relative; height: 20px; top: 4px;">
            <!-- 进度条内容 -->
          </div>
        </div>
        <!-- 第二行 -->
        <div class="flex flex-row h-1/2 items-center justify-center">
          <!-- 上一个 -->
          <div class="flex items-center justify-center w-1/4 h-full">
            <img src="./pt/back.png" alt="上一个" class="w-6 h-6" style="cursor: pointer;" @click="back">
          </div>
          <!-- 暂停 / 开始 -->
          <div class="flex items-center justify-center w-1/4 h-full">
            <img :src="musictb" alt="开始" class="w-7 h-7" style="position: relative; left: 3px; cursor: pointer;"
              @click="StartStop">
          </div>
          <!-- 下一个 -->
          <div class="flex items-center justify-center w-1/4 h-full">
            <img src="./pt/font.png" alt="下一个" class="w-6 h-6" style="cursor: pointer;" @click="next">
          </div>
          <!-- 音量调节 -->
          <div class="flex items-center justify-center w-1/4 h-full">
            <img :src="music_song" alt="音量调节" class="w-4 h-4" style="cursor: pointer;" @click="shut">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// 盒子可以随意拖动的功能
const left = ref(1200);
const top = ref(600);
let startX, startY;
let isDragging = false;

const startDrag = (event) => {
  startX = event.clientX - left.value;
  startY = event.clientY - top.value;
  isDragging = true;
};

const drag = (event) => {
  if (isDragging) {
    left.value = event.clientX - startX;
    top.value = event.clientY - startY;
  }
};

const stopDrag = () => {
  isDragging = false;
};

// 关闭音乐按钮
const istrue = ref(true);
const off = () => {
  istrue.value = false;
};

// json 文件
import json_data from './music';
// 当前播放音乐列表
const num = ref(0);

// 歌曲名字
const music_name = ref(json_data[num.value].name);
// 歌曲图片
const phote_music = ref(json_data[num.value].img);
const list = ref(json_data[num.value].audio_url);

// 上一首
const back = () => {
  if (num.value > 0) {
    num.value = num.value - 1;
  } else {
    num.value = json_data.length - 1;
  }
  updateMusic();
};

// 下一首
const next = () => {
  if (num.value < json_data.length - 1) {
    num.value = num.value + 1;
  } else {
    num.value = 0;
  }
  updateMusic();
};

// 更新音乐信息
const updateMusic = () => {
  list.value = json_data[num.value].audio_url;
  music_name.value = json_data[num.value].name;
  phote_music.value = json_data[num.value].img;
  music.value.load();
  music.value.play();
  musictb.value = stopPic;
};

// 静音不禁音
import song from './pt/song.png';
import songstop from './pt/songstop.png';
const music_song = ref(song);

const shut = () => {
  music.value.muted = !music.value.muted;
  music_song.value = music.value.muted ? songstop : song;
};

// 音乐变量
const music = ref();
import startPic from './pt/start.png';
import stopPic from './pt/stop.png';

const musictb = ref(startPic); // 默认显示暂停图标
const startdool = ref(true); // 默认状态为开始

const spinDuration = ref(12); // 默认旋转时间为12秒

const StartStop = () => {
  if (startdool.value) {
    music.value.play();
    musictb.value = stopPic;
    spinDuration.value = 12; // 播放时旋转
  } else {
    music.value.pause();
    musictb.value = startPic;
    spinDuration.value = 0; // 暂停时停止旋转
  }
  startdool.value = !startdool.value; // 切换状态
};

// 处理播放结束事件
const handleEnded = () => {
  next();
};

onMounted(() => {
  window.addEventListener('mousemove', drag);
  window.addEventListener('mouseup', stopDrag);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', drag);
  window.removeEventListener('mouseup', stopDrag);
});
</script>

<style>
.glass-class {
  background: rgba(255, 255, 255, 0.1);
  /* 胶囊玻璃的透明背景色 */
  backdrop-filter: blur(10px);
  /* 模糊度可以适当调节 */
  border-radius: 12px;
  /* 增加边角圆度 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
    /* 更细腻的阴影 */
    0 0 10px rgba(255, 255, 255, 0.3);
  /* 添加光晕效果 */
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* 添加细边框 */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* 禁用文本选择 */
* {
  user-select: none;
}
</style>