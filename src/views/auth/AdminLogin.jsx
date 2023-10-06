import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import { useDispatch, useSelector, } from 'react-redux';
import toast from 'react-hot-toast';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { loader, errorMessage, successMessage } = useSelector(state => state.auth);

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
        dispatch(admin_login(state))
    };

    const loaderStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center',
    };

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
    }, [dispatch, errorMessage, successMessage, navigate])


    return (
        <div className='min-w-screen min-h-screen flex justify-center items-center '>
            <div className='w-[400px] p-4 rounded-xl sm:border sm:shadow-lg'>
                <div className='p-4'>

                    <h2 className='text-4xl mb-3 font-bold text-center'>SkyPearl</h2>
                    <p className='text-sm mb-3 text-center font-mono font-semibold'>Greetings Admin!</p>

                    {/* <div>
                        <div>
                            <img src="http://localhost:3000/images/logo.png" alt="logo" />
                        </div>
                    </div> */}

                    <form onSubmit={submit}>
                        {/* Email */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className='font-semibold' htmlFor="email">Email</label>
                            <input onChange={handleInput} value={state.email} className='px-3 py-2 outline-none border border-slate-500  focus:border-indigo-500 rounded-md overflow-hidden' type="email" name='email' placeholder='Your email' id='email' required />
                        </div>
                        {/* Password */}
                        <div className='flex flex-col w-full gap-1 mb-8'>
                            <label className='font-semibold' htmlFor="password">Password</label>
                            <input onChange={handleInput} value={state.password} className='px-3 py-2 outline-none border border-slate-500  focus:border-indigo-500 rounded-md overflow-hidden' type="password" name='password' placeholder='Password' id='password' required />
                        </div>

                        {/* Button */}
                        <button disabled={loader ? true : false} className='w-full bg-[#006fff] rounded-[8px] hover:shadow-blue-500/50 hover:shadow-lg py-[7px]  font-semibold mb-3'>
                            {
                                loader ? <PropagateLoader
                                    color='#fff'
                                    size={25}
                                    cssOverride={loaderStyle}
                                /> : "Login"
                            }
                        </button>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin