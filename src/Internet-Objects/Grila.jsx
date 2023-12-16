import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { IoWifiSharp } from "react-icons/io5";
import { TbPlayerPlayFilled } from "react-icons/tb";


import { FaMapMarked } from "react-icons/fa";
const Grila = () => {
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
        <div className='images'>
            <h1>Grila de canale TV</h1>
<p>Alegeti pachetul dorit pentru a vedea lista canalelor incluse</p>

        </div>

<br />

<div className='adb'>

        <div className='abonament'>
<h4>250 lei</h4>
         <h1 className='text-center'>Fibra + TV 125</h1>
         <br />
<h2 className='text-2xl'>196 canale / 124 HD </h2>



  
        </div>



        <div className='abonament'>
<h4>190 lei</h4>
         <h1 className='text-center'>Fibra + TV 95</h1>
         <br />
<h2 className='text-2xl'>181 canale / 115 HD </h2>



  
        </div>


        
        <div className='abonament'>
<h4>150 lei</h4>
         <h1 className='text-center'>Fibra + TV 75</h1>
         <br />
<h2 className='text-2xl'>125 canale / 79 HD </h2>



  
        </div>





</div>
<br />
<div className='alter'>
    <img className='_img' src="https://tv8.md/resources/2022/12/01/9c10e445-6f6e-491e-93af-f8608f8f2252_moldcellPLUS-2023-1920x1080-RU.jpg" alt="" />


</div>
<br />
<div className='images  bg-yellow-400 h-56'>
    <h1>Alege cea mai potrivită ofertă la conectare</h1>
    <p>Serviciul Televiziune e disponibil la conectare
abonamente Fibra + TV.</p>
<br />
<Link to="/internet_fix"><button className='btn'>Abonamente</button></Link>

</div>

<br />

<div className='box'>
    <h2>Android TV Box</h2>
    <p>Dispozitivul 4K care transformă orice TV <br />
în unul smart, mai puternic și mai <br />
interactiv.</p>
<Link target='blank' to="https://www.moldcell.md/files/Policies/Ghid_RU_de_Utilizare_Android_TV_MAG425A.pdf"><button className='btn'>GHID DE UTILIZARE</button></Link>
</div>
    </div>
  )
}

export default Grila