import React from "react"
import MovieCard from "./MovieCard"

let MoviesList = ({ moviesList, titleSearch }) => {

    const movies = moviesList
        .filter((el) => {
            return el.title.toLowerCase().includes(titleSearch.toLowerCase().trim())
        })


    return (
        <div className="moviescsslist">
            {

                movies.map((movie, i) => <MovieCard movie={movie} key={i} />)
            }

        </div>
    )
}
export default MoviesList