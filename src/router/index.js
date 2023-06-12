import { createRouter,createWebHashHistory } from 'vue-router'
const home = () => import('@/pages/home.vue')
const cart = () => import('@/pages/cart.vue')
const order = () => import('@/pages/order.vue')
const person = () => import('@/pages/person.vue')
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
        path: '/person',
        name: 'person',
        component: person,
        meta: {
          title: 'domain-person'
        },
    }
    ],
  scrollBehavior(to, from, savedPosition) {
       return { x: 0, y: 0 };
    }
  })
export default router;
