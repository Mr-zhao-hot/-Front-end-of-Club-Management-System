<template>
<!-- 最大的盒子 -->
<div class="flex flex-col h-full  space-y-2">
  <!-- 输出框 -->
  <div class="  h-5/6 glas-class">
  </div>
  <!-- 输入框 -->
  <textarea class=" glas-class  h-36" placeholder="请输入你的问题..(敲击Enter即可发送消息)"></textarea>
</div>
</template>

<script setup>

</script>

<style scoped>
/* 玻璃板特效 */
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
</style>