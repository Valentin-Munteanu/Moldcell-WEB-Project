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
import SliderMag from '../Sliders/SliderMag';
import { FcProcess } from "react-icons/fc";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { SiAdguard } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { MdStars } from "react-icons/md";

const MagazinOnline = () => {
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
    <div>
      <SliderMag/>
    </div>

    <div className='divuri'>
      <Link to="/mobil"><img className='im1' src="https://i.simpalsmedia.com/point.md/news/thumbnails/large/d9a572a941fd522538f4467848333c42.png" alt="" />  </Link>
      
      <Link to="/accesorii"><img className='im2' src="https://eshop.cdnmoldcell.md/image/cache/catalog/banners/mozaic/Casti_fara_fir_mosaic-new-1140x490.png" alt='' /></Link>
      <br />
      <h3>Casti Bluetooth</h3>
<br />
<div>
  
<br />
<Link to="/accesorii"><img className='im3' src="https://ae01.alicdn.com/kf/H968f88885a9e4be5a26a4e110b5120ddA/X20-Sport-Smart-Watch-Fitness-Bracelet-Fashion-Smartwatch-Lady-Watches-IP68-Waterproof-Fitness-Sport-Pedometer-Intelligent.jpg" alt="" /></Link>
<h3>SmartWatch</h3>
<br />
<Link to="/accesorii"><img className='im4' src="https://9to5toys.com/wp-content/uploads/sites/5/2013/10/jbl-pulse-speaker-9to5toys.jpg" alt="" /></Link>
   <h3>Boxe</h3>
</div>

    </div>

    <div className='add '>
      <h1>Telefoane</h1>
      <img src="https://gsminfo.com.ua/wp-content/uploads/2019/11/redmi-note-8-nova-versiya.jpg" alt="" />
      <h2>Xiomi Note 9 8GB</h2>


      <h3>667 lei</h3>
      <p>lunar</p>
<br />
      <h3>10000 lei</h3>

    </div>

    <div className='add'>
      <img src="https://m-cdn.phonearena.com/images/articles/392666-image/14-pro-deep-purple.jpg" alt="" />
      <h2>Apple Iphone 14 PRO / 256GB / Gray</h2>


      <h3>867 lei</h3>
      <p>lunar</p>
      <br />
      <h3>20000 lei</h3>

    </div>


    <div className='add'>
      <img src="https://uncrate.com/p/2018/10/samsung-galaxy-a9.jpg" alt="" />
      <h2>Samsung Galaxy A24</h2>

      <h3>547 lei</h3>
      <p>lunar</p>
<br />
      <h3>15000 lei</h3>

    </div>
    <br />
<div className='flex justify-center '>
 <Link to="/telefoane"> <button className='all'>Vezi toate</button></Link>
</div>
<br />


<div className='alter'>
<img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkg5qde8OrBWavVilizVNAX6aKTM5SRkZCeTgDn6uOyic" alt="" />
<Link to="/telefoane"><button className='all'>Vezi Oferta</button></Link>


</div>

<div className='add'>
  <h1>Gadgeturi</h1>
  <img src="https://w7.pngwing.com/pngs/842/836/png-transparent-apple-watch-series-3-apple-watch-series-2-mockup-s-watch-strap-electronics-gadget-apple-watch.png" alt="" />
      <h2>Apple Watch Series 2</h2>

      <h3>1000 lei</h3>
      <p>lunar</p>
<br />
      <h3>10000 lei</h3>



</div>


<div className='add'>
  <h1>Gadgeturi</h1>
  <img src="https://www.esrgear.fr/blog/wp-content/uploads/2022/02/Whats-the-Difference-Between-AirPods-2-and-1.jpg" alt="" />
      <h2>Air Pods 2 PRO</h2>

      <h3>800 lei</h3>
      <p>lunar</p>
<br />
      <h3>7000 lei</h3>


      
</div>



<div className='add'>
  <h1>Gadgeturi</h1>
  <img src="https://www.stuff.tv/wp-content/uploads/sites/2/2021/09/stuff-airpods-3-preview-render.png?w=1080" alt="" />
      <h2>AirPods 3 Pro</h2>

      <h3>600 lei</h3>
      <p>lunar</p>
<br />
      <h3>8000 lei</h3>


      
</div>

<div className='flex justify-center '>
 <Link to="/gadjeturi"> <button className='all'>Vezi toate</button></Link>
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
    </div>
  )
}

export default MagazinOnline