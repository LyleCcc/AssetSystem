import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AssetRegistration from '../views/AssetRegistration.vue';
import CheckoutReturn from '../views/CheckoutReturn.vue';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },

    {
        path: '/asset-registration',
        name: 'AssetRegistration',
        component: AssetRegistration
    },

    {
        path: '/checkout-return',
        name: 'CheckoutReturn',
        component: CheckoutReturn
    },
    // 其他路由...
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
