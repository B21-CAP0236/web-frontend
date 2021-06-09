import { TambahBansos, AddBansos, AddLokasi, AddPenerima, AnalisaData, Peta, Bansos, Profile, Login, Home } from '../pages'

export const routes = [
    {
        path: '/tambah-bansos/bansos',
        component: AddBansos,
    },
    {
        path: '/tambah-bansos/penerima',
        component: AddPenerima,
    },
    {
        path: '/tambah-bansos/lokasi',
        component: AddLokasi,
    },
    {
        path: '/tambah-bansos',
        component: TambahBansos,
    },
    {
        path: '/tambah-bansos',
        component: TambahBansos,
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
        path: '/dashboard',
        component: Home,
    },
    {
        path: '/',
        component: Login,
    },
]