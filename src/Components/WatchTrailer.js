import React from 'react';
import {movies} from '../data/MoviesData'
 

function WatchTrailer() {
  console.log(movies)
  return (
      <div>
    <iframe width="560" 
    height="315" 
    src={movies.trailer} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
    </iframe>
    <p>{movies.description}</p>
    </div>
  )
}

export default WatchTrailer