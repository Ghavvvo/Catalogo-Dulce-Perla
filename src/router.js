import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/components/Landing.vue') },
    {path: '/Catalogo', component: () => import('@/components/Catalogo.vue')},
  { path: '/Contactos', component: () => import('@/components/Contactos.vue') },
    { path:  "/Categorias/:id", component: () => import('@/components/Fotos.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router