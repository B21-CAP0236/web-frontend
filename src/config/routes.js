import { Akun, AnalisaData, Peta, Bansos, Profile, Login, Home } from '../pages'

export const routes = [
    {
        path: '/akun',
        component: Akun,
    },
    {
        path: '/analisa-data',
        component: AnalisaData,
    },
    {
        path: '/peta',
        component: Peta,
    },
    {
        path: '/bansos',
        component: Bansos,
    },
    {
        path: '/analisa-data',
        component: AnalisaData,
    },
    {
        path: '/profile',
        component: Profile,
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