import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Components/Footer'
import Header from '../Components/Header'
import Header2 from '../Components/Header2'
const Loyaut = () => {
  return (
    <div>
        <Header/>
    
       <Header2/>

        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Loyaut