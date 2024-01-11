import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_sellers } from '../../store/Reducers/sellerReducer';

const Sellers = () => {
    const dispatch = useDispatch()
    const { sellers, totalSeller } = useSelector(state => state.seller)

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_all_sellers(obj))
    }, [searchValue, currentPage, perPage])

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>
                {/* heading */}
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setPerPage(parseInt(e.target.value))} className='px-4 py-2 hover:bg-indigo-100 outline-none border border-slate-700 rounded-md bg-transparent'>
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                    </select>
                    <input className='px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" name='search' placeholder='search' />
                </div>

                {/* table */}
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm  text-black text-center object-center'>
                        <thead className='text-sm text-black uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image </th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Email</th>
                                <th scope='col' className='py-3 px-4'>Payment-status</th>
                                <th scope='col' className='py-3 px-4'>Division</th>
                                <th scope='col' className='py-3 px-4'>District</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody className='text-sm'>
                            {
                                sellers?.map((seller, i) => <tr key={i} className='border-b border-slate-400'>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>{i + 1}</td>
                                    <td scope='row' className='pt-3 px-4 font-medium  whitespace-nowrap text-center flex justify-center items-center'><img className='h-[45px] w-[45px] rounded-full ' src={seller?.image} alt="" /></td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{seller.name}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{seller.email}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{seller.payment}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{seller?.shopInfo?.division}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{seller?.shopInfo?.district}</span>
                                    </td>

                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap flex justify-center items-center'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link to={`/admin/dashboard/seller/details/${seller?._id}`} className='pb-3 '><button className='bg-green-500 px-[7px] py-[4px] rounded-md text-xs hover:shadow-lg hover:shadow-green-400'>View</button></Link>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                {/* pagination */}
                {
                    totalSeller <= perPage ? "" : <div className='w-full mt-4 flex justify-end bottom-4 right-4'>
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={50}
                            perPage={perPage}
                            showItem={3}
                        />
                    </div>
                }
            </div>
        </div>
    );
};

export default Sellers;