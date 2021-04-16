import VueRouter from 'vue-router';
import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)
import firstPage from './components/pages/myFirstpage';
import newRoutePage from './components/pages/newRoutePage';

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