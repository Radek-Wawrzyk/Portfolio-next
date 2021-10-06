import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "view-home" */ '@/views/Home.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "view-not-found" */ '@/views/NotFound/NotFound.vue'),
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    component: () => import(/* webpackChunkName: "view-style-guide" */ '@/views/StyleGuide/StyleGuide.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
