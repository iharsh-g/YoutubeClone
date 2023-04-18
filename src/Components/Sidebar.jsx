import React, { useContext } from 'react'
import sideItems from '../data'
import SideItem from './SideItem'
import { AppContext } from '../Context/AppContext'
import {useMediaPredicate} from 'react-media-hook'

function Sidebar() {
  const {sidebarOpen} = useContext(AppContext);

  return (
    
    <div  className={`${sidebarOpen ? 'w-[240px] xs:z-[10] xs:opacity-100 xs:absolute xs:left-0' : 'w-[0px] -z-[1] duration-100'} 
     flex flex-col gap-5 py-5 px-3 bg-[#151515] duration-300 ease text-white h-[100%]`}>
        {
            sideItems.map((item) => 
                <SideItem key={item.id} item={item}/>
            )

        }
    </div>
  )
}

export default Sidebar