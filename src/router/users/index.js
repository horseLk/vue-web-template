const routes = [
  {
    path: '/user',
    name: '/user-list',
    component: () => import('@/views/layout/common'),
    redirect: '/user/list',
    children: [
      {
        path: 'list',
        name: 'user-list',
        component: () => import('@/views/user/list'),
        meta: { title: '用户列表', role: 'admin' }
      },
      {
        path: 'edit',
        name: 'user-edit',
        component: () => import('@/views/user/edit')
      }
    ]
  }
]

export default {
  routes
}
