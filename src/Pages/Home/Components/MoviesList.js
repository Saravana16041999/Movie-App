import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({img_link,name,imdb_rating,id}) => {
  return (
    <Link to={`MovieDetials/${id}`}>
    <div className='movie-main'>
      <div className='movie-img'>
      <img src={img_link} alt={name} />  
      </div>
      <div className='movie-dis'>
      <h2>{name}</h2>
      <h4>{imdb_rating}</h4>
      </div>
    </div>
    </Link>
  )
}

export default MoviesList