import React from 'react'
import { ImInfinite } from "react-icons/im";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { IoWifiSharp } from "react-icons/io5";
import { FaMapMarked } from "react-icons/fa";

const MoldcellPlus = () => {
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

<div className='moldcell_plus'>
    


       
        <h1 className='text-black text-3xl font-semibold text-center'>Moldcell PLUS</h1>
<br />
    
        <div className='adb'>
            <div className='ard'>
<ImInfinite className='text-3xl text-yellow-400 font-semibold'/>
<h3 className='text-xl font-semibold '>Nelimitat</h3>

            </div>

            <div className='ard'>
<TbPlayerPlayFilled className='text-3xl text-yellow-400 font-semibold'/> 
<h3 className='text-xl'>Fibra</h3>

            </div>



            <div className='ard'>
<MdOutlineWifiProtectedSetup className='text-3xl text-yellow-400 font-semibold'/>
<h3 className='text-xl'>Televiziune</h3>

            </div>
        </div>
        
{/*  */}

<h1  className='text-yellow-400 text-3xl font-semibold text-center'>Fii mereu în plus cu Abonament Moldcell <br /> și Fibra + TV  acasă gratuit</h1>





<div className='adb'>

        <div className='abonament'>

         <h1>Abonament <br /> NEXT 290 </h1>
         <br />
<h2 className='text-2xl'>NELIMITAT min <br />si 100 SMS nationale</h2>

50 min/SMS <br />
internationale
<br />


<br />


<button className='btn'>290 lei <br /> lunar</button>


        </div>


        <div className='abonament'>

<h1 id='txt'>Fibra + TV 190</h1>
<br />
<h2 className='text-2xl'>Viteza 300 Mbps <br /></h2>
186 canale / 118 HD <br />

<br />

<h1>50% reducere</h1>
<br />
<button className='btn'>0 lei </button>


</div>


</div>

</div>

<div className='validation'>
    <h1>Acum ai Internet prin fibră de mare viteză și televiziune acasă, <br /> cu cel mai bogat conținut, pentru  <br />întreaga familie. Pentru conectare, apelați 78 511 511 sau 511 (gratuit în rețea)</h1>
<h3>Comandă Abonamente Moldcell și Fibra + TV acasă gratuit</h3>
<br />


            <h2>Numar de telefon/cont</h2>
            <input type="text" placeholder='Nume/Prenume' />
            <h2>Numar de telefon</h2>
            <input type="number" placeholder='03/XXXXXX' />
            <br />
<input type="checkbox" /> <h2>Am luat si sunt de acord cu <br /> conditiile de prestare a serviciului Reincarcare online</h2> 
<button className='btn'>Solicita Apel</button>
</div>
        
    </div>
  )
}

export default MoldcellPlus