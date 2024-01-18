import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorldVue from '../components/HelloWorld.vue'
import AppLayoutVue from '../layouts/AppLayout.vue'
import AuthLayoutVue from '../layouts/AuthLayout.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   // パスのワイルドカードでhomeという名前付きルートに誘導する
  //   path: '/:catchAll(.*)',
  //   redirect: { name: 'home' }
  // },
  {
    // 名前つきルートを定義する
    name: 'root',
    // /に来たときのコンポーネントを定義する
    path: '/',
    component: AppLayoutVue,
    children: [
      {
        name: 'class',
        // /hello ではなく hello にすると親ルートの子のパスになる
        path: 'class',
        component: HelloWorldVue
      }
    ]
  },
  {
    name: 'auth',
    path: '/auth',
    component: AuthLayoutVue, // AuthLayoutVue
    children: [
      {
        name: 'signup',
        path: 'signup',
        component: HelloWorldVue // SignUpVue
      },
      {
        name: 'login',
        path: 'login',
        component: HelloWorldVue // LoginVue
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
