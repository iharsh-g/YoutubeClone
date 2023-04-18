import React from 'react'
import { useMediaPredicate } from 'react-media-hook';
import { useNavigate } from 'react-router-dom';

function SearchVideo({video}) {
    const lessthan400 = useMediaPredicate("(max-width: 400px)");
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

    return (
        <div className="mx-auto xl:w-[1000px] lg:w-[800px] md:w-[600px] lg:h-[230px] md:h-[180px] h-[150px] flex gap-3 cursor-pointer hover:scale-105 hover:z-[1] rounded-xl
         ease-in duration-300 hover:shadow-[rgba(255,255,255,_0.4)_0px_5px_30px]" onClick={cardHandler}>

            <div className='relative sm:w-[40%] lg:h-[230px] md:h-[180px] h-[150px] xs:w-[40%] xss:w-[40%] xss:h-[120px] '>
                <img src={video.thumbnails[0].url} alt='Not Available' className='rounded-xl w-[100%] h-[100%]' loading='lazy'/>

                <p className='absolute right-2 text-white bg-black lg:top-[12rem] md:top-[9rem] top-[7rem] xss:top-[6rem] px-[6px] bg-opacity-70 rounded-lg text-sm xss:text-xs'>
                    {video.lengthSeconds === null || video.lengthSeconds === undefined ? "Not Avail." : secondsToHms(video.lengthSeconds)}
                </p>
            </div>

            <div className='flex flex-col gap-3 pt-1 sm:w-[60%] xs:w-[60%] xss:w-[60%]'>
                <p className='text-white lg:text-xl text-sm font-semibold xs:text-xs'>
                    {
                        lessthan400 ?
                        video.title === null ? "Not Available" : `${video.title.split(" ").slice(0, 7).join(" ")}...` :
                        video.title === null ? "Not Available" : video.title
                    }
                </p> 

                <p className='text-gray-300 lg:text-sm text-xs flex gap-3 xss:flex-col xss:text-[10px] xss:gap-1'>
                    {video.stats.views === null ? "Not Avail." : viewsConverter(video.stats.views)}
                    <span className=''>{video.publishedTimeText === null ? "Not Available" : video.publishedTimeText}</span>
                </p>
                
                <div className='flex gap-3 items-center'>
                    <img src={video.author.avatar[0].url} alt="Not Available" 
                     className='rounded-full lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] xs:w-[20px] xs:h-[20px]' loading='lazy'/>
                        
                    <p className='text-gray-300 text-sm xs:text-xs'>
                        {
                            lessthan400 ? 
                            `${video.author.title.split(" ").slice(0, 2).join(" ")}...`:
                            video.author.title
                        }
                    </p>
                </div>

                <p className='text-gray-300 lg:text-sm text-xs xl:w-[600px] xl:block lg:w-[400px] lg:block md:w-[300px] md:block hidden'>
                    {video.descriptionSnippet}
                </p>
            </div>
        </div>
    )
}

export default SearchVideo