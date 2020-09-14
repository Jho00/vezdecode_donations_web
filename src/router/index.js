import Vue from 'vue'
import VueRouter from 'vue-router'
import Donations from '../views/Donations'
import DonationType from "../views/DonationType"
import Feed from "../views/Feed"
import AddDonation from "../views/AddDonation"
import Donation from "../views/Donation";

Vue.use(VueRouter)

const routes = [
    {
        path: '/donations',
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
    },
    {
        path: "/feed",
        name: "Feed",
        components: {
            'content': Feed
        }
    },
    {
        path: "/add-donation",
        name: "AddDonation",
        components: {
            'content': AddDonation
        }
    },
    {
        path: "/donation/:id",
        name: "Donation",
        components: {
            'content': Donation
        }
    },
    {
        path: '*',
        redirect: { name: 'Feed' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
