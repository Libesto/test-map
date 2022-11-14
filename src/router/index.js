import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/page-1',
            name: 'page-1',
            component: () => import('@/views/Page1View.vue')
        },
        {
            path: '/page-2',
            name: 'page-2',
            component: () => import('@/views/Page2View.vue')
        }
    ]
});

export default router;
