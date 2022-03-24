import React from 'react';
import { useParams } from 'react-router-dom';
import {movies} from '../data/MoviesData'
 

function WatchTrailer() {
  const id = useParams()
  const findmovie= movies.find((el)=>el.id == id.id)
  console.log(id.id)
  return (
      <div>
        <h1 className='movietitle'>{findmovie.title} Trailer</h1>
    <iframe width="560" 
    height="315" 
    src={findmovie.trailer} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
    </iframe>
    <h3 className='Discription'>{findmovie.description}</h3>
    </div>
  )
}

export default WatchTrailer