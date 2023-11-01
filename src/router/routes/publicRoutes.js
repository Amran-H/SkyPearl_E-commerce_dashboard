import { lazy } from "react";
const Login = lazy(() => import('../../views/auth/Login'))
const Register = lazy(() => import('../../views/auth/Register'))
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const Home = lazy(() => import("../../views/pages/Home"));
const Unauthorized = lazy(() => import("../../views/Unauthorized"));

const publicRoutes = [
    {
        path: '/',
        element: <Home></Home>,
        ability: ['admin', 'seller']
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/admin/login',
        element: <AdminLogin></AdminLogin>
    },
    {
        path: '/unauthorized',
        element: <Unauthorized></Unauthorized>
    },
]

export default publicRoutes