import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'Home',
      path: '/',
      component: () => import('~/pages/Home.vue').then(r => r.default || r)
    },
    {
        name: 'Institute',
        path: '/Institute',
        component: () => import('~/pages/Institute.vue').then(r => r.default || r)
    },
    {
        name: 'Management',
        path: '/Management',
        component: () => import('~/pages/Management.vue').then(r => r.default || r)
    },
    {
        name: 'Academics',
        path: '/Academics',
        component: () => import('~/pages/Academics.vue').then(r => r.default || r)
    },
    {
        name: 'Research & Development',
        path: '/Research',
        component: () => import('~/pages/Research.vue').then(r => r.default || r)
    },
    {
        name: 'Departments',
        path: '/Departments',
        component: () => import('~/pages/Departments.vue').then(r => r.default || r)
    },
    {
        name: 'Admission',
        path: '/Admission',
        component: () => import('~/pages/Admission.vue').then(r => r.default || r)
    },
    {
        name: 'Library',
        path: '/Library',
        component: () => import('~/pages/Library.vue').then(r => r.default || r)
    },
  ],
}
