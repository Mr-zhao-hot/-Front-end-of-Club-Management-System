<template>
    <!-- 最大的盒子 -->
    <div class="flex flex-col h-screen w-full">
        <!-- 第一行 -->
        <div class="h-20 glass-class">
            
        </div>
        <!-- 第二行 -->
        <!-- 标题 -->
        <div class="w-full h-12  relative top-1">
            <!-- 在这里添加标题内容 -->
            <div class="flex flex-row flex-nowrap w-full">
                <span class=" h-40 w-1/3" style="font-size: 18px; position: relative; top: 10px;">信息可视化</span>
            </div>
        </div>

        <!-- 第三行 -->
        <div class="flex flex-row flex-nowrap w-full  space-x-4 relative top-2">
            <!-- 第一个盒子 -->
            <div class="h-32 w-1/5 bg-white rounded-lg shadow-lg flex flex-col p-4 space-y-2">
                <!-- 第一行标题 -->
                <div class="text-slate-950 text-lg font-semibold">
                    人数总和
                </div>
                <!-- 第二行数字和icon -->
                <div class="flex flex-row h-24 items-center justify-between">
                    <!-- 数字 -->
                    <div class="w-2/3 flex items-center justify-center">
                        <p class="text-2xl font-bold text-slate-900">111</p>
                    </div>
                    <!-- icon -->
                    <div class="w-1/3 flex items-center justify-center">
                        <img src="./phone/people.png" alt="" class="h-16">
                    </div>
                </div>
            </div>

            <!-- 第二个盒子 -->
            <div class="h-32 w-1/5 bg-white rounded-lg shadow-lg flex flex-col p-4 space-y-2">
                <!-- 第一行标题 -->
                <div class="text-slate-950 text-lg font-semibold">
                    xxx
                </div>
                <!-- 第二行数字和icon -->
                <div class="flex flex-row h-24 items-center justify-between">
                    <!-- 数字 -->
                    <div class="w-2/3 flex items-center justify-center">
                        <p class="text-2xl font-bold text-slate-900"></p>
                    </div>
                    <!-- icon -->
                    <div class="w-1/3 flex items-center justify-center">
                        <img src="" alt="" class="h-16">
                    </div>
                </div>
            </div>
            <!-- 第三个盒子 -->
            <div class="h-32 w-1/5 bg-white rounded-lg shadow-lg flex flex-col p-4 space-y-2">
                <!-- 第一行标题 -->
                <div class="text-slate-950 text-lg font-semibold">
                    xxx
                </div>
                <!-- 第二行数字和icon -->
                <div class="flex flex-row h-24 items-center justify-between">
                    <!-- 数字 -->
                    <div class="w-2/3 flex items-center justify-center">
                        <p class="text-2xl font-bold text-slate-900"></p>
                    </div>
                    <!-- icon -->
                    <div class="w-1/3 flex items-center justify-center">
                        <img src="" alt="" class="">
                    </div>
                </div>
            </div>
        </div>

        <!-- 第四行 -->
        <!-- 标题 -->
        <div class="w-full h-12 relative top-5">
            <!-- 在这里添加标题内容 -->
            <div class="flex flex-row flex-nowrap w-full">
                <span class=" h-40 w-1/3" style="font-size: 18px; position: relative; top: 10px;">数据可视化</span>
            </div>
        </div>

        <!-- 第五行 -->
        <div class="flex flex-row flex-nowrap w-full  space-x-4 relative top-8">
            <!-- 第一个盒子 -->
            <div class=" h-40 w-1/3 glass-class -mt-4">
                <div ref="manorfemale" class="h-full" style="position: relative; top: -40px;"></div>
            </div>
            <!-- 第二个盒子 -->
            <div class=" h-40 w-1/3 glass-class -mt-4">
                <div ref="major" class="h-full" style="position: relative; top: -30px; right: 30px;"></div>
            </div>
            <!-- 第三个盒子 -->
            <div class=" h-40 w-1/3 glass-class -mt-4">
                <div ref="xxxs" class="h-full" style="position: relative; top: -30px;"></div>
            </div>
        </div>

        <!-- 第六行 -->
        <!-- 标题 -->
        <div class="w-full h-12  relative top-10">
            <!-- 在这里添加标题内容 -->
            <div class="flex flex-row flex-nowrap w-full">
                <span class=" h-40 w-7/12" style="font-size: 18px; position: relative; top: 10px;">成员面板</span>
                <span class=" h-40 w-6/12" style="font-size: 18px; position: relative; top: 10px;">活动中心</span>
            </div>
        </div>

        <!-- 第七行 -->
        <div class="flex flex-row flex-nowrap w-full space-x-4 relative top-12">
            <!-- 第一个盒子 -->
            <div class=" h-96 w-7/12 overflow-hidden glass-class">
                <div class="h-full overflow-y-auto">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column label="Date" width="120">
                            <template #default="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column property="name" label="Name" width="120" />
                        <el-table-column property="address" label="use show-overflow-tooltip" width="240"
                            show-overflow-tooltip />
                        <el-table-column property="address" label="address" />
                    </el-table>
                </div>
            </div>
            <!-- 第二个盒子 -->
            <div class=" h-96 w-6/12 glass-class">
                <el-empty description="description" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const manorfemale = ref(null);
const major = ref(null)
const xxxs = ref(null)

const initChart = () => {

    // 初始化性别统计图
    if (manorfemale.value) {
        const myChart = echarts.init(manorfemale.value);
        const option = {
            xAxis: {
                type: 'category',
                data: ['man', 'woman']
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {},
            series: [
                {
                    data: [10, 50],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }
            ]
        };
        myChart.setOption(option);
        myChart.resize({
            width: 500,
            height: 240
        });
    }

    // 初始化专业统计图
    if (major.value) {
        const pieChart = echarts.init(major.value); // 修改为 pieChart
        const option = {
            legend: {
                // Try 'horizontal'
                orient: 'vertical',
                right: -30,
                top: 'center'
            },
            tooltip: {},  // 富文本内容
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        pieChart.setOption(option);
        pieChart.resize({
            width: 500,
            height: 220
        });
    }

    // 初始化xxx统计图
    if (xxxs.value) {
        const lineChart = echarts.init(xxxs.value); // 使用更具描述性的变量名
        const option = {
            xAxis: {
                type: 'category', // 确保 xAxis 类型为 'category'
                data: ['xxx', 'xxxx']
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {}, // 显示 tooltip
            series: [
                {
                    data: [10, 50],
                    type: 'line', // 确保 series 类型为 'bar'
                }
            ]
        };
        lineChart.setOption(option);
        // 仅在必要时调整大小
        lineChart.resize({
            width: 500,
            height: 220
        });
    }
};



// 在组件挂载后初始化图表
onMounted(() => {
    initChart();
});



const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },

]
</script>

<style>
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