import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { IoWifiSharp } from "react-icons/io5";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BsUsbSymbol } from "react-icons/bs";
import { FcClock } from "react-icons/fc";
import { BsRouterFill } from "react-icons/bs";
import { FcLockPortrait } from "react-icons/fc";


import { FaMapMarked } from "react-icons/fa";
const Fibra = () => {
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

    <div className='alter'>
        <img className='internet_id' src="https://static.locals.md/2022/12/impreuna-1920x1080-ru.jpg" alt="" />

    </div>
<br />
    <div className='alter'>

         <div className='images'>

<h1 className='text-center'>Conectează Fibră cu super viteză și router performant <br />
și alege oferta:</h1>
</div>
</div>
<div className='adb'>

        <div className='abonament'>

         <h1 className='text-center'>Fibra 130</h1>
         <br />
<h2 className='text-2xl'>Viteza 200 Mbps <br /> Router WiFi Huawei </h2>

<br />


<br />

<h1>50% reducere</h1>
<h2>la Fibra </h2>

<button className='btn'>Comanda</button>




  
        </div>


        <div className='abonament'>

<h1 id='txt'>Fibra 200</h1>
<br />
<h2 className='text-2xl'>Viteza 500 Mbps <br /></h2>


<h1>50% reducere</h1>
<h2>la Fibra</h2>
<h2>sau</h2>
<h1>3000 lei reducere</h1>
<h2>la dispozitive</h2>
<button className='btn'>Comanda</button>





</div>
</div>
<div className='images'>
<h1 className='text-center'>Cea mai bună experiență internet cu <br /> acoperire în toată casa</h1>
</div>

<div className='adb'>
    <div className='ard'>
        <BsUsbSymbol className='text-violet-500 text-6xl m-auto font-semibold'/>
        <h2 className='text-center font-semibold text-2xl text-violet-800' >Fibră optică până în  <br />apartamentul tău</h2>
        <p className='text-center font-semibold text-lg'>Fibră optică până în apartament sau casa ta îți <br />  garantează semnal stabil fără atenuări sau <br />pierderi, ca să te bucuri de internet din plin.</p>
    </div>



    <div className='ard'>
        <FcClock className='text-violet-500 text-7xl font-semibold m-auto'/>
        <h2 className='text-center font-semibold text-2xl text-violet-800'>Viteză până la 500 Mbps și <br /> conexiune stabilă</h2>
        <p className='text-center font-semibold text-lg'>Trăiește cea mai bună experiență online la <br />descărcare/încărcare a fișierelor, vizionează filme <br /> online și organizează conferințe video.</p>
    </div>
</div>




<div className='adb'>
    <div className='ard'>
        <BsRouterFill className='text-violet-500 text-6xl m-auto font-semibold'/>
        <h2 className='text-center font-semibold text-2xl text-violet-800' >Router Wi-Fi dual band inclus <br /> în abonament</h2>
        <p className='text-center font-semibold text-lg'>Separă dispozitivele media cum ar fi Smart TV sau <br /> Consola de jocuri pe o rețea WiFi separată și <br /> savurează din plin calitatea și viteza jocurilor în <br /> regim online.</p>
    </div>

    <div className='ard'>
        <FcLockPortrait className='text-violet-500 text-7xl m-auto font-semibold'/>
        <h2 className='text-center font-semibold text-2xl text-violet-800' >4 porturi LAN <br />
disponibile</h2>
        <p className='text-center font-semibold text-lg'>Conectează la internet prin cablu până la 4 <br /> dispozitive: calculatoare, Smart TV-uri, Console <br /> pentru jocuri, etc.</p>
    </div>



    </div>


<br />
    <div className='router'>

    <img className='router_img' src="https://yandex-images.clstorage.net/9Z74prn16/c10c3cRfjejl/SQY8FX5FVWnXT--ryhpEiAgPo06kd_rCyVuKL97xxreaCWWvHLgkupf1F5fuRSAed-ENQn4D7ep6NRFxq8kskVk37XALxeUplhorujrLA5pqDVEtBwA4sOqNm8-bVDc1aW1Ru3ie0T2BIIHGXAXDLPVV6CRZVvr_PfF05Y1cOsX8ggnnTXe0q1Yvewt6C1FZGi3T7iTBakDJPEktz1YVdnprYmg4DtIfQXKQxCxkwOxUlctV-6Z5jy3hBteOjelGzPFppy40dRqW_1sLK0vxeOkMAD1nE0tj-yzYjI_ndlWL2XOKy_wzXHPioZe8BcEv5VQI9Ctm-A1coBVEnc-J934ya3R-tiR61Mw5GcjIAvk5HXB-FZEoc5r8aq8958XlGqkgOVlv0W8gsbM0PeWw3tTF-GU5lfh-LoMEZ53s21Tcs7p3XCXFeUYvmik4mvKrSg0SHCaiKqHLDeruvidH94rIMFjK3eIcMtFAV28XI65G5Cv1WUXpXe1wtwQeTQvUThKKR6y356nXPAmLmctiKYreYB7lU7kiiGzrTu7HhJZaW7P6G8xhXVMRYlTcp4MOJ3RbV4tVabxfk0bEv94olW7Dqlb8dBUYt8zLO3t6IftLb_Fdx8HIExpuaM_81Ac12utDG2kNwS5zEyB1jnZD_gcHSUQ5tAlMf-M3RO2s-7dvMrimfqZmmqaeO9treBMKOt3TvZcCaUK7PypPviR3xFnL0nh57HPfMALS915E8IwFRNo0SnWb_d_wZmZ-j5h03OLq1fwUBMqkzct7WzpBOyjdMTw00LsB2b-LHu4VNDTrGdN6e-3TL1PAgEb9hmM8RSdqpKmH24-9omdGX5xZFu-R-WbPFeR4RIx5e8qpootZPXNORKGpQ-gsGg6Oh6R2KHoByqsuQ53w0JM3HlTA3Jb2uOeplcqsXiOHph_ti6QeYPoU7cfGWLSu-7q5-gM56u5TbLVwu2O4rljs4" alt="" />
    <h1 className='text-violet-700 font-semibold text-3xl '>Router Wi-Fi Huawei</h1>
    <p>Internet prin fibră optică cu <br /> viteză de până la 500 Mbps prin <br /> cablu și până la 300 Mbps prin <br /> Wi-Fi</p>
    <button className='all'>Detalii</button>

  </div>

  
</div>




  )
}

export default Fibra