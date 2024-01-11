import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_seller, messageClear, seller_status_update } from '../../store/Reducers/sellerReducer';
import toast from 'react-hot-toast';

const SellerDetails = () => {
    const { sellerId } = useParams()
    const dispatch = useDispatch()
    const { seller, successMessage } = useSelector(state => state.seller);

    const [status, setStatus] = useState('');
    const submit = (e) => {
        e.preventDefault();
        dispatch(seller_status_update({
            sellerId,
            status
        }))
    };

    useEffect(() => {
        dispatch(get_seller(sellerId))
    }, [sellerId]);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [successMessage]);

    useEffect(() => {
        if (seller) {
            setStatus(seller.status)
        }
    }, [seller]);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>
                <div className='w-full flex flex-wrap '>

                    {/* image */}
                    <div className='w-3/12 flex justify-center items-center  border'>
                        {
                            seller?.image
                                ?
                                <div>
                                    <img className='w-full h-[230px] object-cover' src={seller?.image} alt="" />
                                </div>
                                :
                                <span>Image not found</span>
                        }

                    </div>

                    {/* Basic info */}
                    <div className='w-4/12 '>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='flex justify-between flex-col text-sm sm:text-md p-4 gap-2 bg-slate-300 rounded-md'>
                                <div className='felx '>
                                    <span>Name: </span> <span>{seller.name}</span>
                                </div>
                                <div className='felx whitespace-nowrap'>
                                    <span>Email: </span> <span>{seller.email}</span>
                                </div>
                                <div className='felx '>
                                    <span>Role: </span> <span>{seller.role}</span>
                                </div>
                                <div className='felx '>
                                    <span>Status: </span> <span>{seller.status}</span>
                                </div>
                                <div className='felx '>
                                    <span>Payment Account: </span> <span>{seller.payment}</span>
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
                                    <span>Shop Name: </span> {seller?.shopInfo?.shopName ? <span>{seller?.shopInfo?.shopName}</span> : <span>Shop  not added</span>}
                                </div>
                                <div className='felx whitespace-nowrap'>
                                    <span>Division: </span> {seller?.shopInfo?.division ? <span>{seller?.shopInfo?.division}</span> : <span>Division  not added</span>}
                                </div>
                                <div className='felx '>
                                    <span>District: </span> {seller?.shopInfo?.district ? <span>{seller?.shopInfo?.district}</span> : <span>District  not added</span>}
                                </div>
                                <div className='felx '>
                                    <span>Upazilla: </span> {seller?.shopInfo?.subDistrict ? <span>{seller?.shopInfo?.subDistrict}</span> : <span>Upazilla  not added</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={submit}>
                        <div className='flex gap-4 py-3'>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} className='px-4 py-2 hover:bg-indigo-100 outline-none border border-slate-700 rounded-md bg-transparent' name="" id="" required>
                                <option value="">---select status---</option>
                                <option value="active">Activate</option>
                                <option value="deactive">Deactivate</option>
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