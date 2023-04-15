import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getmovie } from '../../features/Movieslice/Movieslice'
import './Home.css'
import MoviesList from './Components/MoviesList'

const Home = () => {

  const { Movies ,Isloading } = useSelector((state)=> state.movie)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getmovie())
  },[dispatch])



  if(Isloading){
    return(
       <>
        <h1>Loading....</h1>
       <h2>please waite</h2>
       </>
    )
    
  }



  return (
    <main className='main-container'>
      {Movies.map((Movie)=>{
        return(
         <MoviesList key={Movie.id} {...Movie}/>
        )
      })}
    </main>
  )
}

export default Home