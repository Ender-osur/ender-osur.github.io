import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      redirect: '/',
    },
    {
      path: '/',
      name: '',
      component: () => import('../views/content/ContentView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/notFound/NotFoundView.vue'),
    },
  ],
});

export default router;
