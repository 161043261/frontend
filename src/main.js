import Vue from "vue"
import App from "./App"
import VueRouter from "vue-router"
import Element from "element-ui"
import "../node_modules/element-ui/lib/theme-chalk/index.css"
import "./theme/index.css"

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{path: "/App", component: App, meta: {title: "Plant Disease Detection"},},], mode: "history"
})
Vue.component("App", App)
new Vue({
    el: "#app", router, render: h => h(App)
})
