import React from 'react'
import { Link } from 'react-router-dom'
import Abonament from '../Conectare Objects/Abonament'
import { FaSimCard } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { IoLogoApple } from "react-icons/io5";
import { IoIosTabletLandscape } from "react-icons/io";
import { LiaLaptopSolid } from "react-icons/lia";
import { IoWatchOutline } from "react-icons/io5";
const Conectare = () => {
  return (
    <div>

<div>
      <header className='flex-justify-between align-center bg-gray-200 gap-9'>
        <nav>
          <ul className='flex gap-16 text-lg items-center p-3'>
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

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/apple">

<IoLogoApple/>
<h3>Apple</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/tablete">

<IoIosTabletLandscape/>
<h3>Tablete</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/laptopuri">

<LiaLaptopSolid/>
<h3>Leptopuri</h3>
              </Link>

            </li>


            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/gadjeturi">

<IoWatchOutline/>
<h3>Gadjeturi</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/televizoare">

<FaSimCard/>
<h3>Televizoare</h3>
              </Link>

            </li>

          </ul>
        </nav>
      </header>
    </div>





      <br />
<header className='flex-justify-between align-center'>
  <nav>
    <ul className='flex gap-12 text-lg items-center justify-center'>
      <li className='font-semibold text-black text-base hover:text-violet-900 '>
        <Link to="/">Home |</Link>
      </li>

      <li className='font-semibold text-black text-base hover:text-violet-900 '>
        <Link to="/portare">Portare | </Link>
      </li>

      <li className='font-semibold text-black text-base hover:text-violet-900 '>
        <Link to="/cartela">Cartela  | </Link> 

   
      </li>

      <li className='font-semibold text-black text-base hover:text-violet-900 '>
        <Link to="/internet_fix">Internet Fix + TV</Link>
        
      </li>
    </ul>
  </nav>
</header>

<div>
  <Abonament/>
</div>
    </div>
  )
}

export default Conectare