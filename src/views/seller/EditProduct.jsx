import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { get_category } from '../../store/Reducers/categoryReducer';
import { useDispatch, useSelector } from 'react-redux';
import { add_product, get_product, messageClear, update_product, product_image_update } from '../../store/Reducers/productReducer';
import { PropagateLoader } from 'react-spinners';
import { loaderStyle } from '../../utils/utils';
import toast from 'react-hot-toast';

const EditProduct = () => {
    const { productId } = useParams();
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)
    const { product, loader, successMessage, errorMessage } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(get_category({
            searchValue: '',
            perPage: '',
            page: ''
        }))
    }, [])

    const [state, setState] = useState({
        name: '',
        description: '',
        discount: '',
        price: '',
        brand: '',
        stock: ''
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        dispatch(get_product(productId))
    }, [productId])


    const [cateShow, setCateShow] = useState(false);
    const [category, setCategory] = useState('');
    const [allCategory, setAllCategory] = useState(categories);
    const [searchValue, setSearchValue] = useState('');
    const [imageShow, setImageShow] = useState([]);

    const categorySearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
            setAllCategory(srcValue)
        } else {
            setAllCategory(categories)
        }
    };


    const changeImage = (img, files) => {
        if (files.length > 0) {
            dispatch(product_image_update({
                oldImage: img,
                newImage: files[0],
                productId
            }))
        }
    };

    useEffect(() => {
        setState({
            name: product.name,
            description: product.description,
            discount: product.discount,
            price: product.price,
            brand: product.brand,
            stock: product.stock
        });
        setCategory(product.category);
        setImageShow(product.images)
    }, [product]);

    useEffect(() => {
        if (categories.length > 0) {
            setAllCategory(categories)
        }
    }, [categories]);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage, dispatch]);

    const update = (e) => {
        e.preventDefault();
        state.productId = productId;
        dispatch(update_product(state))
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md mb-6'>

                {/* headings */}
                <div className='flex justify-between items-center pb-4 '>
                    <h1 className='text-xl font-bold '> Edit Product</h1>
                    <Link className='bg-blue-500  hover:shadow-lg hover:shadow-blue-500/50 rounded-md px-7 py-2 my-2 text-white' to='/seller/dashboard/products'>All products</Link>
                </div>

                {/* product form */}
                <div>
                    <form onSubmit={update}>
                        <div className='lg:flex gap-4 font-semibold'>
                            <div className='lg:w-[60%] bg-white p-4  mb-3 lg:mb-0 rounded-md shadow-lg'>
                                <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                                    <div className='flex flex-col w-full gap-1'>
                                        <label htmlFor="name">Product name</label>
                                        <input onChange={inputHandle} value={state.name} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='product name' name='name' id='name' />
                                    </div>

                                    <div className='flex flex-col w-full gap-1'>
                                        <label htmlFor="brand">Product brand</label>
                                        <input onChange={inputHandle} value={state.brand} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='product brand' name='brand' id='brand' />
                                    </div>
                                </div>

                                <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                                    <div className='flex flex-col w-full gap-1 relative'>
                                        <label htmlFor="category">Category</label>
                                        <input onChange={inputHandle} onClick={() => setCateShow(!cateShow)} value={category} readOnly className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='--select category--' id='category' />
                                        <div className={`absolute top-[101%] bg-slate-200 shadow-lg w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
                                            <div className='w-full px-4 py-2 fixed'>
                                                <input value={searchValue} onChange={categorySearch} className='w-full px-3 py-1 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700 overflow-hidden' type="text" placeholder='search' />
                                            </div>
                                            <div className='pt-14'></div>
                                            <div className='flex justify-start items-start flex-col h-[200px] overflow-x-scroll '>
                                                {allCategory.map((c, i) => <span className={`px-4 py-2 hover:bg-indigo-500 hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500'}`} onClick={() => {
                                                    setCateShow(false)
                                                    setCategory(c.name)
                                                    setSearchValue('')
                                                    setAllCategory(categories)
                                                }}>{c.name}</span>)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full gap-1 '>
                                        <label htmlFor="stock"> Stock</label>
                                        <input onChange={inputHandle} value={state.stock} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700 ' type="number" placeholder='product stock' name='stock' id='stock' min={0} />
                                    </div>
                                </div>

                                <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                                    <div className='flex flex-col w-full gap-1'>
                                        <label htmlFor="price">Price</label>
                                        <input onChange={inputHandle} value={state.price} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="number" placeholder='Price' name='price' id='price' />
                                    </div>

                                    <div className='flex flex-col w-full gap-1'>
                                        <label htmlFor="discount">Discount</label>
                                        <input onChange={inputHandle} value={state.discount} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="number" placeholder='Discount percentage' name='discount' id='discount' />
                                    </div>
                                </div>

                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor="price">Description</label>
                                    <textarea rows={4} onChange={inputHandle} value={state.description} className=' pl-3 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' placeholder='Description' name='description' id='description'> </textarea>
                                </div>
                            </div>

                            {/* image */}
                            <div className='lg:w-[40%] bg-white p-4 rounded-md shadow-lg'>
                                <h2 className='text-center'><label className='ml-2' htmlFor="">Add images</label></h2>
                                <div className='grid lg:grid-cols-2 gap-3 lg:justify-center lg:items-center md:grid-cols-3 sm:grid-cols-2 mt-1 ml-2'>
                                    {
                                        imageShow?.map((img, i) => <div>
                                            <label className='h-[180px]' htmlFor={i}><img className='w-full h-full rounded-sm cursor-pointer' src={img} alt="" /></label>
                                            <input onChange={(e) => changeImage(img, e.target.files)} type="file" id={i} className='hidden' />
                                        </div>)
                                    }

                                </div>

                            </div>
                        </div>

                        <div className='flex  font-bold'>
                            <button disabled={loader ? true : false} className='mt-4 w-[150px] bg-[#006fff] rounded-[8px] hover:shadow-blue-500/20 hover:shadow-lg py-[7px]  font-semibold mb-3'>
                                {
                                    loader ? <PropagateLoader
                                        color='#fff'
                                        size={15}
                                        cssOverride={loaderStyle}
                                    /> : "Update Product"
                                }
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditProduct