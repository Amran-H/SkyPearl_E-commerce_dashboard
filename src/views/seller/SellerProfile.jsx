import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { RiImageAddFill } from 'react-icons/ri';
import { FadeLoader } from 'react-spinners';

const SellerProfile = () => {

    const image = true;
    const loader = false;
    const status = 'active';
    const userInfo = true;

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full  flex flex-wrap ' >
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 bg-[#f6f8fd] rounded-md '>

                        {/* image */}
                        <div className='flex justify-center items-center py-3'>
                            {
                                image
                                    ?
                                    <label htmlFor="img" className='h-[210px] w-[210px] relative   cursor-pointer overflow-hidden'>
                                        <img className='w-full h-full rounded-full' src={'http://localhost:3000/images/admin.jpg'} alt="" />
                                        {
                                            loader && <div className='absolute left-0 top-0 opacity-70 w-full h-full flex justify-center items-center z-20 bg-slate-400 rounded-full'>
                                                <span>
                                                    <FadeLoader />
                                                </span>
                                            </div>
                                        }
                                    </label>
                                    :
                                    <label className='flex justify-center items-center flex-col h-[210px] w-[210px] rounded-full cursor-pointer border border-dashed hover:border-indigo-500 border-black relative' htmlFor="img">
                                        <span><RiImageAddFill /></span>
                                        <span>Select image</span>
                                        {
                                            loader && <div className='absolute left-0 top-0 opacity-70 w-full h-full flex justify-center items-center z-20'>
                                                <span>
                                                    <FadeLoader />
                                                </span>
                                            </div>
                                        }
                                    </label>
                            }
                            <input type="file" className='hidden' id='img' />
                        </div>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex flex-col justify-between text-sm gap-2 p-4 rounded-md relative bg-slate-300'>
                                <span className='absolute top-2 right-2 cursor-pointer '><FaEdit size={20} color='blue' /></span>
                                <div className='flex gap-2'>
                                    <span>Name: </span>
                                    <span>Amran Hossain </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>amran.h.aksh@gmail.com </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>Seller </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>Active</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Payment account: </span>
                                    <p>
                                        {
                                            status === 'active'
                                                ? <span className='bg-green-500 text-xs cursor-pointer font-normal ml-2 px-2 py-.5 rounded-md text-white'>Pending </span>
                                                :
                                                <span className='bg-blue-500 text-xs cursor-pointer font-normal ml-2 px-2 py-.5 rounded-md text-white'>
                                                    Click to activate
                                                </span>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='px-0  py-2'>
                            {
                                userInfo ?
                                    <div className='px-0 md:px-5 py-2'>
                                        <div className='flex flex-col justify-between text-sm gap-2 p-4 rounded-md relative bg-slate-300'>
                                            <span className='absolute top-2 right-2 cursor-pointer '><FaEdit size={20} color='blue' /></span>
                                            <div className='flex gap-2'>
                                                <span>Shop name: </span>
                                                <span>Amran  </span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Division: </span>
                                                <span>CTG</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>District: </span>
                                                <span>Feni </span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Sub district: </span>
                                                <span>Chhagalnaiya</span>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <form action="">

                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="shop">Shop name</label>
                                            <input className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='Shop name' name='shopName' id='shop' />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="division">Division</label>
                                            <input className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='Division name' name='division' id='division' />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="district">District</label>
                                            <input className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='District name' name='district' id='district' />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="sub">Sub district</label>
                                            <input className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='Sub district' name='subDistrict' id='sub' />
                                        </div>
                                        <button className='bg-blue-500 sm:w-auto w-full hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-2 my-3'>
                                            Add
                                        </button>
                                    </form>

                            }
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-6/12'>
                    <div className='w-full pl-0 md:pl-7 mt-6 md:mt-0  '>
                        <div className='bg-[#f6f8fd]   p-4 rounded-md'>
                            <h1 className='text-lg font-bold mb-3'> Change Password</h1>

                            <form action="">
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="email">Email</label>
                                    <input className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="email" placeholder='Email' name='email' id='email' />
                                </div>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="o_password">Old Password</label>
                                    <input className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="password" placeholder='Old Password' name='o_password' id='o_password' />
                                </div>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="n_password">New Password</label>
                                    <input className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="password" placeholder='New Password' name='n_password' id='n_password' />
                                </div>
                                <button className='bg-blue-500 sm:w-auto w-full hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-2 mt-5'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerProfile