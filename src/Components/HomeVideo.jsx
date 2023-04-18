import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeVideo({video}) {
    const navigate = useNavigate();

    function cardHandler() {
        navigate({
            pathname:'/watch',
            search: `v=${video.videoId}`,
        });
    }

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = 0;
        if(h > 0) {
            hDisplay = h + ":";
        }
        
        return hDisplay + m + ":" + s; 
    }

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

    const title = video.title === null ? "Not Available" : (video.title.length > 7 ? `${video.title.split(" ").slice(0, 7).join(" ")}...` : video.title);

    return (
        <div className='sm:w-[370px] sm:h-[330px] flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:z-[1] rounded-xl
            ease-in duration-300 hover:shadow-[rgba(255,255,255,_0.4)_0px_5px_30px] my-3' onClick={cardHandler}>

            <div className='relative'>
                <img src={video.thumbnails[0].url} alt='Not Available' className='w-[350px] h-[210px] rounded-xl' loading='lazy'/>

                <p className='absolute right-2 text-white bg-black top-[11rem] px-[6px] bg-opacity-70 rounded-lg text-sm'>
                 {video.lengthSeconds === null || video.lengthSeconds === undefined ? "Not Avail." : secondsToHms(video.lengthSeconds)}
                </p>
            </div>

            <div className='flex gap-5 px-3 py-2 w-[100%]'>
                <img src={video.author.avatar[0].url} alt="Not Available" className='rounded-full w-[40px] h-[40px] mt-2' loading='lazy'/>

                <div>
                    <p className='text-white text-lg xs:text-sm'>{title}</p> 
                    <p className='text-gray-300 xs:text-sm'>{video.author.title}</p>
                    <div className='flex text-gray-300 gap-3 text-sm xs:text-xs'>
                        <p>{video.stats.views === null ? "Not Avail." : viewsConverter(video.stats.views)}</p>
                        <p>{video.publishedTimeText === null ? "Not Available" : video.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeVideo
