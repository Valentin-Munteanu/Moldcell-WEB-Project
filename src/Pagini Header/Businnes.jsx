import React from 'react'
import SliderHome from '../Sliders/SliderHome'
import SliderPhones from '../Sliders/SliderPhones'
import { Link } from 'react-router-dom'

const Businnes = () => {
  return (
    <div>
      

    <div>
        
        <SliderHome/>
        </div>

        <div className='adb'>
        <div className='ard'>
<img className='port_img' src="https://basket-05.wb.ru/vol755/part75576/75576215/images/big/1.jpg" alt="" />
<h3>Air Pods 3 Pro</h3>
<br />
<br />

<h4>7500 lei</h4>
<h3>6410 lei</h3>
        </div>

        <br />

        <div className='ard'>
<img id='port_img' src="https://techprincess.it/wp-content/uploads/2022/09/Apple-Watch-SE-2022-recensione.jpg" alt="" />
<h3>Apple Watch 2023</h3>
<br />
<h4>21100 lei</h4>
<h3>15000 lei</h3>
</div>

<div className='ard'>
<img id='port_img' src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled4795.jpg" alt="" />
<h3>Iphone 14 Pro</h3>
<br />
<h4>21000 lei</h4>
<h3>16000 lei</h3>
</div>
</div>

    
    <div className='images'>
      <Link to="/conectare"><img src="https://images.runpay.com/AbonamentBru.jpg" alt="Alternate" /></Link>
    <Link to="/portare"><button className='btn'>Vezi Detalii</button></Link>
    
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

export default Businnes