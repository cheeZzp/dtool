import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";

export  const routes : Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "index",
        redirect: '/login',
    },

    {
        path: '/login',
        name: "login",
        component: () => import("../views/login/index.vue"),
    }

]
const router =  createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;