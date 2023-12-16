import React from 'react'
import SliderHome from '../Sliders/SliderHome'
import { Link } from 'react-router-dom'
import SliderPhones from '../Sliders/SliderPhones';

const Home = () => {
  return (
   <div>
    <br />


    <div>
        
    <SliderHome/>
    </div>

<div className='images'>
  <Link to="/conectare"><img src="https://images.runpay.com/AbonamentBru.jpg" alt="Alternate" /></Link>
<Link to="/conectare"><button className='btn'>Vezi Detalii</button></Link>

</div>
<br />

<div>
    <SliderPhones/>
</div>

<div className='images'>
<img src="https://leverageedu.com/blog/wp-content/uploads/2020/12/New-Years-Quiz.jpg" alt="" />




   <h1>DESCOPERA OFERTELE DE CRACIUN, CU SURPRIZE <br />  si REDUCERI PENTRU TOTI LA MOLDCELL </h1> 
   <p>Oriunde te prind sărbătorile de iarnă, când cei dragi sunt alături, Magia se întâmplă. <br /> În prag de Crăciun, ți-am pregătit surprize și oferte speciale pentru tine, dar și pentru <br /> întreaga familie. Oferă-le celor dragi emoții și momente unice, iar după cele mai <br /> inspirate cadouri vino la Moldcell. </p>

  <Link to="/news"><button className='btn'>AFLA MAI MULT</button></Link>
 
</div>
<br />
<br />
<div className='news'>
    <img src="https://mail.mamaplus.md/sites/default/files/styles/1200_x_628/public/mplus_migrate/16033/58d0b7297b908_58d0b7297b953.png?itok=jrajRtuZ" alt="" />
    <br />
    <h2>Moldcell lansează serviciul e-Sănătate: Asistentul  personal de sănătate, direct de pe telefon</h2>
<Link to="/news"><button className='btn'>Vezi Toate</button></Link>
 
<br />


</div>


<div className='news2'>


<h2>Noutati despre retea</h2>
<h3>07 decembrie 2023</h3>

<p>Stimați Abonați, din cauza condițiilor climaterice nefavorabile, existā riscul de deconectare a energiei electrice, <br /> fapt ce poate cauza întreruperi în prestarea serviciilor mobile. Vā mulțumim pentru ințelegere.</p>
<h3>09 decembrie 2023</h3>
<p>Site-uri media, blocate la solicitarea autorităților: UPDATE 20 aprilie</p>
<Link to="/news"><button className='btn'>Vezi Toate</button></Link>

</div>




   </div>
  )
}

export default Home