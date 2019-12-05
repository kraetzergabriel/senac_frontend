import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cardapio',
    component: () => import(/* webpackChunkName: "cardapio" */ '../components/cadastros/Cardapio.vue')
  },
  {
    path: '/cliente',
    component: () => import(/* webpackChunkName: "cliente" */ '../components/cadastros/Cliente.vue')
  },
  {
    path: '/componente',
    component: () => import(/* webpackChunkName: "componente" */ '../components/cadastros/Componente.vue')
  },
  {
    path: '/marmitas',
    component: () => import(/* webpackChunkName: "marmitas" */ '../components/consultas/Marmitas.vue')
  },
  {
    path: '/pedidos',
    component: () => import(/* webpackChunkName: "pedidos" */ '../components/consultas/Pedidos.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
