import { AiOutlineDashboard, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory, BiLoaderCircle } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsChat, BsCurrencyDollar, BsDatabaseAdd } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { HiOutlineWallet } from "react-icons/hi2";
import { RiProductHuntLine } from "react-icons/ri";
import { FaRegUser, FaUser } from "react-icons/fa";

export const allNav = [
    // admin dashboard
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShopping />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Payment request',
        icon: <BsCurrencyDollar />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactivate sellers',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/deactivate-sellers'
    },
    {
        id: 7,
        title: 'Sellers request',
        icon: <BiLoaderCircle />,
        role: 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id: 8,
        title: 'Chat with seller',
        icon: <CiChat1 />,
        role: 'admin',
        path: '/admin/dashboard/chat-seller'
    },

    // seller dashboard
    {
        id: 9,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <BsDatabaseAdd />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <RiProductHuntLine />,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 12,
        title: 'Discounted Product',
        icon: <RiProductHuntLine />,
        role: 'seller',
        path: '/seller/dashboard/discounted-products'
    },
    {
        id: 13,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14,
        title: 'Payments',
        icon: <BsCurrencyDollar />,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15,
        title: 'Chat wit Customer',
        icon: <BsChat />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id: 16,
        title: 'Chat with Support',
        icon: <CiChat1 />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 17,
        title: 'Profile',
        icon: <FaRegUser />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },

];