import {AiFillHome, AiFillFire, AiFillShopping} from 'react-icons/ai'
import {BsMusicNote,BsNewspaper} from 'react-icons/bs';
import {RiSlideshow4Fill} from 'react-icons/ri';
import {SiYoutubegaming} from 'react-icons/si';
import {TfiCup} from 'react-icons/tfi';

const sideItems = [
    {
        id: 1,
        name: "Home",
        icon: <AiFillHome/>,
        path: "/"
    },
    {
        id: 2,
        name: "Trending",
        icon: <AiFillFire/>,
        path: "/trending"
    },
    {
        id: 3,
        name: "Shopping",
        icon: <AiFillShopping/>,
        path: "/shopping"
    },
    {
        id: 4,
        name: "Music",
        icon: <BsMusicNote/>,
        path: "/music"
    },
    {
        id: 5,
        name: "Movies & Shows",
        icon: <RiSlideshow4Fill/>,
        path: "/movies-show"
    },
    {
        id: 6,
        name: "Gaming",
        icon: <SiYoutubegaming/>,
        path: "/gaming"
    },
    {
        id: 7,
        name: "Sports",
        icon: <TfiCup/>,
        path: "/sports"
    },
    {
        id: 8,
        name: "News",
        icon: <BsNewspaper/>,
        path: "/news"
    },
]

export default sideItems;
