import React, { forwardRef } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FixedSizeList as List } from 'react-window';

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY);
};

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payments = () => {

    const Row = ({ index, style }) => {
        return (
            < div style={style} className='flex text-sm '>
                <div className=' w-[25%] p-2 '>{index + 1}</div>
                <div className='w-[25%] p-2'>$987</div>
                <div className='w-[25%] p-2'>
                    <span className='py-[1px] sm:px-[6px] px-[3px] bg-slate-700 text-blue-500 rounded-md text-sm'>pending</span>
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap text-xs sm:text-sm '>25 september 2023</div>

            </div >
        )
    }


    return (
        <div className='px-2 md:px-7 py-5'>
            {/* Cards section */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>

                {/* total sales */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] shadow-md rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-2xl font-bold'>$6566</h2>
                        <span className='text-sm font-medium'>Total sales</span>
                    </div>
                    <div >
                        <BsCurrencyDollar size={40} className='text-[#28c76f] mr-3' />
                    </div>
                </div>

                {/* Available amount */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] shadow-md rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-2xl font-bold'>$200</h2>
                        <span className='text-sm font-medium'>Available amount</span>
                    </div>
                    <div >
                        <BsCurrencyDollar size={40} className='text-[#28c76f] mr-3' />
                    </div>
                </div>

                {/* Withdrawal amount */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] shadow-md rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-2xl font-bold'>$120</h2>
                        <span className='text-sm font-medium'> Withdrawal amount</span>
                    </div>
                    <div >
                        <BsCurrencyDollar size={40} className='text-[#28c76f] mr-3' />
                        {/* <FaUsers size={40} className='text-[#28c76f] mr-3' /> */}
                    </div>
                </div>

                {/* Pending amount */}
                <div className='flex justify-between items-center p-5 bg-[#f6f8fd] shadow-md rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start  text-black'>
                        <h2 className='text-2xl font-bold'>$0</h2>
                        <span className='text-sm font-medium'>Pending amount</span>
                    </div>
                    <div className=''>
                        <BsCurrencyDollar size={40} className='text-[#28c76f] mr-3' />
                    </div>
                </div>
            </div>

            {/* chart and messages section section */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-7 pb-4'>

                {/* Send Request */}
                <div className='w-full shadow-md'>
                    <div className='w-full bg-[#f6f8fd] py-4 px-4 rounded-md'>
                        <h2 className='text-lg font-bold'>Send Request</h2>
                        <div className='py-5 '>
                            <form >
                                <div className='flex gap-3 flex-wrap'>
                                    <input min='0' type="number" name='amount' className=' py-2 outline-none border bg-transparent border-slate-400 rounded-md text-black focus:border-indigo-700  md:w-[76%]' />

                                    <button className='bg-blue-500 sm:w-auto w-full hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-3 lg:px-4 py-2 text-sm text-white'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        <h2 className='text-lg font-bold pb-4' >Pending request</h2>
                        <div className='w-full '>

                            {/* heading */}
                            <div className='flex bg-[#d2dcf9] uppercase text-sm min-w-[340px] text-start font-bold'>
                                <div className='w-[25%] p-2'>No</div>
                                <div className='w-[25%] p-2'>amount</div>
                                <div className='w-[25%] p-2'>status</div>
                                <div className='w-[25%] p-2'>date</div>
                            </div>

                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'auto' }}
                                    className='List'
                                    height={350}
                                    itemCount={14}
                                    itemSize={35}
                                    outerElementType={outerElementType}
                                >
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>

                {/*Successful Withdrawal */}
                <div className='w-full bg-[#f6f8fd] shadow-md'>
                    <div className='w-full bg-[#f6f8fd] py-4 px-4 rounded-md'>

                        <h2 className='text-lg font-bold pb-4' >Successful Withdrawal</h2>
                        <div className='w-full '>

                            {/* heading */}
                            <div className='flex bg-[#d2dcf9] uppercase text-sm min-w-[340px] text-start font-bold'>
                                <div className='w-[25%] p-2'>No</div>
                                <div className='w-[25%] p-2'>amount</div>
                                <div className='w-[25%] p-2'>status</div>
                                <div className='w-[25%] p-2'>date</div>
                            </div>

                            {
                                <List
                                    style={{ minWidth: '340px', overflowX: 'auto' }}
                                    className='List'
                                    height={350}
                                    itemCount={14}
                                    itemSize={35}
                                    outerElementType={outerElementType}
                                >
                                    {Row}
                                </List>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payments