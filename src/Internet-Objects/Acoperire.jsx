import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { IoWifiSharp } from "react-icons/io5";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";


import { FaMapMarked } from "react-icons/fa";
const Acoperire = () => {
  return (
    <div>
          <div>
      <header className='flex-justify-center align-center bg-gray-200 gap-9'>
        <nav>
          <ul className='flex justify-center gap-16 text-lg items-center p-3'>


            <li className='font-semibold text-black text-lg hover:text-violet-900 '>
              <Link to="/moldcell_plus">

              <FaStar className='text-yellow-400 font-semibold text-4xl m-auto'  />
<h3>Moldcell Plus</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900 '>
              <Link to="/fibra_tv">

              <AiFillEye className='text-blue-600 font-semibold text-4xl m-auto'  />
<h3>Fibra + TV</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/fibra">

              <IoWifiSharp className='text-gray-600 font-semibold text-4xl m-auto'  />
<h3>Fibra</h3>
              </Link>

            </li>


            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/grila">
              <TbPlayerPlayFilled className='text-red-600 font-semibold text-4xl m-auto'  />

<h3>Grila TV</h3>
              </Link>

            </li>

            <li className='font-semibold text-black text-lg hover:text-violet-900'>
              <Link to="/acoperire">
              <FaMapMarked className='text-green-600 font-semibold text-4xl m-auto' />
<h3>Acoperire</h3>
              </Link>

            </li>

          </ul>
        </nav>
      </header>
      
    </div>
<br />


<div className='grila'>
            <h2>moldcellTV+</h2>
            <h1>Descoperă cea mai tare experiență <br />
TV acum și la tine acasă</h1>
<br />
<Link to="/acoperire"><button id='comanda'>Comanda</button></Link>
        </div>
<br />
   
<div className='location'>
    <FaLocationDot className='text-5xl text-green-600 '/>
    <br />
    <h2 className='text-center text-xl text-black font-semibold'>Verifica acoperire</h2>

</div>

<div className='adb p-3 '>
    <div className='ard'>
        <h2 className='text text-xl text-black font-semibold'>Raion/Municipiu</h2>
        <input type="text" placeholder='Alege' />

        
    </div>

    <div  className='ard'>
        <h2 className='text-xl text-black font-semibold'>Localitate</h2>
        <input type="text" placeholder='Alege' />
        
        
    </div>
    <div  className='ard'>

    <h2 className=' text-xl text-black font-semibold'>Anul</h2>
        <input type="text" placeholder='Alege' />
    </div>




</div>












<div className='adb p-3 '>
    <div className='ard  '>
        <h2 className=' text-xl text-black font-semibold'>Strada</h2>
        <input type="text" placeholder='Alege' />

    </div>

    <div className='ard'>
        <h2 className=' text-xl text-black font-semibold'>Bloc</h2>
        <input type="number" placeholder='Alege' />
        
        
    </div>

    
    <div  className='ard'>

    <h2 className=' text-xl text-black font-semibold'>Tip Echipament</h2>
        <input type="text" placeholder='Alege' />
    </div>

</div>
<div className='images'>
   <Link to="/contacte"> <button id='comanda'>Verifica</button></Link> 

</div>

    </div>
  )
}

export default Acoperire