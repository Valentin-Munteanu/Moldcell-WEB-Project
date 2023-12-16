import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SliderHome = () => {
    const images = ["https://spb.mf-kupe.ru/assets/images/blog/664_40qyi1.jpg" ,"https://moldcell.md/files/frontimg/main-x10-next-1904x400-ro.jpg" , "https://moldcell.md/files/frontimg/main-x10-family-1904x400-ro.jpg" ,"https://akket.com/wp-content/uploads/2019/12/Huawei-i-Honor-1.jpg" ,"http://skuonline.ru/uploads/images_original/00/06/48/2014/11/19/8f2e1d.png" ,"https://posmplast.ru/wp-content/uploads/2019/12/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg"]
    const[imgNumber, setImgNumber] = useState(0)
  return (
    <div className='slider'>
        <img src={images[imgNumber]} alt="Slider-Home" />
        <button id='left' onClick={() => {
            if(imgNumber < images.length - 1)
            setImgNumber(imgNumber + 1)
        }}><FaArrowLeft/></button>
<br />
<button id='right' onClick={() => {
            if(imgNumber > 1)
            setImgNumber(imgNumber -1)
        }}><FaArrowRight/></button>

        

    </div>
  )
}

export default SliderHome