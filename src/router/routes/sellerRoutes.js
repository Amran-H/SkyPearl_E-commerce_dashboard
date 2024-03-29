import { lazy } from "react";
const Home = lazy(() => import('../../views/pages/Home'));
const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('../../views/seller/AddProduct'));
const Products = lazy(() => import('../../views/seller/Products'));
const DiscountProducts = lazy(() => import('../../views/seller/DiscountProducts'));
const Orders = lazy(() => import('../../views/seller/Orders'));
const Payments = lazy(() => import('../../views/Payments'));
const ChatWithCustomer = lazy(() => import('../../views/seller/ChatWithCustomer'));
const ChatWithAdmin = lazy(() => import('../../views/seller/ChatWithAdmin'));
const SellerProfile = lazy(() => import('../../views/seller/SellerProfile'));
const EditProduct = lazy(() => import('../../views/seller/EditProduct'));
const OrderDetails = lazy(() => import('../../views/seller/OrderDetails'));
const Pending = lazy(() => import("../../views/Pending"));
const Inactive = lazy(() => import("../../views/Inactive"));

export const sellerRoutes = [

    {
        path: '/seller/account-pending',
        element: <Pending />,
        ability: 'seller'
    },
    {
        path: '/seller/account-inactive',
        element: <Inactive />,
        ability: 'seller'
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element: <EditProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/products',
        element: <Products />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/discounted-products',
        element: <DiscountProducts />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        role: 'seller',
        visibility: ['active', 'inactive']
    },
    {
        path: '/seller/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'seller',
        visibility: ['active', 'inactive']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payments />,
        role: 'seller',
        status: 'active'
    },

    {
        path: '/seller/dashboard/chat-support',
        element: <ChatWithAdmin />,
        role: 'seller',
        visibility: ['active', 'inactive', 'pending']
    },
    {
        path: '/seller/dashboard/chat-customer/:customerId',
        element: <ChatWithCustomer />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer',
        element: <ChatWithCustomer />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/profile',
        element: <SellerProfile />,
        role: 'seller',
        visibility: ['active', 'inactive', 'pending']
    },
]
