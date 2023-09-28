import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getNavs } from '../navigation/index';
import { BiLogInCircle } from 'react-icons/bi';

const SideBar = ({ showSidebar, setShowSidebar }) => {

    const { pathname } = useLocation();

    const [allNav, setAllNav] = useState([]);

    useEffect(() => {
        const navs = getNavs('seller')
        setAllNav(navs)
    }, []);

    return (
        <div className=''>
            <div
                onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#eceef080] top-0 left-0 z-10`}
            > </div>
            <div className={`w-[260px] fixed bg-[#e2e8f7] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>

                {/* logo div */}
                <div className='h-[70px] flex justify-center items-center '>
                    <Link to='/'>
                        <h2 className='font-bold text-3xl font letter tracking-widest'>SkyPearl</h2>
                    </Link>
                </div>

                <div className='px-[16px]'>
                    <ul>
                        {
                            allNav?.map((n, i) => <li key={i}>
                                <Link to={n.path} className={`${pathname === n.path ? 'bg-slate-600 shadow-indigo-500/30 text-white duration-500' : 'text-black  duration-200'} px-[12px] py-[9px] flex justify-start items-center gap-3 rounded-md hover:pl-4 transition-all w-full  mb-1 font-bold text-lg`}>
                                    <span>{n.icon}</span>
                                    <span>{n.title}</span>
                                </Link>
                            </li>)
                        }
                        <li>
                            <button className='px-[12px] py-[9px] flex justify-start items-center gap-3 rounded-md hover:pl-4 transition-all w-full  mb-1 font-bold text-lg text-black  duration-200'>
                                <span><BiLogInCircle /></span>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar