<template>
    <!-- 最大的盒子 -->
    <div class="flex h-screen w-full ">
        <!-- 中间的内容区 -->
        <div class="flex flex-col w-full h-full">
            <!-- 第一行 -->
            <div class="w-full h-36 flex flex-row space-x-1 mt-2 ">
                <!-- 第一个盒子  -->
                <a href="https://www.python.org/" class="w-1/4 glass-class flex flex-row">
                    <div class="w-1/2 flex items-center justify-center text-2xl">
                        Python
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <img src="./pt/python.png" alt="" class="h-16">
                    </div>
                </a>
                <!-- 第二个盒子 -->
                <a href="https://www.java.com/zh-CN/" class="w-1/4 glass-class flex flex-row">
                    <div class="w-1/2 flex items-center justify-center text-2xl">
                        Java
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <img src="./pt/java.png" alt="" class="h-16" style="width:160px ; height: 130px;">
                    </div>
                </a>
                <!-- 第三个盒子 -->
                <a href="https://react.docschina.org/learn" class="w-1/4 glass-class flex flex-row">
                    <div class="w-1/2 flex items-center justify-center text-2xl">
                        React
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <img src="./pt/react.png" alt="" class="h-16">
                    </div>
                </a>
                <!-- 第四个盒子 -->
                <a href="https://cn.vuejs.org/" class="w-1/4 glass-class flex flex-row">
                    <div class="w-1/2 flex items-center justify-center text-2xl">
                        Vue
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <img src="./pt/Vue.png" alt="" class="h-16" style="position: relative; top: 10px;">
                    </div>
                </a>
            </div>
            <!-- 第二行 -->
            <div class="w-full h-12 flex flex-row space-x-1 mt-2">
                <!-- 第一个盒子 -->
                <div class="w-8/12 h-full text-xl flex items-center justify-center">
                    题目区
                </div>
                <!-- 第二个盒子 -->
                <div class="w-5/12 h-full text-xl flex items-center justify-center">
                    刷题区 工具区
                </div>
            </div>
            <!-- 第三行 -->
            <div class="flex flex-row h-full mt-2 space-x-2">
                <!-- 第一个盒子 -->
                <div class="w-8/12">
                    <div class="demo-collapse glass-class">
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item title="Consistency" name="1">
                                <div>
                                    Consistent with real life: in line with the process and logic of real
                                    life, and comply with languages and habits that the users are used to;
                                </div>
                                <div>
                                    Consistent within interface: all elements should be consistent, such
                                    as: design style, icons and texts, position of elements, etc.
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
                <!-- 第二个盒子 -->
                <div class="w-5/12 flex flex-col space-y-2">
                    <div class="grid grid-cols-2 gap-4 overflow-auto">
                        <!-- 这里可以放置你的盒子元素 -->
                        <a href="https://www.iiice.cn/#/" class="glass-class-dark flex flex-row h-24">
                            <div class="w-full flex flex-col">
                                <div class="h-1/2 flex items-center justify-center font-medium">
                                    下次一定
                                </div>
                                <div class="h-1/2 flex items-center justify-center font-light text-sm text-slate-400">
                                    在线工具的集合
                                </div>
                            </div>
                        </a>
                        <a href="https://echarts.apache.org/zh/index.html" class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2 flex items-center justify-center font-medium">
                                    echart
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    统计图的网
                                </div>
                            </div>
                        </a>
                        <a href="https://www.nowcoder.com/" class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    牛客
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    刷题和找工作的网站
                                </div>

                            </div>
                        </a>
                        <a href="" class=" glass-class-dark flex flex-row">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    tailwindcss
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2 flex items-center justify-center font-light text-sm text-slate-400">
                                    (css快捷使用)
                                </div>

                            </div>
                        </a>
                        <a href="https://www.iconfont.cn/?spm=a313x.search_index.i3.d4d0a486a.42203a81xCeQLo"
                            class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    iconfont-阿里巴巴
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    icon图片
                                </div>

                            </div>
                        </a>
                        <a href="https://music.wandhi.com/#google_vignette"
                            class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    音乐下载器
                                </div <!-- 描述 -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    用于寻找歌曲地址
                                </div>

                            </div>
                        </a>
                        <a href="https://www.mianshiya.com/" class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    面试鸭刷题神器
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    (B站程序员鱼皮提供的刷题网站)
                                </div>

                            </div>
                        </a>
                        <a href="https://www.zcool.com.cn/" class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    zcool站酷
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    前端工程师的ui设计网站
                                </div>

                            </div>
                        </a>
                        <a href="https://js.design/home" class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    即使设计
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    (国内的ui设计)
                                </div>

                            </div>
                        </a>
                        <a href="https://www.csdn.net/" class=" glass-class-dark flex flex-row">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    CSDN
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    (国内程序员查资源网站)
                                </div>

                            </div>
                        </a>
                        <a href="https://github.com/" class=" glass-class-dark flex flex-row h-24">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2  flex items-center justify-center font-medium">
                                    github
                                </div>
                                <!-- 描述  -->
                                <div class="h-1/2  flex items-center justify-center font-light text-sm text-slate-400">
                                    全球程序员知名网站
                                </div>

                            </div>
                        </a>
                        <a href="" class=" glass-class-dark flex flex-row">
                            <div class="w-full  flex flex-col">
                                <!-- 标题  -->
                                <div class="h-1/2 border  flex items-center justify-center font-medium">
                                </div>
                                <!-- 描述  -->
                                <div
                                    class="h-1/2 border  flex items-center justify-center font-light text-sm text-slate-400">
                                </div>

                            </div>
                        </a>

                        <!-- 更多盒子... -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeNames: [],
        };
    },
    methods: {
        handleChange() {
            // ...你的逻辑
        },
    },
};
</script>

<style>
.glass-class {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
        0 0 10px rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-class-dark {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
        0 0 10px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
}

a {
    color: black;
}
</style>