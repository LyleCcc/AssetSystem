import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入 router
import ElementPlus from 'element-plus'; // 引入 Element Plus
import 'element-plus/dist/index.css'; // 引入 Element Plus 样式

const app = createApp(App);

app.use(router); // 使用 router
app.use(ElementPlus); // 使用 Element Plus

app.mount('#app');
