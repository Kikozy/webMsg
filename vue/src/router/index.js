import Login from '../view/Login/Login.vue'
import Home from '../view/Home/HomePage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        beforeEnter: (to,from,next)=>{
            let data = window.localStorage
            if(data.getItem('headImg') && data.getItem('userName')){
                next()
            }else{
                console.log('没有登录 滚去登录')
                next('/login')
            }
        }
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})
// router.beforeEach((to,from,next)=>{
//     console.log(to)
//     next()
// })
export default router