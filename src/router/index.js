import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard/Dashboard.vue'),
    },
    {
        path: '/project',
        redirect: '/dashboard',
    },
    {
        path: '/project/:projectId',
        component: () => import(/* webpackChunkName: 'project' */ '@/views/project/Project.vue'),
    },
    {
        path: '/tos',
        component: () => import(/* webpackChunkName: 'tos' */ '@/views/tos/Tos.vue'),
    },
    {
        // for 404 not found page
        path: '*',
        component: () => import(/* webpackChunkName: 'error' */ '@/views/error/Error.vue'),
    },
];

export default new VueRouter({
    routes,
});
