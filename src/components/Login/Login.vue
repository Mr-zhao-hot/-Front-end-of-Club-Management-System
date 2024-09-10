<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="flex shadow-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="w-[650px]">
        <img src="../Login/Login.jpg" alt="登录图片" class="w-full h-full object-cover">
      </div>
      <div class="bg-white w-[35%] p-5 flex flex-col items-center">
        <h1 class="text-center pt-11 mt-0" >Login</h1>
        <input type="text" class="h-11 pl-2 border-b-4 border-[#B3A5FC] w-full text-lg mt-5" placeholder="your account" v-model="User">
        <input type="password" class="h-11 pl-2 border-b-4 border-[#B3A5FC] w-full text-lg mt-5" placeholder="please your password" v-model="Password">
        <RouterLink to="/Register" class="mt-5 text-[#9c3493] text-right block">get yourself account</RouterLink>
        <button class="mt-5 h-8 w-52 rounded-full font-bold text-transparent text-lg bg-gradient-to-r from-[#1f005c] via-[#5b0060] to-[#ffb56b] bg-clip-text backdrop-blur-md cursor-pointer" @click="success">
          login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';
import store from '../../store/index.js';




const router = useRouter();


const isNotEmpty = (value) => {
  return value!== '' && value!== undefined && value!== null;
};
// 登录内容
const User = ref("");
const Password = ref("");

const success = () => {
  if (isNotEmpty(User.value) && isNotEmpty(Password.value)) {
    // 给予了对应的token
    sessionStorage.setItem("islogin",true)
    router.push('/page'); // 假设登录成功后跳转到 /dashboard 页面
  } else {
    open3();
  }
};


const open3 = () => {
  ElNotification({
    title: 'Info',
    message: '请检查你的内容是否完整',
    type: 'info',
  });
};
</script>

<style>

</style>