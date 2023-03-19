import { createRouter, createWebHistory } from "vue-router";

//admin

import homeAdminIndex from '../componets/admin/home/index.vue'

//pages
import homePagesIndex from '../componets/pages/home/index.vue'

//pages
import notFound from '../componets/notFound.vue'

const routes = [

    //admin
    {
        path: '/admin/home',
        component: homeAdminIndex
    },

    //pages
    {
        path: '/',
        component: homePagesIndex
    },

    //notfound
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
