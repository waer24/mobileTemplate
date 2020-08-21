import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter);

const routes = [
  /*   {
    path: '/',
    name: 'Home',
    component: () => import('./../components/home.vue'),
  }, */
  {
    path: '/home',
    component: () => import('./../components/home.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
  {
    path: '/about',
    component: () => import('./../components/about.vue'),
    meta: {
      index: 2, // 添加 meta 属性，约定 1 为第一级
    },
  },
];

const router = new vueRouter({ routes: routes });

export default router;
