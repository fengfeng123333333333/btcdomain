import { createRouter,createWebHashHistory } from 'vue-router'
const home = () => import('@/pages/home.vue')
const cart = () => import('@/pages/cart.vue')
const order = () => import('@/pages/order.vue')
const person = () => import('@/pages/person.vue')
const bsite = () => import('@/pages/bsite.vue')
const mobile_home = () => import('@/mobilePages/mobileHome.vue')
const mobile_cart = () => import('@/mobilePages/mobileCart.vue')
const mobile_person = () => import('@/mobilePages/mobilePerson.vue')
const mobile_order = () => import('@/mobilePages/mobileOrder.vue')
const history=createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
              title: 'domain-home'
            },
      },
      {
        path: '/cart',
        name: 'cart',
        component: cart,
        meta: {
          title: 'domain-cart'
        },
      },
      {
        path: '/order',
        name: 'order',
        component: order,
        meta: {
          title: 'domain-order'
        },
      },
      {
        path: '/bsite',
        name: 'bsite',
        component: bsite,
        meta: {
          title: 'domain-bsite'
        },
      },
      {
        path: '/person',
        name: 'person',
        component: person,
        meta: {
          title: 'domain-person'
        },
      },
      {
        path: '/mobile_home',
        name: 'mobile_home',
        component: mobile_home,
        meta: {
          title: 'domain-mobile_home'
        },
      },
      {
        path: '/mobile_cart',
        name: 'mobile_cart',
        component: mobile_cart,
        meta: {
          title: 'domain-mobile_cart'
        },
      },
      {
        path: '/mobile_order',
        name: 'mobile_order',
        component: mobile_order,
        meta: {
          title: 'domain-mobile_order'
        },
      },
      {
        path: '/mobile_person',
        name: 'mobile_person',
        component: mobile_person,
        meta: {
          title: 'domain-mobile_person'
        },
    }
  ],
  scrollBehavior(to, from, savedPosition) {
       return { x: 0, y: 0 };
    }
  })
export default router;
