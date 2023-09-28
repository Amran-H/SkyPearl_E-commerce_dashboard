import React from 'react'

const OrderDetails = () => {
    return (
        <div className=' lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] sm:p-4 rounded-md'>
                <div className='flex justify-between items-center sm:p-4 p-1'>
                    <h2 className='text-xl font-semibold'> Order Details </h2>
                    <select className='px-4 py-2 hover:bg-indigo-100 outline-none border border-slate-700 rounded-md bg-transparent' name="" id="">
                        <option value="">Pending</option>
                        <option value="">Processing</option>
                        <option value="">Warehouse</option>
                        <option value="">Placed</option>
                        <option value="">Canceled</option>
                    </select>
                </div>

                <div className='sm:p-4 p-2'>
                    <div className='flex gap-2 text-lg '>
                        <h2>#234klj23i4h</h2>
                        <span>27 september 2023</span>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='sm:w-[35%] w-[45%]'>
                            <div className='pr-3 text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Deliver to: Amran Hossain</h2>
                                    <p>
                                        <span className='text-sm'>Chittagong, Feni, Chhagalnaiya, Dak Bangla Road</span>
                                    </p>
                                </div>

                                <div className='flex justify-start items-center gap-3 '>
                                    <h2>Payment status: </h2>
                                    <span className='text-base'>Paid</span>
                                </div>
                                <span> Price: $565</span>
                                <div className='mt-4 gap-4 flex flex-col'>
                                    <div className=' '>

                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/1.jpg`} alt="" />
                                            <div>
                                                <h2>Long large T-shirt</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>Tom Tailor </span>
                                                    <span className='text-lg'>Quantity: 2</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/1.jpg`} alt="" />
                                            <div>
                                                <h2>Long large T-shirt</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>Tom Tailor </span>
                                                    <span className='text-lg'>Quantity: 2</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/1.jpg`} alt="" />
                                            <div>
                                                <h2>Long large T-shirt</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>Tom Tailor </span>
                                                    <span className='text-lg'>Quantity: 2</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='sm:w-[65%] w-[55%]'>
                            <div className='pl-3'>
                                <div className='mt-4 flex flex-col'>


                                    <div className='text-color mb-6'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 1 order: </h2>
                                            <span>Pending</span>
                                        </div>

                                        <div className='flex gap-3 text-md mt-2'>
                                            <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/1.jpg`} alt="" />
                                            <div>
                                                <h2>Long large T-shirt</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>Tom Tailor </span>
                                                    <span className='text-lg'>Quantity: 2</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-color'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 2 order: </h2>
                                            <span>Pending</span>
                                        </div>

                                        <div className='flex gap-3 text-md mt-2'>
                                            <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/1.jpg`} alt="" />
                                            <div>
                                                <h2>Long large T-shirt</h2>
                                                <p>
                                                    <span>Brand: </span>
                                                    <span>Tom Tailor </span>
                                                    <span className='text-lg'>Quantity: 2</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails