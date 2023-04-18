import React, {useContext, useEffect, useState} from 'react'
import Sidebar from '../Components/Sidebar'
import HomeVideos from '../Components/HomeVideos'
import { AppContext } from '../Context/AppContext'
import { useMediaPredicate } from "react-media-hook";
import Spinner from '../Components/Spinner';
import useSearch from '../hooks/useSearch';

function GamingPage() {
    const lessthan600 = useMediaPredicate("(max-width: 600px)")
    const morethan600 = useMediaPredicate("(min-width: 600px)")
    const {category, setSidebar, sidebarOpen, setSidebarOpen} = useContext(AppContext);

    if(morethan600) {
        setSidebarOpen(true);
    }
    
    setSidebar("Normal");

    function clickHandler() {
        if(lessthan600) 
        setSidebarOpen(!sidebarOpen);
    }
    
    const {getVideos, data, loading} = useSearch("Gaming", false, 0);

    return (
        <div className='h-screen w-screen bg-[#151515] flex overflow-hidden relative' onClick={clickHandler}>
        {
            sidebarOpen &&
            <div className='xs:top-0 xs:bottom-0 xs:left-0 xs:right-0 xs:bg-[#000] xs:opacity-30 xs:absolute xs:z-[5]'></div>
        }
        <Sidebar/>
        
        {
            loading ? 
            data.length === 0 ? <p className='text-white'>No data Found</p> :
            (
                <div className='w-[80%] h-[80%] xs:w-[100%] flex items-center justify-center'>
                    <Spinner/>
                </div>
            ) :
            <HomeVideos data={data}/>
        }
        
        </div>
    )
}

export default GamingPage