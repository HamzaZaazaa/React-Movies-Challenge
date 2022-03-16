import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";

import { useState } from "react";
import { movies } from "./data/MoviesData"
import AddMovie from "./Components/AddMovie";

function App() {
  const [moviesList, setmoviesList] = useState(movies)
  const [titleSearch, settitleSearch] = useState("");
  const [show, setIsShow] = useState(false)
  return (
    <div>
      < NavBar
        settitleSearch={settitleSearch}
        showModal={setIsShow}
      />
      < MoviesList moviesList={moviesList} titleSearch={titleSearch} />
      {/* {isShow && <AddMovie />} */}
      <AddMovie show={show} setIsShow={setIsShow} saveMovie={setmoviesList} />
    </div>
  );
}

export default App;
