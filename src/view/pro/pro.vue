<template>
    <div class="container">
        <div class="left">
            <p class="title">在线转换 HTML</p>
            <textarea class="edit" v-model="mdtext" @input="mdchange" placeholder="在这里输入 Markdown..."></textarea>
            <button class="save-btn" @click="saveContent">保存内容</button>
        </div>
        <div class="right">
            <p class="title">MD 文档编辑器</p>
            <div id="show" ref="show" class="preview"></div>
        </div>
    </div>
</template>

<script setup>
import { marked } from 'marked'
import { onMounted, ref } from 'vue'

const mdtext = ref('')
const show = ref(null)

// 从 localStorage 加载保存的内容
onMounted(() => {
    const savedText = localStorage.getItem('mdContent')
    if (savedText) {
        mdtext.value = savedText
        mdchange()
    }
})

const mdchange = () => {
    const html_md = marked.parse(mdtext.value)
    show.value.innerHTML = html_md
}

const saveContent = () => {
    localStorage.setItem('mdContent', mdtext.value)
    alert('内容已保存！')
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    height: 80vh;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.left, .right {
    flex: 1;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
}

.left {
    .edit {
        width: 100%;
        height: calc(100% - 40px); /* Adjusted for the button */
        margin: 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 14px;
        resize: none;
    }
    
    .save-btn {
        margin-top: 10px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007BFF;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        
        &:hover {
            background-color: #0056b3;
        }
    }
}

.right {
    .preview {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #ddd;
        padding: 10px;
        overflow-y: auto;
        background-color: #f9f9f9;
    }
    
    .title {
        font-size: 18px;
        margin-bottom: 10px;
    }
}
</style>