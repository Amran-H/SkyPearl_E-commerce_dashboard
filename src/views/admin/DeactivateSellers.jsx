import React, { useState } from 'react';
import Pagination from '../Pagination';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const DeactivateSellers = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

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
                                <th scope='col' className='py-3 px-4'>Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody className='text-sm'>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => <tr key={i} className='border-b border-slate-400'>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>{d}</td>
                                    <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap text-center flex justify-center items-center'><img className='h-[45px] w-[45px] rounded-sm ' src={`http://localhost:3000/images/seller.png`} alt="" /></td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Amran Hossain</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>amran.h.akash@gmail.com</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Active</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Deactivated</span>
                                    </td>

                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap flex justify-center items-center'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link className=' hover:shadow-yellow-500/50 pb-3 '><FaEye size={20} color='blue' /></Link>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

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
    );
};

export default DeactivateSellers;