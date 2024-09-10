<template>
    <!-- 最大的盒子 -->
    <div class="flex flex-col w-full h-screen gap-y-2 p-4">
        <!-- 上联盒子 -->
        <div class="flex flex-col flex-1 rounded-lg shadow-lg bg-white" style="flex:0.2">
            <!-- 搜索栏 -->
            <div class="flex-1 glass-class rounded-lg p-4">
                <!-- 标题 -->
                <div class="border-b border-indigo-600 pb-2 mb-4">
                    <p class="text-2xl font-semibold">查询列表</p>
                </div>
                <!-- 三个搜索框 -->
                <div class="flex flex-row gap-4">
                    <div class="flex-1 rounded-lg p-2 bg-white shadow-sm">
                        <div class="flex items-center h-12">
                            <span class="text-lg font-medium mr-2">姓名:</span>
                            <input type="text"
                                class="flex-1 border -lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                        </div>
                    </div>
                    <div class="flex-1 rounded-lg p-2 bg-white shadow-sm">
                        <div class="flex items-center h-12">
                            <span class="text-lg font-medium mr-2">班级:</span>
                            <input type="text"
                                class="flex-1 border p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                        </div>
                    </div>
                    <div class="flex-1 rounded-lg p-2 bg-white shadow-sm">
                        <div class="flex items-center h-12">
                            <span class="text-lg font-medium mr-2">专业:</span>
                            <input type="text"
                                class="flex-1 border p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 按钮栏 -->
            <div class="flex space-x-4 pt-4">
                <!-- 增加按钮 -->
                <button
                    class="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 hover:shadow-lg transition duration-300 ease-in-out transform translate-y-[-5px] translate-x-[5px]"
                    @click="add">
                    增加
                </button>
                <!-- 搜索按钮 -->
                <button
                    class="px-6 py-3 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 hover:shadow-lg transition duration-300 ease-in-out transform translate-y-[-5px] translate-x-[-5px]">
                    搜索
                </button>
            </div>
        </div>
        <!-- 列表栏目 -->
        <div class="flex-1 glass-class rounded-lg p-4">
            <el-table :data="tableData" style="width: 100%">
                <!-- 多选框列 -->
                <el-table-column type="selection" width="55" />

                <!-- 其他列 -->
                <el-table-column fixed prop="date" label="Date" width="150" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="state" label="State" width="120" />
                <el-table-column prop="city" label="City" width="120" />
                <el-table-column prop="address" label="Address" width="600" />
                <el-table-column prop="zip" label="Zip" width="120" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="handleClick(scope.$index)">修改</el-button>
                        <el-button type="danger" size="small" @click="handleDelete(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

    <!-- 新增对话框 -->
    <el-dialog v-model="dialogTableVisible" title="新增" width="800">
        <el-form :model="form" :rules="rules">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" type="email" />
            </el-form-item>
            <el-form-item label="名字" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="form.gender">
                    <el-radio label="男">男</el-radio>
                    <el-radio label="女">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="专业" prop="major">
                <el-input v-model="form.major" />
            </el-form-item>
            <el-form-item label="班级" prop="className">
                <el-input v-model="form.className" />
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="form.phone" type="tel" />
            </el-form-item>
            <el-form-item label="学号" prop="ID">
                <el-input v-model="form.ID" />
            </el-form-item>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </div>
        </el-form>
    </el-dialog>

    <!-- 修改对话框 -->
    <el-dialog v-model="dialogTableVisibleReview" title="修改" width="800" modal="true">
        <el-form :model="form" :rules="rules">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" type="email" />
            </el-form-item>
            <el-form-item label="名字" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="form.gender">
                    <el-radio label="男">男</el-radio>
                    <el-radio label="女">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="专业" prop="major">
                <el-input v-model="form.major" />
            </el-form-item>
            <el-form-item label="班级" prop="className">
                <el-input v-model="form.className" />
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="form.phone" type="tel" />
            </el-form-item>
            <el-form-item label="学号" prop="ID">
                <el-input v-model="form.ID" />
            </el-form-item>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>


<script setup>
import { reactive, ref } from 'vue';

// 新增对话框
const dialogTableVisible = ref(false)

const add = () => {
    dialogTableVisible.value = !dialogTableVisible.value
}

// 新增内容
const form = ref({
    name: "",
    email: '',
    gender: '',
    class: '',
    major: '',
    phone: '',
    ID: "",
});


// 表的修改部分
const rules = reactive({
    email: [
        // 必填规则
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },

        // 邮箱格式验证规则（内置的）
        { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },

        // 自定义验证规则
        {
            validator: (rule, value, callback) => {
                // 定义邮箱格式的正则表达式
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                // 如果值为空，返回必填错误
                if (!value) {
                    callback(new Error('邮箱地址不能为空'))
                }
                // 如果值不符合正则表达式，返回格式错误
                else if (!emailRegex.test(value)) {
                    callback(new Error('邮箱地址格式不正确'))
                }
                // 验证通过
                else {
                    callback()
                }
            },
            trigger: 'blur' // 在失去焦点时触发验证
        }
    ],
    name: [
        // 必填规则
        { required: true, message: '名字不允许为空', trigger: 'blur' },
    ],
    major: [
        { required: true, message: '专业不允许为空', trigger: 'blur' },
    ],
    className: [
        { required: true, message: '班级允许为空', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: '手机号不允许为空', trigger: 'blur' },
    ],
    ID: [
        { required: true, message: '学号不允许为空', trigger: 'blur' },
    ],
    // 对于选项的必填项
    gender: [
        { required: true, message: '性别不能为空', trigger: 'change' }
    ]
})

// 修改部分
const dialogTableVisible_review = ref(false)

// 表格内容
const handleClick = () => {
    // 修改表格
    dialogTableVisible_review.value = true
}
const handEdite = (row) => {
    console.log('点击删除 目前是第', row + '行')
}
const tableData = [

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

.button {
    margin-top: 10px;
    border: 1px solid red;
    width: 200px;
}

/* 禁用文本选择 */
* {
    user-select: none;
}
</style>