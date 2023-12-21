<template>
    <div class="dropdown-container">
        <el-dropdown>
            <span class="el-dropdown-link">
                Message
                <el-icon><arrow-down /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-dropdown>
            <span class="el-dropdown-link">
                UserName
                <el-icon><arrow-down /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
    import { ArrowDown } from '@element-plus/icons-vue'

    export default {
        components: {
            'arrow-down': ArrowDown
        }
    }
</script>

<style scoped>
    .dropdown-container {
        display: flex;
        justify-content: flex-end; /* 将内容推向右边 */
        padding-right: 20px; /* 或者其他你需要的值 */
    }

    .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
        margin: 10px;
    }
</style>
