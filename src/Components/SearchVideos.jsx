import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import SearchVideo from './SearchVideo';
import '../Pages/WatchPage.css'

function SearchVideos({data}) {
    const {sidebarOpen} = useContext(AppContext);

    return (
        <div className={`${sidebarOpen ? 'w-[90%]' : 'sm:ml-[3rem] w-[95%]'} max-h-screen overflow-y-scroll sm:px-10 py-5 
            flex flex-col gap-5 hideScrollBar`}>
            {
                data.map((videoData, index) => {
                    if (videoData.video && videoData.hasOwnProperty('video')) {
                        return <SearchVideo key={index} video = {videoData?.video}/>
                    }
                    return null;
                })
            }   
        </div>
    )
}

export default SearchVideos