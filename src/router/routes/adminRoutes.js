import { lazy } from "react";
import PaymentRequest from "../../views/admin/PaymentRequest";
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));
const Orders = lazy(() => import('../../views/admin/Orders'));
const Category = lazy(() => import('../../views/admin/Category'));
const Sellers = lazy(() => import('../../views/admin/Sellers'));
const DeactivateSellers = lazy(() => import('../../views/admin/DeactivateSellers'));
const SellersRequest = lazy(() => import('../../views/admin/SellersRequest'));
const SellerDetails = lazy(() => import('../../views/admin/SellerDetails'));

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
    {
        path: 'admin/dashboard/deactivate-sellers',
        element: <DeactivateSellers />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/sellers-request',
        element: <SellersRequest />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/seller/details/:sellerId',
        element: <SellerDetails />,
        role: "admin"
    },
]

// module.exports = adminRoutes