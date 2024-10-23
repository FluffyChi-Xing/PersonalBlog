import {createRouter, createWebHashHistory} from 'vue-router'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/blog',
          name: 'blog',
          meta: {
            title: '博客'

          },
          component: () => import('@/views/blog/index.vue'),
          children: [
            {
              path: '',
              name: 'blog-list',
              meta: {
                title: '博客 | 博客列表'
              },
              component: () => import('@/views/blog/_components/BlogList.vue')
            }
          ]
        }
      ]
    }
  ]
})


router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = String(to.meta.title)
  }
  if (to.path === '/') {
    return '/home'
  }
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
