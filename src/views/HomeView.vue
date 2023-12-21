<template>
    <el-main>
        <div class="home-view">
            <!-- 卡片和图表的布局 -->
            <echart-component></echart-component>
            <!-- 其他内容 -->
        </div>
    </el-main>
</template>

<script>
    import EchartComponent from '../components/EchartComponent.vue';

    export default {
        components: {
            EchartComponent
        }
    }
</script>

<style scoped>
    .home-view {
        /* 定义首页视图的样式 */
    }
</style>
