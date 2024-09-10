<template>
    <div>
      <audio ref="dio">
        <source src="http://music.163.com/song/media/outer/url?id=2153649401.mp3">
      </audio>
      <div>{{ currentTime }}</div> <div>{{ duration }}</div>
      <button @click="playdio">开始</button><br>
      <button @click="pausedio">结束</button>
    </div>
  
    
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const dio = ref()
  
  const currentTime = ref()
  
  const duration = ref();
  
  let timer;
  
  const playdio = () => {
    duration.value = dio.value.duration
    timer = setInterval(() => {
      currentTime.value = dio.value.currentTime
    }, 1000);
    
    dio.value.play()
  }
  const pausedio = () => {
    clearInterval(timer);
    dio.value.pause()
  }
  </script>
  
  <style></style>