import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '工作台', icon: 'dashboard' }
    }]
  },

  {
    path: '/manage-base-info',
    component: Layout,
    redirect: '/manage-base-info/warehouse',
    name: 'manage-base-info',
    meta: { title: '基础信息管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'warehouse',
        name: 'warehouse',
        component: () => import('@/views/warehouse/index'),
        meta: { title: '仓库管理', icon: 'table' }
      },
      {
        path: 'area',
        name: 'area',
        component: () => import('@/views/tree/index'),
        meta: { title: '库区管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/manage-storage-in/list-in',
    component: Layout,
    redirect: '/manage-storage-in/list-in/lists',
    name: 'manage-storage-in',
    meta: { title: '入库管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'warehouse',
        name: 'warehouse',
        component: () => import('@/views/warehouse/index'),
        meta: { title: '仓库管理', icon: 'table' }
      },
      {
        path: 'area',
        name: 'area',
        component: () => import('@/views/tree/index'),
        meta: { title: '库区管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/manage-storage-out',
    component: Layout,
    redirect: '/manage-storage-outmanage-storage-in',
    name: 'manage-storage-out',
    meta: { title: '出库管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'warehouse',
        name: 'warehouse',
        component: () => import('@/views/warehouse/index'),
        meta: { title: '仓库管理', icon: 'table' }
      },
      {
        path: 'area',
        name: 'area',
        component: () => import('@/views/tree/index'),
        meta: { title: '库区管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/manage-business',
    component: Layout,
    redirect: '/manage-business/goods-owner',
    name: 'manage-business',
    meta: { title: '商务管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'goods-owner',
        name: 'goods-owner',
        component: () => import('@/views/goodsOwner/index'),
        meta: { title: '货主管理', icon: 'table' }
      },
      {
        path: 'task-picking',
        name: 'task-picking',
        component: () => import('@/views/taskPicking/index'),
        meta: { title: '承运商管理', icon: 'tree' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
