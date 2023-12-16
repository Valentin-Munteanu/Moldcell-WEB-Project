import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SliderPhones = () => {
    const images = ["https://media.wired.co.uk/photos/606d9f16d8817d4fe4c506e2/master/w_1600%2Cc_limit/wired-xiomi-2.jpg","https://i.ytimg.com/vi/wMjWEHU5Cfw/maxresdefault.jpg", "https://c.dns-shop.ru/thumb/st4/fit/760/600/3f7d6032214143a89f8f38197ff345ef/q93_8ad72e97b7cc38872b0c85114f9712e6d05d55a9a72ae5b52d6c55ed2beef0e9.png", "https://shopozz.ru/images/articles/article-750/p1gctau5vr15ro14501ct3h851nfg3.png", "https://www.slashgear.com/wp-content/uploads/2020/12/iphone-12-pro-max-10-1280x720.jpg", "https://miport.ru/assets/img/products/xiaomi-mi-10t/big.jpg", "https://www.gizmochina.com/wp-content/uploads/2021/12/Xiaomi-12-Pro-and-Xiaomi-12.jpg"]
    const [sliderp, SetsliderP] = useState(0)

  return (
    <div className='slider'>
<img src={images[sliderp]} alt="Imagini" />
<Link to = "/telefoane"><button className='btn'>Comanda</button></Link>
<br />
<button id='left' onClick={() => {
    if(sliderp < images.length -1)
    SetsliderP(sliderp + 1)
}}><FaArrowLeft/></button>

<button id='right' onClick={() => {
    if(sliderp > 1) 
        SetsliderP(sliderp - 1 )
    
}}><FaArrowRight/></button>
    </div>
  )
}

export default SliderPhones