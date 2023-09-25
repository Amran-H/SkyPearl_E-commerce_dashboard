import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { BsImage } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

const Category = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className='px-2 lg:px-7 pt-5'>

            <div className='flex lg:hidden justify-between items-center mb-5 p-4 rounded-md'>
                <h1 className='font-semibold text-lg'>Categories</h1>
                <button onClick={() => setShow(true)} className='bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-4 py-2 cursor-pointer text-white rounded-sm text-sm'>Add</button>
            </div>

            <div className='flex flex-wrap w-full '>

                {/* left section */}
                <div className='w-full lg:w-7/12'>
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
                                        <th scope='col' className='py-3 px-4'>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) => <tr key={i} className='border-b border-slate-400'>
                                            <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>{d}</td>
                                            <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap text-center flex justify-center items-center'><img className='h-[45px] w-[45px] rounded-sm ' src={`http://localhost:3000/images/category/${d}.jpg`} alt="" /></td>
                                            <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                                <span>Sports</span>
                                            </td>

                                            <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap flex justify-center items-center'>
                                                <div className='flex justify-start items-center gap-4'>
                                                    <Link className='hover:shadow-lg hover:shadow-yellow-500/50 pb-3'><FaEdit size={20} color='blue' /></Link>
                                                    <Link className='hover:shadow-lg hover:shadow-red-500/50 pb-3'><FaTrash size={20} color='red' /> </Link>
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

                {/* right section */}
                <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0  fixed ${show ? 'right-0' : '-right-[340px]'} z-[999] top-0 transition-all duration-500`}>
                    <div className='w-full pl-6'>
                        <div className=' bg-[#f6f8fd] h-screen lg:h-auto px-2 py-2 lg:rounded-md'>
                            <div className='flex justify-between items-center mb-4 mt-4'>
                                <h1 className='font-semibold text-xl '>Add Category</h1>
                                <div onClick={() => setShow(false)} className='block lg:hidden text-white cursor-pointer'>
                                    <GrClose size={24} />
                                </div>
                            </div>
                            <form >
                                <div className='flex flex-col w-full gap-2 mb-3'>
                                    <label className='font-bold' htmlFor="name">Category name</label>
                                    <input className='px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text"
                                        id='name'
                                        name='category_name' placeholder='Category name' />
                                </div>
                                <div>
                                    <label className='font-bold flex flex-col justify-center items-center cursor-pointer border border-dashed border-black h-[238px] hover:border-indigo-500' htmlFor="image">
                                        <span><BsImage /></span>
                                        <span>Select image</span>
                                    </label>
                                    <input className='hidden' type="file" name='image' id='image' />
                                </div>
                                <div>
                                    <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-2 my-3'>
                                        Add Category
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;