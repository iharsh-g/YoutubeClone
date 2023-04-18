import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import logo from '../Assets/youtube_logo.png';
import {TfiSearch} from 'react-icons/tfi';
import { NavLink, useNavigate } from "react-router-dom";
import {AiOutlineBars} from 'react-icons/ai'
import { useMediaPredicate } from "react-media-hook";

function Navbar() {
    const {sidebarOpen, setSidebarOpen, sidebar, setSidebar, watchSidebarOpen, setWatchSidebarOpen} = useContext(AppContext);
    const [inputVal, setInputVal] = useState('');
    const navigate = useNavigate();
    const lessthan600 = useMediaPredicate("(max-width: 600px)");

    function sideBarClickHandler() {
        if(sidebar === "Watch") {
            setWatchSidebarOpen(!watchSidebarOpen);
        }
        else {
            if(lessthan600) 
                setSidebarOpen(!sidebarOpen);
        }
    }

    function submitHandler(event) {
        if (event.key === 'Enter' && event.target.value !== "") {
            navigate({
                pathname:'/search',
                search: `query=${event.target.value}`,
            });
        }
    }

    function searchButtonHandler() {
        if(inputVal !== "") {
            navigate({
                pathname:'/search',
                search: `query=${inputVal}`,
            });
        }
    }

    return (
        <div className='min-h-[60px] bg-[#151515] flex items-center'>

            <div className='md:ml-5 ml-4'>
                <AiOutlineBars className='text-white md:w-[1.7rem] md:h-[1.7rem] w-[1.3rem] h-[1.3rem] cursor-pointer' onClick={sideBarClickHandler}/>
            </div>

            <div className='md:ml-5 ml-2'>
                <NavLink to="/">
                    <img src={logo} alt='not available' className='sm:w-[120px] sm:h-[40px] w-[90px] h-[30px] xs:hidden'/>
                </NavLink>
            </div>
            
            <div className='w-[100%] flex justify-center gap-[0.02rem]'>
                <input type='text' placeholder='Search' onKeyDown={submitHandler} onChange={(e) => setInputVal(e.target.value)}
                 className='py-2 lg:w-[600px] md:w-[500px] sm:w-[400px] w-[200px] 
                 rounded-l-full px-5 bg-[#151515] text-white border border-[#4a4a4a] outline-blue-800'/>

                <button className='bg-[#4a4a4a] px-5 py-2 rounded-r-full' onClick={searchButtonHandler}>
                    <TfiSearch fontSize="1.5rem" className="text-white opacity-90"/>
                </button>
            </div>
        </div>
    )
}

export default Navbar