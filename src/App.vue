<template>
    <el-container>
        <the-sidebar /> <!-- 确保只有这一个侧边栏的引用 -->
        <el-container>
            <el-header>
                <!-- 顶部导航栏内容 -->
                <the-navbar /> <!-- 如果您有顶部导航栏 -->
            </el-header>
            <!-- 面包屑导航 -->
            <el-breadcrumb>
                <el-breadcrumb-item v-for="(item, index) in breadcrumbList"
                                    :key="index"
                                    :to="item.path">
                    {{ item.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
            <sign />
            <!-- 主内容区 -->
            <el-main>
                <router-view /> <!-- 路由视图 -->
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import TheSidebar from './components/TheSidebar.vue';
    import TheNavbar from './components/TheNavbar.vue';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import TheSign from './components/TheSign.vue'; 

    export default {
        name: 'App',
        components: {
            TheSidebar,
            TheNavbar,
            TheSign
        },

    setup() {
    const route = useRoute();
    const routeNameMap = {

        'home': '首页',
    }

  const breadcrumbList = computed(() => {
    const pathArray = route.path.split('/').filter(p => p);

    let breadcrumbs = pathArray.map((path, index) => {
      return {
        name: routeNameMap[path] || path,
        path: '/' + pathArray.slice(0, index + 1).join('/')
      };
    });

    if (route.path !== '/') {
      breadcrumbs.unshift({
        name: '首页',
        path: '/'
      });
    }
    return breadcrumbs;
  });

    return {
      breadcrumbList
    };
  }
};
</script>

<style>
    /* 在这里添加全局 */
</style>