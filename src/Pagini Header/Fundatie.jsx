import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Fundatie = () => {
  return (
    <div>
      <br />
      <div className='alter'>
        <img src="https://i.simpalsmedia.com/point.md/news/thumbnails/large/0157c981f33a0106693b101ca229d57d.webp" alt="" />


      </div>
<br />
      <div className='fund_text'>
        <h2>Ne aducem contribuția la îmbunătățirea vieții în Moldova prin transformarea digitală, utilizarea tehnologiilor, <br /> asistență financiară și know-how, precum și prin implementarea proiectelor orientate spre atingerea Obiectivelor <br /> de dezvoltare durabilă ONU.

 <br />
<br />
Fundația Moldcell susține și implementează proiecte sociale, educaționale, de afaceri, inovaționale, de cercetare, <br /> în beneficiul cetățenilor și pentru dezvoltarea țării, ghidați de Pilonii de Responsabilitate Digitală: Educație, <br /> Susținere și Investiții în Afaceri Sociale, Societate și Implementarea Obiectivelor de Dezvoltare Durabilă.</h2>

      </div>

      <div className='fund_back'>
        <h2>Scop</h2>
        <p>Scopul Fundației Moldcell este de a investi și implementa proiecte cu impact asupra societății, de schimbare spre bine și pe <br /> termen lung pentru Moldova, și anume: <br /></p>
        <h3>Contribuția la crearea infrastructurii calitative, necesare pentru a asigura instruirea la nivel înalt al specialiștilor  <br />din domeniul TIC, precum și de a sprijini potențialul de cercetare al instituțiilor de învățământ.
<br />
Contribuția la creșterea investițiilor în mediului de afaceri, susținerea financiară a ideilor sociale de afaceri și <br /> oferirea sprijinului necesar pentru dezvoltarea acestora, precum și stimularea inovației și apariția crearea <br /> oportunităților în domeniul TIC

 <br />
Cooperarea cu organizații internaționale ce urmăresc obiective similare.


</h3>

      </div>
<br />


<div className='adb'>
  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-01-1.svg" alt="" />
    <h3>mai mult de 10 milioane de lei</h3>
<p className='text-center'>pentru combaterea virusului Covid-19.</p>
  </div>

  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-02-1.svg" alt="" />
    <h3>10 ventilatoare pulmonare</h3>
<p className='text-center'>pentru 8 spitale din Moldova.</p>
  </div>


  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-03-1.svg" alt="" />
    <br />
    <h3>5000 combinezoane de protecție</h3>
<p className='text-center'>pentru personalul medical.</p>
  </div>




  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-04-1.svg" alt="" />
    <br />
    <h3>36.500 de mese gratuite</h3>
<p className='text-center'>pentru medicii de pe linia frontulu.</p>
  </div>



  
  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-05-1.svg" alt="" />
    <br />
    <h3>1 097 310 GB</h3>
<p className='text-center'>pentru sprijinirea educației online.</p>
  </div>



  
  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-06-1.svg" alt="" />
    <br />
    <h3>2 420 800 de minute furnizate</h3>
<p className='text-center'>pentru o comunicare îmbunătățită în timpul anului de pandemie.</p>
  </div>

  </div>


<div className='adb'>
  
  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-07-1.svg" alt="" />
    <br />
    <h3>peste 1100 de persoane în vârstăe</h3>
<p className='text-center'>au fost instruite în utilizarea tehnologiilor digitale.</p>
  </div>


  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-08-1.svg" alt="" />
    <br />
    <h3>mai mult de 25.000 de copii și părinți</h3>
<p className='text-center'>au fost instruiți să utilizeze în siguranță internetul.</p>
  </div>



  <div className='ard'>
    <img id='add_img' src="https://fundatia.moldcell.md/wp-content/uploads//2021/05/IconiteFMset2-09-1.svg" alt="" />
    <br />
    <h3>peste 2000 de copii și părinți</h3>
<p className='text-center'>au fost instruiți și informați cu privire la jocurile responsabile.</p>
  </div>
</div>

<div className='socials'>

<Link target='blank' to="https://www.youtube.com/emoldcell"><FaYoutube className='text-6xl text-red-500 font-semibold'/></Link>
<Link target='blank' to="https://www.instagram.com/explore/locations/1599793550332534/moldcell/"><FaFacebook className='text-6xl text-blue-500 font-semibold' /></Link>
<Link target='blank' to="https://twitter.com/_Moldcell"><FaTwitter className='text-6xl text-blue-500 font-semibold'/></Link>
<Link target='blank' to="https://www.instagram.com/explore/locations/1599793550332534/moldcell/"><FaInstagram className='text-6xl text-red-500 font-semibold '/></Link>


      </div>
</div>
  )
}

export default Fundatie