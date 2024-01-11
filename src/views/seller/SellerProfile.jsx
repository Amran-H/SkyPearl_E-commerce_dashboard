import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { RiImageAddFill } from 'react-icons/ri';
import { FadeLoader, PropagateLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { profile_image_upload, profile_info_add } from '../../store/Reducers/authReducer';
import { loaderStyle } from '../../utils/utils';

const SellerProfile = () => {

    const [state, setState] = useState({
        division: '',
        district: '',
        shopName: '',
        subDistrict: ''
    })

    const dispatch = useDispatch();
    const { userInfo, loader, successMessage } = useSelector(state => state.auth);
    const status = 'active';

    const add_image = (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData();
            formData.append('image', e.target.files[0])
            dispatch(profile_image_upload(formData))
        };
    };

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
        }
    }, [successMessage])

    const addShop = (e) => {
        e.preventDefault();
        dispatch(profile_info_add(state))
    }
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full  flex flex-wrap ' >
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 bg-[#f6f8fd] rounded-md '>

                        {/* image */}
                        <div className='flex justify-center items-center py-3'>
                            {
                                userInfo?.image
                                    ?
                                    <label htmlFor="img" className='h-[210px] w-[210px] relative   cursor-pointer overflow-hidden'>
                                        <img className='w-full h-full rounded-full object-cover' src={userInfo.image} alt="" />
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
                            <input onChange={add_image} type="file" className='hidden' id='img' />
                        </div>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex flex-col justify-between text-sm gap-2 p-4 rounded-md relative bg-slate-300'>
                                <span className='absolute top-2 right-2 cursor-pointer '><FaEdit size={20} color='blue' /></span>
                                <div className='flex gap-2'>
                                    <span>Name: </span>
                                    <span>{userInfo.name} </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>{userInfo.email} </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>{userInfo.role} </span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>{userInfo.status}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Payment account: </span>
                                    <p>
                                        {
                                            status === 'active'
                                                ? <span className='bg-red-500 text-xs cursor-pointer font-normal ml-2 px-2 py-.5 rounded-md text-white'>{userInfo.payment} </span>
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
                                userInfo?.shopInfo ?
                                    <div className='px-0 md:px-5 py-2'>
                                        <div className='flex flex-col justify-between text-sm gap-2 p-4 rounded-md relative bg-slate-300'>
                                            <span className='absolute top-2 right-2 cursor-pointer '><FaEdit size={20} color='blue' /></span>
                                            <div className='flex gap-2'>
                                                <span>Shop name: </span>
                                                <span>{userInfo?.shopInfo?.shopName}</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Division: </span>
                                                <span>{userInfo?.shopInfo?.division}</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>District: </span>
                                                <span>{userInfo?.shopInfo?.district} </span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span>Sub district: </span>
                                                <span>{userInfo?.shopInfo?.subDistrict}</span>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <form onSubmit={addShop}>

                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="shop">Shop name</label>
                                            <input value={state.shopName} onChange={inputHandle} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='Shop name' name='shopName' id='shop' />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="division">Division</label>
                                            <input value={state.division} onChange={inputHandle} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='Division name' name='division' id='division' />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="district">District</label>
                                            <input value={state.district} onChange={inputHandle} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='District name' name='district' id='district' />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-3'>
                                            <label htmlFor="sub">Sub district</label>
                                            <input value={state.subDistrict} onChange={inputHandle} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='Sub district' name='subDistrict' id='sub' />
                                        </div>

                                        <button disabled={loader ? true : false} className='mt-4 w-[150px] bg-[#006fff] rounded-[8px] hover:shadow-blue-500/20 hover:shadow-lg py-[7px]  font-semibold mb-3'>
                                            {
                                                loader ? <PropagateLoader
                                                    color='#fff'
                                                    size={15}
                                                    cssOverride={loaderStyle}
                                                /> : "Add Shop"
                                            }
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