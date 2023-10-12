import React, { useState } from 'react'
import Search from '../components/Search'
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Pagination from '../Pagination';

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md mb-6'>
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />

                {/* table */}
                <div className='relative overflow-x-auto mt-6'>
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
                                        <Link to={`/seller/dashboard/order/details/12`} className='hover:shadow-sm hover:shadow-green-500/50 pb-3'><FaEye size={24} color='green' /></Link>

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                {/* pagination */}
                <div className='w-full mt-4 flex justify-end bottom-4 right-4'>
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        perPage={perPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Orders