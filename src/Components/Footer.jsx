import React from 'react'
import { Link } from 'react-router-dom'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { FaSimCard } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

export const Footer = () => {
  return (
    <div>
        <header className='flex-justify-between align-center bg-violet-500'>
            <nav>
                <ul className='flex gap-12 text-lg items-center'> 
                    <li>
<Link to="/"><img className='h-24 w-72 p-3 ' src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Moldcell.png" alt="Logo Moldcell" /></Link>
                     </li>
                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/contacte">Contacte</Link>

                     </li>
                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/reincarca-cont">Reancarca Contul</Link>

                     </li>

                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/Treci-la-moldcell">Treci la Moldcell</Link>

                     </li>

                

           
                     
                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/my-moldcell">My Moldcell</Link>

                        
                     </li>

                     <li className=' font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/fundatie">Fundatia Moldcell</Link>
                     </li>

                   
                <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800 '>
                    <Link to="/internet-tv">Internet & TV</Link>
                    
                </li>
                </ul>
            </nav>
        </header>

      <header className='flex-justify-between align-center bg-gray-400 gap-9'>
        
        <nav>
          <ul className='flex gap-16 text-lg items-center justify-center p-3'>
            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/conectare">

<FaSimCard/>
<h3>Conectare</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/telefoane">

<IoPhonePortraitSharp/>
<h3>Telefoane</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/accesorii">

<FaHeadphonesAlt/>
<h3>Accesorii</h3>
              </Link>


            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/exclusiv">

<GiFallingStar/>
<h3>Exclusiv</h3>
              </Link>

            </li>
            <li>
<Link to="/magazinM"><ImLocation className='text-2xl text-violet m-auto hover:text-violet-900'/><h3 className='text-black font-semibold text-lg'>Magazine Moldcell</h3></Link>

            </li>
</ul>
</nav>
</header>
    </div>
  )
}
