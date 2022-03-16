import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import { useState } from "react";
import {movies} from "./Components/MoviesData"

function App() {
const [moviesList, setmoviesList] = useState({movies})
const [titleSearch, settitleSearch] = useState("");
  return (
    <div>
      < NavBar 
          settitleSearch={settitleSearch}
      />
      < MoviesList moviesList={moviesList} />
    </div>
  );
}

export default App;
