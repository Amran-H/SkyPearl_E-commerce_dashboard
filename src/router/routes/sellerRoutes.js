import { lazy } from "react";
const Home = lazy(() => import('../../views/pages/Home'))

export const sellerRoutes = [
    {
        path: '/',
        element: <Home></Home>,
        ability: ['admin', 'seller']
    },
]

// module.exports = sellerRoutes