import Vue from "vue"
import VueRouter from 'vue-router'
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import Download from "../special/download.vue"



Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: {
            name: "Home"
        }
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        path: "/money",
        name: "money",
        component: Money,
    }, {
        path: "/ious",
        name: "ious",
        component: Ious,
    }, {
        path: "/raise",
        name: "raise",
        component: Raise,
    }, {
        path: "/download",
        name: "download",
        component: Download,
    },
    {
        path: "*",
        redirect: {
            name: "Home"
        }
    }

]

const router = new VueRouter({
    routes
})

export default router