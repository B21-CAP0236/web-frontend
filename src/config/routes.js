import {Home, Login, About, Contacts} from '../pages'

export const routes = [
    {
        path: '/contacts',
        component: Contacts,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Home,
    },
]