import React, { useState } from 'react'
import Search from '../components/Search'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md mb-6'>
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />

                {/* table */}
                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm  text-black text-center object-center'>
                        <thead className='text-sm text-black uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image </th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => <tr key={i} className='border-b border-slate-400'>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>{d}</td>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap text-center flex justify-center items-center'><img className='h-[45px] w-[45px] rounded-sm ' src={`http://localhost:3000/images/category/${d}.jpg`} alt="" /></td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Men's super shirt</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Sports</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>SkyPearl</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>$230</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>5%</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>21</span>
                                    </td>

                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap flex justify-center items-center'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link to={`/seller/dashboard/edit-product/12`} className='hover:shadow-lg hover:shadow-yellow-500/50 pb-3'><FaEdit size={20} color='blue' /></Link>
                                            <Link className='hover:shadow-sm hover:shadow-green-500/50 pb-3'><FaEye size={24} color='green' /></Link>
                                            <button className='hover:shadow-lg hover:shadow-red-500/50 pb-3'><FaTrash size={20} color='red' /> </button>
                                        </div>
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

export default Products