import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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

                   
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header