import MovieCard from "./MovieCard"
function MoviesList({movies}) {
    return (
<div className="movieslist">
    {
        movies.map((movie, i) => <MovieCard movie={movie} />)
            
    } 

</div>
    )
}
export default MoviesList