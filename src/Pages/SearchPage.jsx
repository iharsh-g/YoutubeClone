import React, { useContext } from 'react'
import SearchVideos from '../Components/SearchVideos'
import Sidebar from '../Components/Sidebar'
import { AppContext } from '../Context/AppContext'
import { useMediaPredicate } from "react-media-hook";
import Spinner from '../Components/Spinner';
import { useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';

function SearchPage() {
    const lessthan600 = useMediaPredicate("(max-width: 600px)")
    const morethan600 = useMediaPredicate("(min-width: 600px)")
    const {setSidebar, sidebarOpen, setSidebarOpen} = useContext(AppContext);

    if(morethan600) {
        setSidebarOpen(true);
    }

    setSidebar("Normal");

    function clickHandler() {
        if(lessthan600) 
            setSidebarOpen(false);
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    const {getVideos, data, loading} = useSearch(query, false, 0);
  
    return (
        <div className='h-screen w-screen bg-[#151515] flex overflow-hidden' onClick={clickHandler}>
        {
            sidebarOpen &&
            <div className='xs:top-0 xs:bottom-0 xs:left-0 xs:right-0 xs:bg-[#000] xs:opacity-30 xs:absolute xs:z-[5]'></div>
        }
        <Sidebar/>
        {
            loading ? 
            ( 
                <div className='w-[80%] h-[80%] xs:w-[100%] flex items-center justify-center'>
                    <Spinner/>
                </div> 
            ) :
            data.length === 0 ?
            (
                <div className='w-[80%] h-[80%] xs:w-[100%] flex items-center justify-center'>
                    <p className='text-2xl text-white xs:text-sm'>No Data Found</p>
                </div> 
            ) :
            <SearchVideos data = {data}/>
        }
        </div>
    )
}

export default SearchPage