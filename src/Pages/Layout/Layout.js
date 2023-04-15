import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from '../../components/Header/Head'
import Footer from '../../components/Footer/Footer'


const Layout = () => {
  return (
    <div>
        <Head/>
        <section>
            <Outlet/>
        </section>
        <Footer/>
    </div>
  )
}

export default Layout