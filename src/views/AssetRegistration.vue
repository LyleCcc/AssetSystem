<template>
    <el-main>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="资产名称" :rules="[{ required: true, message: '请输入资产名称', trigger: 'blur' }]">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="资产类型">
                <el-select v-model="form.type" placeholder="请选择">
                    <el-option label="电子设备" value="electronic"></el-option>
                    <el-option label="家具" value="furniture"></el-option>
                    <!-- 其他选项 -->
                </el-select>
            </el-form-item>

            <el-form-item label="购买日期">
                <el-date-picker v-model="form.purchaseDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>

            <el-form-item label="资产价值">
                <el-input v-model="form.value"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </el-main>
    <!-- 在下方添加 AssetList 组件以显示资产列表 -->
    <asset-list></asset-list>
</template>

<script>
    import AssetList from '../components/AssetList.vue';

    export default {
        name: 'AssetRegistration',
        components: {
            AssetList
        },
        data() {
            return {
                form: {
                    name: '',
                    type: '',
                    purchaseDate: '',
                    value: ''
                }
            };
        },
        methods: {
            async submitForm() {
                this.$refs.form.validate(async (valid) => {
                    if (valid) {
                        try {
                            // 发送数据到服务器的逻辑
                            // 假设您有一个函数 sendAssetData 发送数据
                            await sendAssetData(this.form);
                            alert('提交成功!');
                            // 可能需要更新 AssetList 组件显示的数据
                        } catch (error) {
                            console.error('提交失败:', error);
                        }
                    } else {
                        console.log('表单验证失败!');
                    }
                });
            },
            // ...其他方法
        }
    }
</script>
