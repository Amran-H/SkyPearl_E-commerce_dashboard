import React from 'react';

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>
                <div className='w-full flex flex-wrap '>

                    {/* image */}
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <div>
                            <img className='w-full h-[230px]' src="http://localhost:3000/images/admin.jpg" alt="" />
                        </div>
                    </div>

                    {/* Basic info */}
                    <div className='w-4/12 '>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='flex justify-between flex-col text-sm sm:text-md p-4 gap-2 bg-slate-300 rounded-md'>
                                <div className='felx '>
                                    <span>Name: </span> <span>Amran Hossain</span>
                                </div>
                                <div className='felx whitespace-nowrap'>
                                    <span>Email: </span> <span>amran.h.akash@gmail.com</span>
                                </div>
                                <div className='felx '>
                                    <span>Role: </span> <span>Seller</span>
                                </div>
                                <div className='felx '>
                                    <span>Status: </span> <span>Active</span>
                                </div>
                                <div className='felx '>
                                    <span>Payment Account: </span> <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* address */}
                    <div className='w-4/12 '>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Address</h2>
                            </div>
                            <div className='flex justify-between flex-col text-sm sm:text-md p-4 gap-2 bg-slate-300 rounded-md'>
                                <div className='felx '>
                                    <span>Shop Name: </span> <span>Amran Hossain</span>
                                </div>
                                <div className='felx whitespace-nowrap'>
                                    <span>Division: </span> <span>Chittagong</span>
                                </div>
                                <div className='felx '>
                                    <span>District: </span> <span>Feni</span>
                                </div>
                                <div className='felx '>
                                    <span>Upazilla: </span> <span>Chhagalnaiya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form >
                        <div className='flex gap-4 py-3'>
                            <select className='px-4 py-2 hover:bg-indigo-100 outline-none border border-slate-700 rounded-md bg-transparent' name="" id="">
                                <option value="">---select status---</option>
                                <option value="Activate">Activate</option>
                                <option value="Deactivate">Deactivate</option>
                            </select>
                            <button className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SellerDetails;