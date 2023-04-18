import React, { useEffect, useState } from 'react'

const API_KEY =`${process.env.REACT_APP_API_KEY}`
const URL =`${process.env.REACT_APP_YOUTUBE_URL}`
const PARAMS =`${process.env.REACT_APP_PARAMS}`
const VIDEO_RELATED_URL = `${process.env.REACT_APP_YOUTUBE_VIDEO_RELATED_URL}`

function useSearch(category, videoRelated, videoId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    async function getVideos() {
        setLoading(true);
        try {
            let output;
            if(videoRelated) {
                output = await fetch(VIDEO_RELATED_URL + videoId + PARAMS, options);
            }
            else {
                output = await fetch(URL + category + PARAMS, options);
            }

            const res = await output.json();

            setData(res?.contents);
        }
        catch(e) {
            console.log(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        getVideos();
    }, [])

  return {getVideos, data, loading};
}

export default useSearch