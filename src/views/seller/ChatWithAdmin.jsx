import React from 'react';

const ChatWithAdmin = () => {

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full bg-[#f6f8fd] p-4 rounded-md '>
                <div className='flex w-full h-full relative'></div>
                <div className='w-full md:pl-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='relative'>
                                <img className='w-[42px] h-[40px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="" />
                                <div className='w-[10px] h-[10px] bg-green-500  rounded-full absolute right-0 bottom-0'>

                                </div>
                            </div>
                            <h2 className='text-lg font-semibold'>Support</h2>
                        </div>

                    </div>

                    {/* Chat box */}
                    <div className='py-4'>
                        <div className='bg-slate-400 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto'>

                            {/* left side chat */}
                            <div className='w-full flex justify-start items-center'>
                                <div className='w-full flex justify-start items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                    <div>
                                        <img className='w-[38px] h-[38px] border-whit  border-2 max-w-[38px] p-[2px] rounded-full ' src="http://localhost:3000/images/admin.jpg" alt="" />
                                    </div>
                                    <div className='flex items-start justify-center flex-col py-1 px-2 bg-gray-500
                                        rounded-2xl '>
                                        <span>
                                            How are you?
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* right side chat */}
                            <div className='w-full flex justify-end items-center'>
                                <div className='w-full flex justify-end items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>

                                    <div className='flex items-start justify-center flex-col py-1 px-2 bg-blue-600
                                        rounded-2xl '>
                                        <span>
                                            How are you?
                                        </span>
                                    </div>
                                    <div>
                                        <img className='w-[38px] h-[38px] border-whit  border-2 max-w-[38px] p-[2px] rounded-full ' src="http://localhost:3000/images/admin.jpg" alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* left side chat */}
                            <div className='w-full flex justify-start items-center'>
                                <div className='w-full flex justify-start items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                    <div>
                                        <img className='w-[38px] h-[38px] border-whit  border-2 max-w-[38px] p-[2px] rounded-full ' src="http://localhost:3000/images/admin.jpg" alt="" />
                                    </div>
                                    <div className='flex items-start justify-center flex-col py-1 px-2 bg-gray-500
                                        rounded-2xl '>
                                        <span>
                                            How are you?
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* right side chat */}
                            <div className='w-full flex justify-end items-center'>
                                <div className='w-full flex justify-end items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>

                                    <div className='flex items-start justify-center flex-col py-1 px-2 bg-blue-600
                                        rounded-2xl '>
                                        <span>
                                            How are you?
                                        </span>
                                    </div>
                                    <div>
                                        <img className='w-[38px] h-[38px] border-whit  border-2 max-w-[38px] p-[2px] rounded-full ' src="http://localhost:3000/images/admin.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* message input */}
                    <form className='flex gap-3'>
                        <input className='w-full border border-slate-500 flex justify-between items-center px-2 py-[5px] focus:border-blue-500 rounded-md ' type="text" placeholder='Input your message' />
                        <button className='bg-cyan-500 shadow-lg hover:bg-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatWithAdmin