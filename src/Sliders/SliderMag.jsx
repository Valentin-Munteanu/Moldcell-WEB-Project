import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const SliderMag = () => {
    const images = ["https://newsmaker.md/wp-content/uploads/2021/12/1500lei-ru.jpg","https://avatars.mds.yandex.net/i?id=619c6cbe75a31d8387f685b4d833a844_l-5876939-images-thumbs&n=13", "https://tv8.md/resources/ru/wp-content/uploads/2021/03/tv8-ru.jpg", "https://mail.mamaplus.md/sites/default/files/styles/1200_x_628/public/mplus_migrate/16033/58d0b7297b908_58d0b7297b953.png?itok=jrajRtuZ", "https://images.runpay.com/AbonamentBru.jpg", "https://i.ytimg.com/vi/OIFeVKrpDUc/maxresdefault.jpg", "https://moldcell.md/files/image/screenshot_at_dec_02_12-01-53.jpg"]
    const [sliderp, SetsliderP] = useState(0)
  return (
    <div className='slider'>
<img src={images[sliderp]} alt="Imagini" />
<button id='left' onClick={() => {
    if(sliderp < images.length -1)
    SetsliderP(sliderp + 1)
}}><FaArrowLeft/></button>
<br />
<button id='right' onClick={() => {
    if(sliderp > 1) 
        SetsliderP(sliderp - 1 )
    
}}><FaArrowRight/></button>
    </div>
  )
}

export default SliderMag