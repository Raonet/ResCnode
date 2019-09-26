import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main.vue'
import Article from '@/components/article.vue'
import UserInfo from '@/components/userInfo.vue'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/main',
            name:'main',
            component:Main
        },
        {
            path:'/topic/:id',
            name:'postcontent',
            component:Article
        },
        {
            path:'/user/:name',
            name:'user_info',
            component:UserInfo
        },
        {
            path:'/',
            redirect:'/main'
        }
    ]
})