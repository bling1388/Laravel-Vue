import { createRouter, createWebHistory } from "vue-router";

//admin

import homeAdminIndex from '../componets/admin/home/index.vue'

//pages
import homePagesIndex from '../componets/pages/home/index.vue'

//norfound
import notFound from '../componets/notFound.vue'

//login
import login from '../componets/auth/login.vue'

const routes = [

    //admin
    {
        path: '/admin/home',
        component: homeAdminIndex,
        meta:{
            requiresAuth:true
        }
    },

    //pages
    {
        path: '/',
        name: 'Home',
        component: homePagesIndex,
        meta:{
            requiresAuth:false
        }
    },

    //login
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta:{
            requiresAuth:false
        }
    },

    //notfound
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound,
        meta:{
            requiresAuth:false
        }
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to,from) =>{
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        return {name: 'Login'}
    }

    if (to.meta.requiresAuth == false && localStorage.getItem('token')) {
        return {name: 'adminHome'}
    }

})


export default router
