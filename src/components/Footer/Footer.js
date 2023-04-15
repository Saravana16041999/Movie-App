import React from 'react'
import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='foot'>
      <div className='part-1'>
        <p>This app is created using GeeksforGeeks Api </p>
        <small>https://movies-app.prakashsakari.repl.co/api/movies</small>
      </div>
      <div className='part-2'>
      <p>Created by : </p>
        <h1>Saravanakumar</h1>
        <Link to={'https://www.linkedin.com/in/saravana-kumar16/'}><BsLinkedin/></Link>
      </div>
    </footer>
  )
}

export default Footer