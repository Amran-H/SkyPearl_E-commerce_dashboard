import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineGooglePlus, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Register = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };
    const submit = (e) => {
        e.preventDefault()
        console.log(state);
    }

    return (
        <div className='min-w-screen min-h-screen flex justify-center items-center '>
            <div className='w-[400px] p-4 rounded-xl sm:border sm:shadow-lg'>
                <div className='p-4'>
                    <h2 className='text-2xl mb-3 font-bold text-center'>Welcome to SkyPearl</h2>
                    <p className='text-sm mb-3 text-center'>Please register to start your business</p>
                    <form onSubmit={submit}>
                        {/* Name */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="name">Name</label>
                            <input onChange={handleInput} value={state.name} className='px-3 py-2 outline-none border border-slate-500 focus:border-indigo-500 rounded-md overflow-hidden' type="text" name='name' placeholder='Your name' id='name' required />
                        </div>
                        {/* Email */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input onChange={handleInput} value={state.email} className='px-3 py-2 outline-none border border-slate-500  focus:border-indigo-500 rounded-md overflow-hidden' type="email" name='email' placeholder='Your email' id='email' required />
                        </div>
                        {/* Password */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password</label>
                            <input onChange={handleInput} value={state.password} className='px-3 py-2 outline-none border border-slate-500  focus:border-indigo-500 rounded-md overflow-hidden' type="password" name='password' placeholder='Password' id='password' required />
                        </div>
                        {/* Checkbox */}
                        <div className='flex w-full gap-3 mb-8'>

                            <input className='w-4 overflow-hidden rounded' type="checkbox" name='checkbox' id='checkbox' required />
                            <label className='text-sm' htmlFor="checkbox">I agree to the privacy policy and terms</label>
                        </div>

                        <button className='w-full bg-[#0095F6] rounded-[8px] hover:shadow-blue-500/50 hover:shadow-lg py-[7px]  font-semibold mb-3'>
                            Register
                        </button>

                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>Already have an account?  <Link to='/login' className='text-[#006fff] font-semibold'>Please Login</Link></p>
                        </div>

                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>Or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>
                        {/* Icons */}
                        <div className='flex justify-between px-12 items-center gap-3'>
                            <div className='w-[35px] h-[35px] flex justify-center  items-center cursor-pointer text-[#db4a39]'>
                                <span><AiOutlineGooglePlus size={35} /></span>
                            </div>
                            <div className='w-[35px] h-[35px] flex justify-center items-center cursor-pointer text-[#006fff]'>
                                <span><FaFacebookF size={25} /></span>
                            </div>
                            <div className='w-[35px] h-[35px] flex justify-center items-center cursor-pointer text-[#006fff]'>
                                <span><AiOutlineTwitter size={35} /></span>
                            </div>
                            <div className='w-[35px] h-[35px] flex justify-center  items-center cursor-pointer'>
                                <span><AiOutlineGithub size={35} /></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register