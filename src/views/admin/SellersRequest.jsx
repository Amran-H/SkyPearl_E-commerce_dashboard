import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_seller_request } from '../../store/Reducers/sellerReducer';
import Search from '../components/Search';

const SellersRequest = () => {

    const dispatch = useDispatch()
    const { sellerRequests, totalSellerRequests } = useSelector(state => state.seller)
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(get_seller_request({
            perPage,
            searchValue,
            page: currentPage
        }))

    }, [currentPage, perPage, searchValue])


    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>
                {/* heading */}
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />

                {
                    totalSellerRequests <= 0 ? <span className='font-bold flex justify-center text-xl text-red-600 pb-3'>No new Requests found</span> : ""
                }

                {/* table */}
                < div className='relative overflow-x-auto'>
                    <table className='w-full text-sm  text-black text-center object-center'>
                        <thead className='text-sm text-black uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Email</th>
                                <th scope='col' className='py-3 px-4'>Payment-status</th>
                                <th scope='col' className='py-3 px-4'>Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {
                                // [1, 2, 3, 4, 5].map((d, i) => <tr key={i} className='border-b border-slate-400'>{static way}

                                sellerRequests.map((seller, i) =>
                                    <tr key={i} className='border-b border-slate-400'>
                                        <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>{i + 1}</td>
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
                                            <span>{seller.status}</span>
                                        </td>

                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap flex justify-center items-center'>
                                            <div className='flex justify-start items-center gap-4'>
                                                <Link to={`/admin/dashboard/seller/details/${seller._id}`} className='pb-3 '><button className='bg-green-500 px-[7px] py-[4px] rounded-md text-xs hover:shadow-lg hover:shadow-green-400'>View</button></Link>
                                            </div>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                {/* pagination */}
                {
                    totalSellerRequests <= perPage ? "" : <div className='w-full mt-4 flex justify-end bottom-4 right-4'>
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
        </div >
    );
};

export default SellersRequest;