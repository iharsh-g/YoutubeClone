import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Iframe from 'react-iframe';
import {BiLike, BiTrendingUp} from 'react-icons/bi'
import WatchVideoCard from '../Components/WatchVideoCard';
import './WatchPage.css'
import { AppContext } from '../Context/AppContext';
import Sidebar2 from '../Components/Sidebar2';
import Spinner from '../Components/Spinner';
import useSearch from '../hooks/useSearch';

const URL = `${process.env.REACT_APP_VIDEO_DETAILS_URL}`
const PARAMS =`${process.env.REACT_APP_PARAMS}`
const API_KEY =`${process.env.REACT_APP_API_KEY}`

function WatchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const v = searchParams.get('v');

    const {setSidebar, watchSidebarOpen, setWatchSidebarOpen} = useContext(AppContext);
    setSidebar('Watch');

    const [videoDetails, setVideoDetails] = useState([]);
    const [videoLoading, setVideoLoading] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    async function getVideoDetails() {
        setVideoLoading(true);
        try {
            console.log(URL + v + PARAMS);
            const output = await fetch(URL + v + PARAMS, options);
            const res = await output.json();

            setVideoDetails(res);
            console.log(res);
        }
        catch(e) {
            console.log(e);
        }
        setVideoLoading(false);
    }

    useEffect(() => {
        getVideoDetails();
    }, [])

    function viewsConverter (labelValue) {
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue));
    }

    const {getVideos, data, loading} = useSearch(null, true, v);

    return (
        <div className='h-screen overflow-hidden relative bg-[#151515]' onClick={() => setWatchSidebarOpen(false)}>
            <Sidebar2/>
            <div className='bg-[#151515] p-5 flex 2xl:flex-row flex-col w-screen gap-7 pt-10'>
                {
                    watchSidebarOpen &&
                    <div className='top-0 bottom-0 left-0 right-0 bg-[#000] opacity-30 absolute z-[5]'></div>
                }

                <div className='2xl:ml-14 mx-auto flex flex-col gap-3 lg:w-[950px] sm:w-[600px]'>
                    {
                        videoLoading ?
                        <div className='w-[100%] h-[100%] flex justify-center items-center min-h-[500px]'>
                            <Spinner/>
                        </div> :
                        videoDetails.length === 0 ? <p className='text-white min-h-[500px] text-2xl xs:text-lg w-[100%] h-[100%] flex justify-center items-center'>No Data Found</p> :
                        <div>
                            <Iframe url={`https://www.youtube.com/embed/${v}?autoplay=1&mute=1`} 
                            className='lg:w-[950px] sm:w-[600px] lg:h-[500px] sm:h-[300px] rounded-xl shadow-[rgba(255,255,255,_0.4)_0px_5px_30px]' loading='lazy'/>

                            <p className='text-white sm:text-xl text-xs font-semibold mt-3 xs:w-[300px]'>{videoDetails.title}</p>

                            <div className='flex gap-4 mt-5'>
                                <div>
                                    <img src={videoDetails.author.avatar[0].url} alt='Not Avai.' className='rounded-full sm:w-[50px] sm:h-[45px] w-[30px] h-[30px]' loading='lazy'/>
                                </div>

                                <div className='flex items-center justify-between w-[100%]'>
                                    <div className='flex flex-col -mt-1 gap-1' >
                                        <p className='text-white font-semibold sm:text-sm text-xs'>{videoDetails.author.title}</p>
                                        <p className='text-gray-300 sm:text-sm text-xs'>{`${viewsConverter(videoDetails.author.stats.subscribers)} Subscribers`}</p>
                                    </div>

                                    <div className='flex sm:flex-row flex-col sm:gap-5 gap-1 items-start'>
                                        <p className='bg-white bg-opacity-30 lg:text-sm sm:text-xs text-[7px] sm:px-4 px-2 sm:py-2 py-1 rounded-full text-white flex items-center hover:bg-opacity-50 cursor-pointer gap-3 xss:gap-1'>
                                            <span><BiTrendingUp className='sm:w-[1.2rem] sm:h-[1.2rem] w-[0.5rem] h-[0.5rem]'/></span>{`${viewsConverter(videoDetails.stats.views)} Views`}
                                        </p>
                                        <p className='bg-white bg-opacity-30 lg:text-sm sm:text-xs text-[7px] sm:px-4 px-2 sm:py-2 py-1 rounded-full text-white flex items-center hover:bg-opacity-50 cursor-pointer gap-3 xss:gap-1'>
                                            <span><BiLike className='sm:w-[1.2rem] sm:h-[1.2rem] w-[0.5rem] h-[0.5rem]'/></span>{`${viewsConverter(videoDetails.stats.likes)} Views`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className='flex flex-col gap-3 overflow-y-scroll 2xl:-ml-12 mx-auto max-h-screen hideScrollBar pb-12'>
                    {
                        data.length === 0 ?
                        <p className='text-white text-xl xs:text-sm'>No Related Video Found!</p> :
                        data.map((videoData, index) => {
                            if (videoData.video && videoData.hasOwnProperty('video')) {
                                return <WatchVideoCard key={index} video = {videoData?.video}/>
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default WatchPage