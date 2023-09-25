import { lazy } from "react";
import PaymentRequest from "../../views/admin/PaymentRequest";
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../views/admin/Orders'));
const Category = lazy(() => import('../../views/admin/Category'));
const Sellers = lazy(() => import('../../views/admin/Sellers'));

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard></AdminDashboard>,
        role: "admin"
    },
    {
        path: 'admin/dashboard/orders',
        element: <Orders />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/category',
        element: <Category />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/sellers',
        element: <Sellers />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/payment-request',
        element: <PaymentRequest />,
        role: "admin"
    },
]

// module.exports = adminRoutes