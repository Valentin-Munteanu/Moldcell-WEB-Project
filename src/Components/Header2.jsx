import React from 'react'
import { Link } from 'react-router-dom'
import { FcSmartphoneTablet } from "react-icons/fc";

const Header2 = () => {
  return (
    <div>
           <header className='flex-justify-between align-center '>
        <nav>
            <ul className='flex gap-12 text-lg items-center justify-center'>
                <li className='font-semibold text-black text-lg hover:text-violet-900 '>
                    <Link to="/online-magazin">Magazin Online</Link>

                </li>

                <li className='font-semibold text-black text-lg hover:text-violet-900 '>
                    <Link to="/internet-tv">Internet & TV</Link>
                    
                </li>


                <li className='font-semibold text-black text-lg hover:text-violet-900 '>
                    <Link to="/conectare">Mobil</Link>
                    
                </li>

                <li className='flex gap-3 text-center items-center rounded-md hover:bg-violet-700 active:bg-blue-800'>
                    <button className='phone'><FcSmartphoneTablet/> 078000444</button>
                    
                </li>


            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header2