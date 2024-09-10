<template>
    <div class="flex items-center justify-center min-h-screen from-blue-500 to-blue-300">
        <div class="bg-white bg-opacity-90 border border-gray-200 rounded-xl shadow-lg p-8 w-full max-w-md">
            <h1 class="text-3xl font-extrabold text-center text-gray-800 mb-6">Register</h1>

            <form class="space-y-4">
                <input type="email"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Email" v-model="email" />
                <input type="password"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Password" v-model="Password" />
                <input type="text"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Name" v-model="Name" />
                <input type="text"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Sex" v-model="Sex" />
                <input type="text"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Major" v-model="Major" />
                <input type="text"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Class" v-model="Class" />
                <input type="text"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Student ID" v-model="ID" />

                <RouterLink to="/" class="text-blue-500 hover:underline text-sm text-center block mb-4">
                    If you have an account, please click here to log in
                </RouterLink>

                <button type="submit"
                    class="w-full h-12 rounded-md font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition duration-300"
                    @click="success">
                    Register
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ElNotification } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue';
const email = ref("")
const Password = ref("")
const Name = ref("")
const Sex = ref("")
const Major = ref("")
const Class = ref("")
const ID = ref("")

const open3 = () => {
    ElNotification({
        title: 'Info',
        message: '请检查你的内容是否完整',
        type: 'info',
    })
}

const open = async () => {
  try {
    const { value } = await ElMessageBox.prompt(
      '请输入验证码：',
      '验证码输入',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[0-9]{6}$/, // 示例验证码格式（6位数字）
        inputErrorMessage: '验证码格式错误，请输入6位数字。',
      }
    )
    console.log('用户输入的验证码:', value)
  } catch (error) {
    // 处理用户取消输入或其他错误
    if (error === 'cancel') {
      console.log('用户取消了输入')
    } else {
      console.error('发生错误:', error)
    }
  }
}

const isNotEmpty = (value) => { 
    return value !== "" && value !== undefined && value !== null
}

const success = () => {
    if (
        isNotEmpty(email.value) && isNotEmpty(Password.value) && isNotEmpty(Name.value) && isNotEmpty(Sex.value) && isNotEmpty(Major.value) && isNotEmpty(Class.value) && isNotEmpty(ID.value)
    ) {
        open()
    } else {
        open3()
    }
}


</script>