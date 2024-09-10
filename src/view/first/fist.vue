<template>
    <!-- 上下分三层 -->
    <div class="flex flex-col w-full h-screen gap-y-2">
        <!-- 第一层 -->
        <div class="border border-indigo-600 flex-1 glass-class" style="flex: 1;">

        </div>
        <!-- 第二层 -->
        <div class=" flex-1 gap-x-3" style="flex: 1.5; display: flex; position: relative; ">
            <!-- 左边部分 -->
            <div class="  h-full"
                style="flex: 2; overflow: hidden; display: flex; flex-direction: column;">
                <div class="" style="height: 400px">
                    <el-carousel height="auto" autoplay class="glass-class">
                        <el-carousel-item class="" style="height: 471px;">
                            <img src="" alt="">
                        </el-carousel-item>
                        <el-carousel-item class="" style="height: 471px;">
                            <img src="" alt="">
                        </el-carousel-item>
                        <el-carousel-item class="" style="height: 471px;">
                            <img src="" alt="">
                        </el-carousel-item>
                        <el-carousel-item class="" style="height: 471px;">
                            <img src="" alt="">
                        </el-carousel-item>
                        <el-carousel-item class="" style="height: 471px;">
                            <img src="" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <!-- 右边部分 -->
            <div class=" glass-class" style="flex: 1;">
                <div class="h-full">
                    <img :src="phote" alt="" style="" class="glass-class h-full" v-if="true">
                    <div style=" position: absolute; top: 0px; "
                        class="w-full  glass-class-weather flex flex-col h-full">
                        <div class=" flex items-center justify-center flex flex-col" style="flex: 2;">
                            <!-- 天气 -->
                            <div style="font-size: 36px;">
                                {{ we }}
                            </div>
                            <!-- 时间 -->
                            <div>
                                {{ curren }}
                            </div>
                        </div>
                        <div class=" flex items-center justify-center flex-col"
                            style="flex: 2;  color: gray; font-size: 46px;">
                            {{ hello }}
                        </div>
                        <div class=" flex items-center justify-center" style="flex: 1; font-size: 20px;">
                            {{ province }} &nbsp;&nbsp; {{ city }}
                        </div>
                        <div class=" flex items-center justify-center" style="flex: 1; font-size: 21px;">
                            <!-- 温度 和 风向 -->
                            {{ temperature }}℃ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ windDirection }}风
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" glass-class flex flex-col " style="flex: 1;">
            <!-- 公告项容器 -->
            <div class="flex flex-col  h-full p-4 space-y-2">
                <!-- 第一行 -->
                <div class="w-full  h-1/2 flex flex-row space-x-2">
                    <div class="border border-indigo-300 flex-1 glass-class p-4 hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                    <div
                        class="border border-indigo-300 flex-1 glass-class p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                    <div
                        class="border border-indigo-300 flex-1 glass-class p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                    <div
                        class="border border-indigo-300 flex-1 glass-class p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                </div>
                <!-- 第二行 -->
                <div class="w-full  h-1/2 flex flex-row space-x-2">
                    <div class="border border-indigo-300 flex-1 p-4 glass-class
                     hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                    <div class="border border-indigo-300 flex-1  p-4 glass-class
                         rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                    <div class="border border-indigo-300 flex-1  p-4 glass-class
                         rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                    <div class="border border-indigo-300 flex-1  p-4 glass-class
                         rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div class="font-semibold">公告标题 1</div>
                        <div class="mt-2 text-gray-700">公告内容 1</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>

import { ref, onMounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

// 招呼
const hello = ref("")

// 时间
const curren = ref("")
setInterval(() => {
    const data = new Date;
    curren.value = data
    const hours = data.getHours();
    if (hours >= 6 && hours < 12) {
        hello.value = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
        hello.value = 'Good Afternoon';
    } else if (hours >= 18 && hours < 22) {
        hello.value = 'Good Evening';
    } else {
        hello.value = 'Good Night';
    }
}, 1000)




// 天气组件 (高德地图 api接口)
const city = ref("")
const province = ref("")
const we = ref("")
const windDirection = ref("")
const windPower = ref("")
const temperature = ref("")
console.log(we);
// 定义获取天气信息的函数，参数为城市名称
const getWeather = (cityName) => {
    // 设置高德地图的安全码配置
    window._AMapSecurityConfig = {
        securityJsCode: "f54b300bf28d07a67cc3614fdfd38ccc",
    };

    // 加载高德地图的API，指定API密钥和版本
    AMapLoader.load({
        key: "0455be72f62f8398014a0ef987acf1f1", // 高德地图API密钥
        version: "2.0", // API版本
    })
        .then((AMap) => {
            // 加载天气插件
            AMap.plugin("AMap.Weather", function () {
                // 创建天气实例
                var weather = new AMap.Weather();
                // 获取实时天气信息，参数为城市名称
                weather.getLive(cityName, function (err, data) {
                    // 错误处理：如果发生错误，输出错误信息
                    if (err) {
                        console.error("Error fetching weather data:", err);
                    } else {
                        // 成功处理：输出天气信息并存储到本地存储
                        city.value = data.city
                        province.value = data.province
                        we.value = data.weather

                        windDirection.value = data.windDirection
                        // 风级
                        windPower.value = data.windPower
                        // 气温
                        temperature.value = data.temperature
                        localStorage.setItem("weather", JSON.stringify(data));
                    }
                });
            });
        });
};



// 天气壁纸
import rain from "./assert_weather/rain.png"
import more_sky from "./assert_weather/more_sky.png"
import sony from "./assert_weather/sony.png"
import sun from "./assert_weather/sun.png"
const phote = ref("")
const updatephote = () => {
    switch (we.value) {
        case '晴':
            phote.value = sun;
            break;
        case '小雨':
            phote.value = rain;
            break;
        case '雪':
            phote.value = sony;
            break;
        case '多云':
        case '阴':
            phote.value = more_sky;
            break;
        default:
            phote.value = sun;
    }
};

setInterval(()=>{
    updatephote()
},1000)

onMounted(() => {
    // 调用获取天气信息的函数，参数为城市名称“沈阳”
    getWeather("铁岭");
})


</script>
<style>
* {
    margin: 0px;
    padding: 0px;
}

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

/* 天气壁纸效果 */
.glass-class-dark {
    background: rgba(255, 255, 255, 0.8);
    /* 胶囊玻璃的透明背景色 */
    backdrop-filter: blur(px);
    /* 模糊度可以适当调节 */
    border-radius: 12px;
    /* 增加边角圆度 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2),
        /* 增加阴影 */
        0 0 15px rgba(255, 255, 255, 0.8);
    /* 添加光晕效果 */
    border: 1px solid rgba(255, 255, 255, 0.4);
    /* 添加细边框 */
}

.el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

/* 禁用文本选择 */
* {
    user-select: none;
}
</style>