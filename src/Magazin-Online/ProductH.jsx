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
import { FaSimCard } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { IoLogoApple } from "react-icons/io5";
import { IoIosTabletLandscape } from "react-icons/io";
import { LiaLaptopSolid } from "react-icons/lia";
import { IoWatchOutline } from "react-icons/io5";

const ProductH = () => {
    const {tel,addToCart8} = useContext (Conte)
    const {h} = useParams()
    const currentProduct = tel.find(obj=> obj.h === h)
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
<div>
  
</div>

    



    <div className='flex items-center flex-col gap-3'>
        <br />
        <img className='h-2/4 w-96 object-cover rounded-xl' src={currentProduct.image} alt="" />
     
            <h2 className='text-3xl font-semibold'>{currentProduct.h}</h2>
            <h3 className='text-xl font-semibold text-gray-600'>Brand: {currentProduct.brand}</h3>
            <h3 className='text-xl font-semibold text-gray-500'>{currentProduct.add}</h3>
          

<div className='text'>

            <h2>PRET CU ABONAMENT </h2>
            <h3> {currentProduct.priceA} lei</h3>
            <br />
            <h2>PRET ONLINE </h2> 
    <h3>{currentProduct.price} lei</h3>
    <br />
    <h2>IN RATE </h2> 
     <h3>{currentProduct.credit}lei/lunar</h3>
    </div>
            <Link to="/televizore"><button className='bg-gray-700 text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-violet-600'>Televizoare</button></Link>
<br />
<button className='bg-gray-700 text-white px-3 py-1 flex items-center gap-2 text-lg rounded-md hover:bg-violet-600' onClick={() => addToCart8(currentProduct.h)}>Adauga in cos</button>



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
 </div>
        

  )
}

export default ProductH