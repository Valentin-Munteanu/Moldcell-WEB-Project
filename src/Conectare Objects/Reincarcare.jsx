import React from 'react'
import { Link } from 'react-router-dom'
import { CiWallet } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Reincarcare = () => {
  return (
    <div>
    <div className='adb'>
        <div className='abonament'>
            <h1 className='txt'>Reincarca Online</h1>
            <h2>Numar de telefon/cont</h2>
            <input type="text" placeholder='1/6/7XXXXXXX' />
            <h2>Indica suma : lei</h2>
            <input type="number" placeholder='10 MDL' />
            <br />
<input type="checkbox" /> <h3>Am luat si sunt de acord cu <br /> conditiile de prestare a serviciului Reincarcare online</h3> 
<button className='btn'>Continuare</button>
</div>

<div className='add  bg-gray-100'>


<h2>Reîncarcă ușor, oricând și oriunde, cu <br /> Reîncărcare online de la Moldcell</h2>
<p>La Moldcell poți reîncărca contul cu cardul bancar, rapid și sigur. O poți face <br /> oricând și oriunde ai fi, cu sau fără autentificare.</p>

<br />

<p className='text-sm font-semibold'>Urmează doar 3 pași simpli: <br />
1. Indică numărul de telefon, care urmează să fie reîncărcat, și suma spre plată. <br />
2. Indică datele cardului bancar. <br />
3. Efectuează plata. <br />
<br />
- Disponibil 24/24. <br />
- Pentru procesarea plății utilizăm sistemul 3D Secure. <br />
- Comision 0%. <br />
- Suma reîncărcării – între 20 și 5000 lei</p>



</div>

        </div>

        <div className='isa'>
            <img src="https://avatars.mds.yandex.net/i?id=2a238de73940bf8a0dbb1f5d682c996820fd7131-10807817-images-thumbs&n=13" alt="" />
            <img src="https://lh3.ggpht.com/exeL0_j_nrqOrbSfa7ZyawyFf3DPsFdOS2FyKGQXuF2_XTqP6fhvaiAdwK_0TKcBOCvg" alt="" />
            <img src="https://papik.pro/uploads/posts/2021-11/1636161799_48-papik-pro-p-visa-logotip-foto-52.jpg" alt="" />
            <br />

        </div>
        <br />

        <div className='alter'>
        <img src="https://i.ytimg.com/vi/rP_P_3Hc8ac/maxresdefault.jpg" alt="" />

        </div>

        <br />


        <div id='links'>
    <div className='p-3'>
<Link to="/magazinM"><ImLocation className='text-5xl text-white m-auto hover:text-violet-900'/><h3 className='text-white font-semibold text-xl'>Magazine Moldcell</h3></Link>
    </div>


    <div>
<Link to="/conectare"><CiWallet className='text-5xl text-white m-auto hover:text-violet-900'/><h3 className='text-white font-semibold text-xl '>Conectare</h3></Link>
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

export default Reincarcare