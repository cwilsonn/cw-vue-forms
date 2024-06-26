import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('@pages/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
export { routes };
