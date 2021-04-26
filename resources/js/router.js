import VueRouter from 'vue-router';
import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)
import firstPage from './components/pages/myFirstpage';
import newRoutePage from './components/pages/newRoutePage';
import hooks from './components/pages/basic/hooks';
import methods from './components/pages/basic/methods';
const routes = [
    {
        path:'/firstpage',
        component: firstPage,
        name: 'dashboard',
        meta: {
            title: 'Dashboard'
        }
    },
    {
        path:'/secondpage',
        component: newRoutePage

    },
    {
        path:'/testpage',
        component: newRoutePage

    },

    {
        path:'/hooks',
        component: hooks

    },
    {
        path:'/methods',
        component: methods

    },
]
// export default new Router({
//     mode:'history',
//     routes
// })

const router = new VueRouter({
    routes,
    mode: 'history'
});



export default router;