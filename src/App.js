import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import { useState } from "react";
import { movies } from "./data/MoviesData"
import AddMovie from "./Components/AddMovie";
import {Route,Routes} from "react-router-dom"
import WatchTrailer from "./Components/WatchTrailer";

function App() {
  const [moviesList, setmoviesList] = useState(movies)
  const [titleSearch, settitleSearch] = useState("");
  const [show, setIsShow] = useState(false)
  const [rating, setRating] = useState(1)
  return (
    <div>
      
      < NavBar
        settitleSearch={settitleSearch}
        showModal={setIsShow}
        setRating ={setRating}/>
        <AddMovie show={show} setIsShow={setIsShow} saveMovie={setmoviesList} />
        <Routes>
        <Route path="/movies" element={<MoviesList moviesList={moviesList} titleSearch={titleSearch} rating ={rating}/>} />
        <Route path="/watchtrailer" element={<WatchTrailer moviesList={moviesList} />} />
        </Routes>
    </div>
  );
}

export default App;
