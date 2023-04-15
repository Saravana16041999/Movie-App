import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './MovieDetials.css'
import { SiImdb,SiFireship } from "react-icons/si";

const MovieDetials = () => {
  const {Id} = useParams()
  const {Movies} = useSelector((state)=> state.movie)
  const NewMovie = Movies.find((movie)=> movie.id === Id )

  const {cast_name,certificate,director_name,genre,imdb_rating,img_link,name,rank,writter_name
,year} = NewMovie

  const FilteredMovie = Movies.filter((movie)=> movie.genre === NewMovie.genre )
  
  console.log(FilteredMovie)

  return (
    <section>
    <div className='Hole-container'>
    <div className='img-container' >
      <img src={img_link} alt={name} />
      </div>
      <div className='detials-container'>
        <div className='first-head'>
        <h1>{name}</h1>
        <p><small>yrear :</small> {year}</p>
        <div> <small> certification :</small> {certificate} </div>
        </div>
        
          <p className='genre'><small className='name-genre'>genre  </small>{genre}</p>
          <div className='rating-rank'>
          <p className='imdb_rating'><SiImdb className='imdb'/>  {imdb_rating}</p>
          <p className='rank'><SiFireship className='rank-one'/> {rank}</p>
        </div>
        <div className='Names'>
          <div className='cast-name'><h1 className='Cast-name'>Cast Names </h1><small className='all-cast-names'>{cast_name}</small></div>
          <p className='main-names'>Director Name : <small>{director_name}</small>, Writer Name : <small>{writter_name}</small> </p>
        </div>
      </div>
    </div>
    <div className='Movie-sugestion'>
    {FilteredMovie.map((movie)=>{
      return(
        <div key={movie.id} className='recomandation' >
        <div className='img-sugestion'>
        <img src={movie.img_link} alt={movie.name} />
        </div>
      <p>{movie.name}</p>
      </div>
      )
    })}
    </div>
     
    </section>
  )
}

export default MovieDetials

