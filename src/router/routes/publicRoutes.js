import { lazy } from "react";
const Login = lazy(() => import('../../views/auth/Login'))
const Register = lazy(() => import('../../views/auth/Register'))
const AdminLogin = lazy(() => ("../../views/auth/AdminLogin"));

const publicRoutes = [
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