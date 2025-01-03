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
            },
            {
              path: '/blog/:id',
              name: 'blog-detail',
              meta: {
                title: '博客 | 博客详情'
              },
              component: () => import('@/views/blog/_components/BlogDetail.vue')
            }
          ]
        },
        {
          path: '/gallery',
          name: 'gallery',
          meta: {
            title: '画廊'
          },
          component: () => import('@/views/gallery/index.vue')
        },
        {
          path: '/friends',
          name: 'friend',
          meta: {
            title: '友链'
          },
          component: () => import('@/views/friend/index.vue')
        },
        {
          path: '/about',
          name: 'about',
          meta: {
            title: '关于'
          },
          component: () => import('@/views/about/index.vue')
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
