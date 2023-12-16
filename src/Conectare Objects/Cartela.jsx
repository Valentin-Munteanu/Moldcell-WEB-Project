import React from 'react'
import { Link } from 'react-router-dom'
import { FaSimCard } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { IoLogoApple } from "react-icons/io5";
import { IoIosTabletLandscape } from "react-icons/io";
import { LiaLaptopSolid } from "react-icons/lia";
import { IoWatchOutline } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { SiAdguard } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const Cartela = () => {
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

      <div className='alter'>
<img src="https://i.simpalsmedia.com/point.md/news/thumbnails/large/ff0ea5f8264e8387db7b6006cfb30ebd.jpg" alt="" />

      </div>

<br />

<div className='e-abonament'>
  <h2>E-ABONAMENT</h2>
  <h3 className='text-violet-900 text-center font-semibold text-2xl '>80 lei</h3>


<p>500 min</p>
<p>nationale</p>

<br />
<h3 className='text-violet-900 text-center font-semibold text-2xl '>60 GB</h3>
<p>trafic Internet</p>
<br />

<h1>Retele sociale</h1>
<br />

<button className='btn'>Conectare</button>

</div>

<div className='adb'>
  <div className='ard'>
    <img id='add_img' src="https://eshop.moldcell.md/catalog/view/theme/moldcell/image/connection/cartela/step-1.svg" alt="" />
    <h3>Activeaza cartela SIM</h3>
<p className='text-center'>Introdu cartela ta nouă în telefon și <br /> activeaz-o.</p>
  </div>

  <div className='ard'>
    <img id='add_img' src="https://eshop.moldcell.md/catalog/view/theme/moldcell/image/connection/cartela/step-2.svg" alt="" />
    <h3>Descarcă aplicația My Moldcell</h3>
<p className='text-center'>Creează-ți cont în aplicație cu numărul tău <br /> nou.</p>
  </div>


  <div className='ard'>
    <img id='add_img' src="https://eshop.moldcell.md/catalog/view/theme/moldcell/image/connection/cartela/step-3.svg" alt="" />
    <br />
    <h3>Înregistarea electronică a numărului</h3>
<p className='text-center'>Accesează în aplicație meniul Solicitare <br /> servicii:  Înregistrare număr și urmează <br /> instrucțiunile de înregistrare.</p>
  </div>




</div>




<div className='adb'>
  <div className='ard'>
    <img id='add_img' src="https://eshop.moldcell.md/catalog/view/theme/moldcell/image/connection/cartela/step-4.svg" alt="" />
    <h3>Atașează foto act de identitate</h3>
<p className='text-center'>Atașează la înregistrare poza buletinului tău <br /> de identitate, a pașaportului sau permisului <br /> de conducere (2 poze, față și verso).</p>
  </div>

  <div className='ard'>
    <img id='add_img' src="https://eshop.moldcell.md/catalog/view/theme/moldcell/image/connection/cartela/step-5.svg" alt="" />
    <h3>Atașează fotografia ta</h3>
<p className='text-center'>Atașează poza ta de tip selfie, ținând în <br /> mână actul pe care îl vei atașa – ca să <br /> putem confirma identitatea ta.</p>
  </div>


  <div className='ard'>
    <img id='add_img' src="https://eshop.moldcell.md/catalog/view/theme/moldcell/image/connection/cartela/step-6.svg" alt="" />
    <br />
    <h3>Confirmarea înregistrării electronice</h3>
<p className='text-center'>Gata! În scurt timp vei primi mesaj de <br /> confirmare a înregistrării electronice și vei  <br />beneficia de oferta e-Abonament.</p>
  </div>




</div>


<div className='images'>
   <h1>Descarcă aplicația 
My Moldcell</h1>
<div id='links'>

    <Link target='blank' to="https://play.google.com/store/apps/details?id=md.moldcell.selfservice&hl=ro&pli=1"><img src="https://images.squarespace-cdn.com/content/v1/5ad5de410dbda3c85db2b265/1583922256523-TVM13XP3YOSKUE85KL4D/google+%281%29.png?format=1500w" alt="" /></Link>

<Link target='blank' to="https://apps.apple.com/us/app/my-moldcell/id1263419464?l=ro&ls=1"><img src="https://4.bp.blogspot.com/-0JHdNVC9gU0/W-GM5Vq8EPI/AAAAAAAAPqY/dDOSLD0HafAVO7WHNZk-KuDznZel1ZSbQCLcBGAs/s1600/App%2BStore.png" alt="" /></Link>

</div>

        </div>

<br />



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

export default Cartela