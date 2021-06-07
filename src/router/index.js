import Vue from 'vue'
import VueRouter from 'vue-router'
import Agent from '../components/dataSource/agent'
import Storage from '../components/dataSource/storage'
import VirtualMachine from '../components/dataSource/virtualMachine'
import Blog from '../components/article/blog'
import Essays from '../components/article/essays'
import TechnicalArticles from '../components/article/technicalArticles'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Agent',
        name: 'Agent',
        component: Agent
    },
    {
        path: '/Storage',
        name: 'Storage',
        component: Storage
    },
    {
        path: '/VirtualMachine',
        name: 'VirtualMachine',
        component: VirtualMachine
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/Essays',
        name: 'Essays',
        component: Essays
    },
    {
        path: '/TechnicalArticles',
        name: 'TechnicalArticles',
        component: TechnicalArticles
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
