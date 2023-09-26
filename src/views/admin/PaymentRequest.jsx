import React, { forwardRef } from 'react';
import { FixedSizeList as List } from 'react-window';

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel', deltaY);
};

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {

    const Row = ({ index, style }) => {
        return (
            < div style={style} className='flex text-sm sm:text-center'>
                <div className=' sm:w-[25%] w-[10%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='sm:w-[25%] w-[15%] p-2 whitespace-nowrap'>$987</div>
                <div className='sm:w-[25%] w-[18%] p-2 whitespace-nowrap'>
                    <span className='py-[1px] sm:px-[6px] px-[3px] bg-slate-700 text-blue-500 rounded-md text-sm'>pending</span>
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap text-xs sm:text-sm '>25 september 2023</div>
                <div className='w-[25%] p-2 whitespace-nowrap '>
                    <button className='bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-[2px] cursor-pointer rounded-sm text-sm ml-7'>
                        Confirm
                    </button>
                </div>
            </div >
        )
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md'>
                <h2 className='text-xl font-medium pb-5 text-center'>Withdraw Request</h2>
                <div className='w-full'>
                    <div className='w-full overflow-x-auto'>

                        {/* heading */}
                        <div className='flex bg-[#d2dcf9] uppercase text-sm min-w-[340px] sm:text-center font-bold'>
                            <div className='sm:w-[25%] w-[9%] p-2'>No</div>
                            <div className='sm:w-[25%] w-[20%] p-2'>amount</div>
                            <div className='sm:w-[25%] w-[18%] p-2'>status</div>
                            <div className='w-[25%] p-2 ml-6 sm:ml-0 sm:mr-3'>date</div>
                            <div className='w-[25%] p-2 ml-2 sm:ml-0'>action</div>
                        </div>

                        {
                            <List
                                style={{ minWidth: '340px', overflowX: 'hidden' }}
                                className='List'
                                height={350}
                                itemCount={20000}
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
    );
};

export default PaymentRequest;