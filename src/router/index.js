import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '*',
        name: '404',
        component: () => import("../views/404/404.vue")
    }
]

const router = new VueRouter({
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from) => {

});

export default router
