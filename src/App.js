import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import TrendingPage from "./Pages/TrendingPage";
import ShoppingPage from "./Pages/ShoppingPage";
import MusicPage from "./Pages/MusicPage";
import MoviesShowPage from "./Pages/MoviesShowPage";
import GamingPage from "./Pages/GamingPage";
import SportsPage from "./Pages/SportsPage";
import NewsPage from "./Pages/NewsPage";
import WatchPage from "./Pages/WatchPage";
import SearchPage from "./Pages/SearchPage";

function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/trending" element={<TrendingPage/>}/>
        <Route path="/shopping" element={<ShoppingPage/>}/>
        <Route path="/music" element={<MusicPage/>}/>
        <Route path="/movies-show" element={<MoviesShowPage/>}/>
        <Route path="/gaming" element={<GamingPage/>}/>
        <Route path="/sports" element={<SportsPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>

        <Route path="/watch" element={<WatchPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
