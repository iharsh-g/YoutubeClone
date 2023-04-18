import React from 'react'
import { useNavigate } from 'react-router-dom';

function WatchVideoCard({video}) {
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
        <div className='relative 2xl:w-[400px] lg:w-[950px] sm:w-[600px] h-[120px] flex gap-3 items-start cursor-pointer' onClick={cardHandler}>
            <img src={video.thumbnails[0].url} alt='Not Available' className='w-[170px] h-[110px] xss:w-[130px] rounded-xl' loading='lazy'/>

            <p className='absolute left-28 top-20 xss:left-[5.8rem] text-white bg-black px-[6px] bg-opacity-70 rounded-lg text-sm xss:text-[10px]'>
                {video.lengthSeconds === null || video.lengthSeconds === undefined ? "Not Avail." : secondsToHms(video.lengthSeconds)}
            </p>

            <div className='flex flex-col gap-2'>
                <p className='text-white font-semibold sm:text-sm text-xs'>{title}</p>
                <p className='text-gray-300 sm:text-sm text-xs'>{video.author.title}</p>
                <div className='flex gap-3 text-gray-300 sm:text-sm text-[9px]'>
                    <p>{video.stats.views === null ? "Not Avail." : viewsConverter(video.stats.views)}</p>
                    <p>{video.publishedTimeText === null ? "Not Available" : video.publishedTimeText}</p>
                </div>
            </div>
        </div>
    )
}

export default WatchVideoCard