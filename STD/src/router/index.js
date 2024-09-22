import { createRouter, createWebHistory } from 'vue-router'
//  import HomeView from '../views/HomeView.vue'
import Home from "../components/pages/Home.vue";
import Catalog from "@/components/pages/Catalog.vue"
import Product from '@/components/pages/Product.vue';
import Order from "@/components/pages/Order.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:'/home'
      
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog

      
    },
    // {
    //   path: '/contacts',
    //   name: 'constacts',
    //   component: Contacts
 
      
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: cart

      
    // },
    {
      path: '/product/:id', ///:id
      name: 'product',
      component: Product,
      props: true

      
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})

export default router
