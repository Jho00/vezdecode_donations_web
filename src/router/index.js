import Vue from 'vue'
import VueRouter from 'vue-router'
import Donations from '../views/Donations'
import DonationType from "../views/DonationType"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Donations',
        components: {
            'content': Donations
        }
    },
    {
        path: "/donation-type",
        name: "DonationType",
        components: {
            'content': DonationType
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
