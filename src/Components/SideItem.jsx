import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import {useNavigate} from 'react-router-dom';

function SideItem({item}) {
    const navigate = useNavigate();
    const {category, setCategory, sidebarOpen} = useContext(AppContext);

    function clickHandler() {
        setCategory(item.name);
        navigate(item.path);
    }

    return (
        <div className={`flex gap-5 items-center ${category === item.name ? ("bg-white bg-opacity-20") : ("bg-[#151515]")}
         hover:bg-white hover:bg-opacity-10 rounded-lg py-2 px-4 cursor-pointer`}
            onClick={clickHandler}>

            <div className='text-[22px]'>{item.icon}</div>
            <div className={`text-base ${sidebarOpen ? 'opacity-100': 'opacity-0 -z-[1]'}`}>{item.name}</div>
            
        </div>
    )
}

export default SideItem