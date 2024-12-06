import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue'; 
import MyWallet from '@/views/MyWallet.vue';

const routes = [
  {
    path: '/',
    name: 'LoginPage', 
    component: LoginPage,
  },
  {
    path: '/my-wallet',
    name: 'MyWallet',
    component: MyWallet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
