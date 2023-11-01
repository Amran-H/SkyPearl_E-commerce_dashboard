import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../../store/Reducers/productReducer';

const Products = () => {

    const dispatch = useDispatch()
    const { products, totalProduct } = useSelector(state => state.product)


    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);

    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_products(obj))
    }, [searchValue, currentPage, perPage])

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md mb-6'>
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />

                {totalProduct > 0
                    ?
                    /* table */
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
                                    products.map((product, i) => <tr key={i} className='border-b border-slate-400'>
                                        <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap'>{i + 1}</td>
                                        <td scope='row' className='py-3 px-4 font-medium  whitespace-nowrap text-center flex justify-center items-center'><img className='h-[45px] w-[45px] rounded-sm ' src={product.images[0]} alt="" /></td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <span>{product?.name?.slice(0, 16)}...</span>
                                        </td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <span>{product.category}</span>
                                        </td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <span>{product.brand}</span>
                                        </td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <span>${product.price}</span>
                                        </td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            {
                                                product.discount === 0
                                                    ? <span>No discount</span>
                                                    : <span>{product.discount}%</span>
                                            }
                                        </td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <span>{product.stock}</span>
                                        </td>

                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap flex justify-center items-center'>
                                            <div className='flex justify-start items-center gap-4'>
                                                <Link to={`/seller/dashboard/edit-product/${product._id}`} className='hover:shadow-lg hover:shadow-yellow-500/50 pb-3'><FaEdit size={20} color='blue' /></Link>
                                                <Link className='hover:shadow-sm hover:shadow-green-500/50 pb-3'><FaEye size={24} color='green' /></Link>
                                                <button className='hover:shadow-lg hover:shadow-red-500/50 pb-3'><FaTrash size={20} color='red' /> </button>
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='text-3xl font-bold flex justify-center items-center '>No products found</div>}

                {/* pagination */}
                {
                    totalProduct <= perPage ? "" : <div className='w-full mt-4 flex justify-end bottom-4 right-4'>
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
    )
}

export default Products