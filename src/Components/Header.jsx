import React from 'react'
import { Link } from 'react-router-dom'
import {BiSolidCart} from "react-icons/bi"
import { useContext } from 'react'
import { Conte } from '../Context/Context'


const Header = () => {
   const{cart} = useContext(Conte);
   const totalProductsInCart = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
        <header className='flex-justify-between align-center bg-blue-400'>
            <nav>
                <ul className='flex gap-12 text-lg items-center'> 
                    <li>
<Link to="/"><img className='h-24 w-72 p-3 ' src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Moldcell.png" alt="Logo Moldcell" /></Link>
                     </li>
                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/business">Business</Link>

                     </li>
                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/reincarca-cont">Reancarca Contul</Link>

                     </li>

                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/Treci-la-moldcell">Treci la Moldcell</Link>

                     </li>

                

           
                     
                     <li className='font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/my-moldcell">My Moldcell</Link>

                        
                     </li>

                     <li className=' font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                        <Link to="/fundatie">Fundatia Moldcell</Link>
                     </li>

                     <li className=' font-semibold text-white text-lg hover:text-violet-900 hover: border-b border-red-800'>
                 
                        <Link className='font-semibold text-red-700 text-5xl hover:text-violet-900' to="/cart"><h1 className='text-center text-xl font-semibold text-red-900'>{totalProductsInCart}</h1><BiSolidCart/></Link>
                     </li>

                   
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header