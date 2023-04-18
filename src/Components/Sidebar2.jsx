import React, { useContext } from 'react'
import sideItems from '../data'
import SideItem2 from './SideItem2'
import { AppContext } from '../Context/AppContext'

function Sidebar2() {
    const {watchSidebarOpen} = useContext(AppContext);

    return (
        <div className={`${watchSidebarOpen ? 'w-[240px] z-[10]' : 'w-[0px] -z-[1]'} absolute left-0 ease duration-200 
         flex flex-col gap-5 py-5 px-3 bg-[#151515] text-white h-[100%] rounded-xl`}>
        {
            sideItems.map((item) => 
                <SideItem2 key={item.id} item={item}/>
            )
        }
        </div>
    )
}

export default Sidebar2