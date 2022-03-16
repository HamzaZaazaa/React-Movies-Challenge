import React from "react"
import MovieCard from "./MovieCard"

let MoviesList =({moviesList, titleSearch}) => {
    return (
<div className="moviescsslist">
    {
    moviesList
    .filter((el) => el.title.toLowercase().includes(titleSearch.toLowercase().trim()))
    .map((movie, i) => <MovieCard movie={movie} />)
    } 
        
</div>
    )
}
export default MoviesList