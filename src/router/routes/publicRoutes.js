import { lazy } from "react";
import Home from "../../views/pages/Home";
const Login = lazy(() => import('../../views/auth/Login'))
const Register = lazy(() => import('../../views/auth/Register'))
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

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
]

export default publicRoutes