import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
    {
        id: 1,
        name: 'Sports'
    },
    {
        id: 2,
        name: 'T-Shirt'
    },
    {
        id: 3,
        name: 'Trouser'
    },
    {
        id: 4,
        name: 'Jeans'
    },
]

const AddProduct = () => {

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

    const [cateShow, setCateShow] = useState(false);
    const [category, setCategory] = useState('');
    const [allCategory, setAllCategory] = useState(categories);
    const [searchValue, setSearchValue] = useState('');

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

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>

                {/* headings */}
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-xl font-semibold '> Add Product</h1>
                    <Link className='bg-blue-500  hover:shadow-lg hover:shadow-blue-500/50 rounded-md px-7 py-2 my-2 text-white' to='/seller/dashboard/products'>All products</Link>
                </div>

                {/* product form */}
                <div>
                    <form>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product name</label>
                                <input onChange={inputHandle} value={state.name} className=' px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='product name' name='name' id='name' />
                            </div>

                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product brand</label>
                                <input onChange={inputHandle} value={state.brand} className=' px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='product brand' name='brand' id='brand' />
                            </div>
                        </div>

                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input onChange={inputHandle} onClick={() => setCateShow(!cateShow)} value={category} readOnly className=' px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" placeholder='--select category--' id='category' />
                                <div className={`absolute top-[101%] bg-white shadow-lg w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
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
                                <input onChange={inputHandle} value={state.stock} className=' px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700 ' type="number" placeholder='product stock' name='stock' id='stock' min={0} />
                            </div>
                        </div>

                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full '>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price</label>
                                <input onChange={inputHandle} value={state.price} className=' px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="number" placeholder='Price' name='price' id='price' />
                            </div>

                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="discount">Discount</label>
                                <input onChange={inputHandle} value={state.discount} className=' px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="number" placeholder='Discount percentage' name='discount' id='discount' />
                            </div>
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor="price">Description</label>
                            <textarea rows={4} onChange={inputHandle} value={state.description} className=' px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' placeholder='Description' name='description' id='description'> </textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct