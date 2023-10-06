import React, { useState } from 'react'
import { BsArrowBarDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className='lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>

                {/* heading items */}
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setPerPage(parseInt(e.target.value))} className='px-4 py-2 hover:bg-indigo-100 outline-none border border-slate-700 rounded-md bg-transparent'>
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                    </select>
                    <input className='px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" name='search' placeholder='search' />
                </div>

                {/*  Order (table I guess)  */}
                <div className='relative mt-5 overflow-x-auto'>
                    {/* Order headings */}
                    <div className=''>
                        <div className=' uppercase md:border-b border-slate-400 font-bold'>
                            <div className='flex justify-between items-start md:gap-0 gap-3 '>
                                <div className='py-3 md:w-[25%]  md:mr-0 mr-[75px] whitespace-nowrap'>Order Id</div>
                                <div className='py-3 md:w-[13%] md:mr-0 mr-[10px] '>Price</div>
                                <div className='py-3 md:w-[18%] '>Payment-status</div>
                                <div className='py-3 md:w-[18%] '>Order-status</div>
                                <div className='py-3 md:w-[18%] '>Action</div>
                                <div className='py-3 md:w-[8%] '>
                                    <BsArrowBarDown />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* orders row */}
                    <div>
                        <div className='flex justify-between items-start md:gap-0 gap-3 md:border-b border-slate-400'>
                            <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px]'>sdfjg8723yhoiaklmsf980</div>
                            <div className='py-4 md:w-[13%] md:mr-0 mr-[10px]'>$750</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[13px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'><Link to='/admin/dashboard/order/details/1'>View</Link></div>
                            <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer md:w-[8%]'>
                                <BsArrowBarDown />
                            </div>
                        </div>
                        {/* sub order */}
                        <div className={show ? 'block  bg-slate-200 w-full' : 'hidden '}>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                        </div>


                        <div className='flex justify-between items-start md:gap-0 gap-3 md:border-b border-slate-400'>
                            <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px]'>sdfjg8723yhoiaklmsf980</div>
                            <div className='py-4 md:w-[13%] md:mr-0 mr-[10px]'>$750</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[13px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'><Link to='/admin/dashboard/order/details/1'>View</Link></div>
                            <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer md:w-[8%]'>
                                <BsArrowBarDown />
                            </div>
                        </div>
                        {/* sub order */}
                        <div className={show ? 'block  bg-slate-200 w-full' : 'hidden '}>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                        </div>


                        <div className='flex justify-between items-start md:gap-0 gap-3 md:border-b border-slate-400'>
                            <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px]'>sdfjg8723yhoiaklmsf980</div>
                            <div className='py-4 md:w-[13%] md:mr-0 mr-[10px]'>$750</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[13px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'><Link to='/admin/dashboard/order/details/1'>View</Link></div>
                            <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer md:w-[8%]'>
                                <BsArrowBarDown />
                            </div>
                        </div>
                        {/* sub order */}
                        <div className={show ? 'block  bg-slate-200 w-full' : 'hidden '}>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                        </div>


                        <div className='flex justify-between items-start md:gap-0 gap-3 md:border-b border-slate-400'>
                            <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px]'>sdfjg8723yhoiaklmsf980</div>
                            <div className='py-4 md:w-[13%] md:mr-0 mr-[10px]'>$750</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[13px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'><Link to='/admin/dashboard/order/details/1'>View</Link></div>
                            <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer md:w-[8%]'>
                                <BsArrowBarDown />
                            </div>
                        </div>
                        {/* sub order */}
                        <div className={show ? 'block  bg-slate-200 w-full' : 'hidden '}>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                        </div>


                        <div className='flex justify-between items-start md:gap-0 gap-3 md:border-b border-slate-400'>
                            <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px]'>sdfjg8723yhoiaklmsf980</div>
                            <div className='py-4 md:w-[13%] md:mr-0 mr-[10px]'>$750</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[13px]'>Pending</div>
                            <div className='py-4 md:w-[18%] md:mr-0 mr-[20px]'><Link to='/admin/dashboard/order/details/1'>View</Link></div>
                            <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer md:w-[8%]'>
                                <BsArrowBarDown />
                            </div>
                        </div>
                        {/* sub order */}
                        <div className={show ? 'block  bg-slate-200 w-full' : 'hidden '}>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                            <div className='flex justify-start items-start md:gap-0 gap-3 md:border-b border-slate-400  '>
                                <div className='py-4 md:w-[25%] md:text-base text-sm md:mr-0 mr-[10px] md:pl-2'>sdfjg8723yhoiaklmsf980</div>
                                <div className='py-4 md:w-[13%] mr-[10px]'>$750</div>
                                <div className='py-4 md:w-[18%] mr-[20px]'>Pending</div>
                                <div className='py-4 md:w-[18%] mr-[13px]'>Pending</div>
                            </div>
                        </div>


                    </div>
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
    )
}

export default Orders






// Earlier one without being responsive

// import React, { useState } from 'react'
// import { BsArrowBarDown } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import Pagination from '../Pagination';

// const Orders = () => {

//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchValue, setSearchValue] = useState('');
//     const [perPage, setPerPage] = useState(5);
//     const [show, setShow] = useState(false);

//     return (
//         <div className='px-2 lg:px-7 pt-5'>
//             <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>

//                 {/* heading items */}
//                 <div className='flex justify-between items-center'>
//                     <select onChange={(e) => setPerPage(parseInt(e.target.value))} className='px-4 py-2 hover:bg-indigo-100 outline-none border border-slate-700 rounded-md bg-transparent'>
//                         <option value="5">5</option>
//                         <option value="15">15</option>
//                         <option value="25">25</option>
//                     </select>
//                     <input className='px-6 py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700' type="text" name='search' placeholder='search' />
//                 </div>

//                 {/*  Order (table I guess)  */}
//                 <div className='relative mt-5 overflow-x-auto'>
//                     {/* Order headings */}
//                     <div className='w-full text-sm text-left'>
//                         <div className='text-md uppercase border-b border-slate-400 font-bold'>
//                             <div className='flex justify-between items-start'>
//                                 <div className='py-3 w-[25%]'>Order Id</div>
//                                 <div className='py-3 w-[13%]'>Price</div>
//                                 <div className='py-3 w-[18%]'>Payment-status</div>
//                                 <div className='py-3 w-[18%]'>Order-status</div>
//                                 <div className='py-3 w-[18%]'>Action</div>
//                                 <div className='py-3 w-[8%]'>
//                                     <BsArrowBarDown />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* orders row */}
//                     <div>
//                         <div className='flex justify-between items-start border-b border-slate-400'>
//                             <div className='py-4 w-[25%]    whitespace-nowrap'>sdfjg8723yhoiaklmsf980</div>
//                             <div className='py-4 w-[13%]'>$750</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'><Link to='/admin/dashboard/order/details/1'>View</Link></div>
//                             <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer w-[8%]'>
//                                 <BsArrowBarDown />
//                             </div>
//                         </div>
//                         {/* sub order */}
//                         <div className={show ? 'block  bg-slate-200' : 'hidden '}>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                         </div>


//                         <div className='flex justify-between items-start border-b border-slate-400'>
//                             <div className='py-4 w-[25%]    whitespace-nowrap'>sdfjg8723yhoiaklmsf980</div>
//                             <div className='py-4 w-[13%]'>$750</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'><Link>View</Link></div>
//                             <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer w-[8%]'>
//                                 <BsArrowBarDown />
//                             </div>
//                         </div>
//                         {/* sub order */}
//                         <div className={show ? 'block  bg-slate-200' : 'hidden '}>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                         </div>


//                         <div className='flex justify-between items-start border-b border-slate-400'>
//                             <div className='py-4 w-[25%]    whitespace-nowrap'>sdfjg8723yhoiaklmsf980</div>
//                             <div className='py-4 w-[13%]'>$750</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'><Link>View</Link></div>
//                             <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer w-[8%]'>
//                                 <BsArrowBarDown />
//                             </div>
//                         </div>
//                         {/* sub order */}
//                         <div className={show ? 'block  bg-slate-200' : 'hidden '}>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                         </div>


//                         <div className='flex justify-between items-start border-b border-slate-400'>
//                             <div className='py-4 w-[25%]    whitespace-nowrap'>sdfjg8723yhoiaklmsf980</div>
//                             <div className='py-4 w-[13%]'>$750</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'><Link>View</Link></div>
//                             <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer w-[8%]'>
//                                 <BsArrowBarDown />
//                             </div>
//                         </div>
//                         {/* sub order */}
//                         <div className={show ? 'block  bg-slate-200' : 'hidden '}>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                         </div>


//                         <div className='flex justify-between items-start border-b border-slate-400'>
//                             <div className='py-4 w-[25%]    whitespace-nowrap'>sdfjg8723yhoiaklmsf980</div>
//                             <div className='py-4 w-[13%]'>$750</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'>Pending</div>
//                             <div className='py-4 w-[18%]'><Link>View</Link></div>
//                             <div onClick={(e) => setShow(!show)} className='py-4 cursor-pointer w-[8%]'>
//                                 <BsArrowBarDown />
//                             </div>
//                         </div>
//                         {/* sub order */}
//                         <div className={show ? 'block  bg-slate-200' : 'hidden '}>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                             <div className='flex justify-start items-start border-b border-slate-400  '>
//                                 <div className='py-4 w-[25%]    whitespace-nowrap pl-2'>sdfjg8723yhoiaklmsf980</div>
//                                 <div className='py-4 w-[13%]'>$750</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                                 <div className='py-4 w-[18%]'>Pending</div>
//                             </div>
//                         </div>


//                     </div>
//                 </div>

//                 <div className='w-full mt-4 flex justify-end bottom-4 right-4'>
//                     <Pagination
//                         pageNumber={currentPage}
//                         setPageNumber={setCurrentPage}
//                         totalItem={50}
//                         perPage={perPage}
//                         showItem={3}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Orders