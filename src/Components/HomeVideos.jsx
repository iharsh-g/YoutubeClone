import React, { useContext } from 'react'
import HomeVideo from './HomeVideo'
import { AppContext } from '../Context/AppContext'
import '../Pages/WatchPage.css'

function HomeVideos({data}) {
  const {sidebarOpen} = useContext(AppContext);

  return (
    <div className={`${sidebarOpen ? 'w-[90%]' : 'sm:ml-[3rem] w-[95%]'} max-h-screen sm:px-10 py-5 overflow-y-scroll overflow-x-hidden hideScrollBar
      grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 space-x-3 xs:-ml-3 `}>
        {
          data.map((videoData, index) => {
            if (videoData.video && videoData.hasOwnProperty('video')) {
              return <HomeVideo key={index} video = {videoData?.video}/>
            }
            return null;
          })
        }
    </div>
  )
}

export default HomeVideos 