import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => {
    //     return import('@/views/Page1/index.vue')
    //   },
    //   children: [
    //     {
    //       path: 'パス文字列',
    //       name: 'ルーティング名',
    //       component: () => {
    //         return import('コンポーネントのパス')
    //       }
    //     }
    //   ]
    // }
  ]
})

export default router
