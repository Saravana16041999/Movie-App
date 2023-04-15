import './Header.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {settingOpen} from '../../features/Movieslice/Movieslice'
import { GiHamburgerMenu } from "react-icons/gi";

const Head = () => {
  const dispatch = useDispatch()
  return (
    <header className='header'>
    <div className='open-nav'>
      <button className='open-nav' onClick={()=> dispatch(settingOpen())} ><GiHamburgerMenu/></button>
    </div>
      <div className='heads'>
        <Link to={'/'}>
        <h1 className='Movie-head'>SampleMovie</h1>
        </Link>
        <button className='sign-in'>Sign In</button>
      </div>
    </header>
  )
}

export default Head