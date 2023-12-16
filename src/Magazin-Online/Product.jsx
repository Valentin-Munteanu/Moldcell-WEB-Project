import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Conte } from '../Context/Context'
import { Link } from 'react-router-dom'

import { FcProcess } from "react-icons/fc";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { SiAdguard } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const Product = () => {
    const {date} = useContext (Conte)
    const {id} = useParams()
    const currentProduct = date.find(obj=> obj.id === id)
  return (
    <div className='flex items-center flex-col gap-3'>
        <img className='h-80 w-80 object-cover rounded-xl' src={currentProduct.image} alt="" />
     
            <h2 className='text-3xl font-semibold'>{currentProduct.id}</h2>
            <h3 className='text-xl font-semibold text-gray-600'>{currentProduct.brand}</h3>
            <h3 className='text-xl font-semibold text-gray-500'>{currentProduct.add}</h3>
            <Link to="/telefoane"><button className='bg-gray-700 text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-violet-600'>Telefoane</button></Link>






<div>



  
<header className='flex-justify-between align-center bg-gray-200 gap-9'>
  <nav>
    <ul className='flex gap-16 text-lg items-center p-3'>
      <li className='font-semibold text-black text-lg hover:text-violet-900'>
        <FcProcess className='text-violet-700'/>
        <h3>Conditii Avantajoase</h3>

      </li>

      <li className='font-semibold text-black text-lg hover:text-violet-900'>
        <FcTouchscreenSmartphone className='text-violet-700' />
        <h3>Asigurarea dispozitivului</h3>
        
      </li>


      <li className='font-semibold text-black text-lg hover:text-violet-900'>
        <SiAdguard className='text-violet-700' />
        <h3>2 ani garantie</h3>
        
      </li>


      <li className='font-semibold text-black text-lg hover:text-violet-900'>
      <FaTruckFast className='text-violet-700' />
        <h3>Livrare gratuita</h3>
        
      </li>


      <li className='font-semibold text-black text-lg hover:text-violet-900'>
        <CiWallet className='text-violet-700'/>
        <h3>Achitarea online</h3>
        
      </li>



      <li className='font-semibold text-black text-lg hover:text-violet-900'>
      <MdStars className='text-violet-700' />
        <h3>Distribuitor oficial</h3>
        
      </li>




    </ul>
  </nav>
</header>
</div>
<br />


<div id='links'>
    <div className='p-3'>
<Link to="/magazinM"><ImLocation className='text-5xl text-white m-auto hover:text-violet-900'/><h3 className='text-white font-semibold text-xl'>Magazine Moldcell</h3></Link>
    </div>


    <div>
<Link to="/reincarcare"><CiWallet className='text-5xl text-white m-auto hover:text-violet-900'/><h3 className='text-white font-semibold text-xl '>Reincarcare Online</h3></Link>
    </div>


    <div>
<Link to="/mymoldcell"><IoIosPhonePortrait className='text-5xl text-white m-auto hover:text-violet-900'/><h3 className='text-white font-semibold text-xl'>My Moldcell</h3></Link>
    </div>

    <div>
<Link to="/contacte"><MdContacts className='text-5xl text-white m-auto hover:text-violet-900'/><h3 className='text-white font-semibold text-xl '>Contacte</h3></Link>
    </div>

</div>

        </div>

        

  )
}

export default Product