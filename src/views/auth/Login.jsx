import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineGooglePlus, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { PropagateLoader } from 'react-spinners';
import { loaderStyle } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { messageClear, seller_login } from '../../store/Reducers/authReducer';

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loader, successMessage, errorMessage } = useSelector(state => state.auth)

    const [state, setState] = useState({
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
        dispatch(seller_login(state))
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage, dispatch]);

    return (
        <div className='min-w-screen min-h-screen flex justify-center items-center '>
            <div className='w-[400px] p-4 rounded-xl sm:border sm:shadow-lg'>
                <div className='p-4'>
                    <h2 className='text-2xl mb-3 font-bold text-center'>Welcome to SkyPearl</h2>
                    <p className='text-sm mb-3 text-center'>Please login to your account</p>
                    <form onSubmit={submit}>
                        {/* Email */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input onChange={handleInput} value={state.email} className='px-3 py-2 outline-none border border-slate-500  focus:border-indigo-500 rounded-md overflow-hidden' type="email" name='email' placeholder='Your email' id='email' required />
                        </div>
                        {/* Password */}
                        <div className='flex flex-col w-full gap-1 mb-8'>
                            <label htmlFor="password">Password</label>
                            <input onChange={handleInput} value={state.password} className='px-3 py-2 outline-none border border-slate-500  focus:border-indigo-500 rounded-md overflow-hidden' type="password" name='password' placeholder='Password' id='password' required />
                        </div>

                        <button disabled={loader ? true : false} className='w-full bg-[#006fff] rounded-[8px] hover:shadow-blue-500/20 hover:shadow-lg py-[7px]  font-semibold mb-3'>
                            {
                                loader ? <PropagateLoader
                                    color='#fff'
                                    size={15}
                                    cssOverride={loaderStyle}
                                /> : "Login"
                            }
                        </button>

                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>Don't have an account?  <Link to='/register' className='text-[#006fff] font-semibold'>Please Register</Link></p>
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

export default Login