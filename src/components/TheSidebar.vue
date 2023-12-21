<template>
    <div>
        <div class="sidebar-header">System</div>
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 :collapse="isCollapse"
                 @open="handleOpen"
                 @close="handleClose">
            <el-menu-item index="1">
                <el-icon><icon-menu /></el-icon>
                <router-link to="/asset-registration">资产登记</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <router-link to="/checkout-return">领用退库</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="5">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Five</span>
            </el-menu-item>
            <el-menu-item index="6">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Six</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import {
        Menu as IconMenu,
    } from '@element-plus/icons-vue';

    export default {
        name: 'TheSidebar',
        components: {
            'icon-menu': IconMenu,
        },
        setup() {
            const isCollapse = ref(false); // Set default state to not collapsed

            const handleOpen = (key, keyPath) => {
                console.log(key, keyPath);
            };

            const handleClose = (key, keyPath) => {
                console.log(key, keyPath);
            };

            return {
                isCollapse,
                handleOpen,
                handleClose
            };
        }
    };
</script>

<style scoped>
    .sidebar-header {
        padding: 20px;
        font-size: 18px;
        color: black;
        text-align: center;
    }
    .el-menu-vertical-demo {
        width: 200px;
        height: 100vh; /* 设置高度为视口的高度 */
        border-right: 1px solid #eee; /* 右边界线 */
    }

    .el-menu-item, .el-sub-menu__title {

    }

    /* 如果您有额外的样式需要调整，可以在这里添加 */
</style>
