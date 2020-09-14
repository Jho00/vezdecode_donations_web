import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./firebase/firebaseConfig"
import axios from "axios"

import "./assets/styles/fonts/fonts.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue } from 'bootstrap-vue'

axios.defaults.baseURL = "http://161.35.21.226:3000/api/web/"

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
