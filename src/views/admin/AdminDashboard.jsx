import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom'

const AdminDashboard = () => {

    // chart state
    const state = {
        series: [
            {
                name: 'Orders',
                data: [74, 45, 23, 55, 66, 62, 13, 67, 34, 57, 34, 65]
            },
            {
                name: 'Revenue',
                data: [54, 45, 13, 55, 66, 52, 11, 67, 34, 57, 34, 45]
            },
            {
                name: 'Sellers',
                data: [34, 45, 13, 55, 66, 52, 11, 67, 34, 57, 34, 45]
            },
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: 'black'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        }
                    }
                }
            ]
        }
    }

    return (
        <div className='px-2 md:px-7 py-5'>
            {/* Cards section */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>

                {/* total sales */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-3xl font-bold'>$6566</h2>
                        <span className='text-medium font-medium'>Total sales</span>
                    </div>
                    <div >
                        <BsCurrencyDollar size={40} className='text-[#28c76f] mr-3' />
                    </div>
                </div>

                {/* products */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-3xl font-bold'>20</h2>
                        <span className='text-medium font-medium'>Products</span>
                    </div>
                    <div >
                        <RiProductHuntLine size={40} className='text-[#28c76f] mr-3' />
                    </div>
                </div>

                {/* sellers */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span className='text-medium font-medium'>Sellers</span>
                    </div>
                    <div >
                        <FaUsers size={40} className='text-[#28c76f] mr-3' />
                    </div>
                </div>

                {/* Orders */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-3xl font-bold'>12</h2>
                        <span className='text-medium font-medium'>Orders</span>
                    </div>
                    <div className=''>
                        <AiOutlineShoppingCart size={40} className='text-[#28c76f] mr-3' />
                    </div>
                </div>
            </div>

            {/* chart and messages section section */}
            <div className='w-full flex flex-wrap mt-7'>

                {/* chart */}
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type='bar' height={350} />
                    </div>
                </div>

                {/* chat */}
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
                    <div className='w-full bg-[#f6f8fd] p-4 rounded-md text-black'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-lg text-black pb-3'>Recent seller's message</h2>
                            <Link className='font-semibold  text-sm text-black pb-3'>
                                View all
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 pt-6 text-black'>
                            <ol className='relative  border-l-2 border-slate-600 ml-4'>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'><img className='rounded-full w-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                                    <div className='p-3 bg-slate-200 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2 '>
                                            <Link className='text-md font-normal '>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>1 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-300 rounded-lg border border-slate-500'>
                                            Are you there?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'><img className='rounded-full w-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                                    <div className='p-3 bg-slate-200 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2 '>
                                            <Link className='text-md font-normal '>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 days ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-300 rounded-lg border border-slate-500'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'><img className='rounded-full w-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                                    <div className='p-3 bg-slate-200 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2 '>
                                            <Link className='text-md font-normal '>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 days ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-300 rounded-lg border border-slate-500'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* orders section */}
            <div className='w-full p-4 bg-[#f6f8fd]  rounded-md mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-black pb-3'>Recent Orders</h2>
                    <Link className='font-semibold  text-sm text-black pb-3'>
                        View all
                    </Link>
                </div>

                {/* table */}
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-black '>
                        <thead className='text-sm text-black uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price </th>
                                <th scope='col' className='py-3 px-4'>Payment-status</th>
                                <th scope='col' className='py-3 px-4'>Order status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => <tr key={i} className='border-b border-slate-400'>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>#23434534245235</td>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>$457</td>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>
                                        <span>Pending</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>
                                        <span>Pending</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>
                                        <Link>View</Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard