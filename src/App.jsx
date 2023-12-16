import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loyaut from './Loyaut/Loyaut'
import Businnes from './Pagini Header/Businnes'
import Fundatie from './Pagini Header/Fundatie'
import MoldcellMoney from './Pagini Header/MoldcellMoney'
import MyMoldcell from './Pagini Header/MyMoldcell'
import ReincarcaCont from './Pagini Header/ReincarcaCont'
import Trecilamoldcell from './Pagini Header/Trecilamoldcell'
import Home from './Pagini Header/Home'
import Context from './Context/Context'
import MagazinOnline from './Pagini 1A/MagazinOnline'
import InternetTV from './Pagini 1A/InternetTV'
import Mobil from './Pagini 1A/Mobil'
import Telefoane from './Magazin-Online/Telefoane'
import News from './Pagini2A/News'
import Accesorii from './Magazin-Online/Accesorii'
import { Apple } from './Magazin-Online/apple'
import Exclusiv from './Magazin-Online/Exclusiv'
import Gadjeturi from './Magazin-Online/Gadjeturi'
import Laptopuri from './Magazin-Online/Laptopuri'
import Tablete from './Magazin-Online/Tablete'
import Televizore from './Magazin-Online/Televizore'
import Conectare from './Magazin-Online/Conectare'
import Abonament from './Conectare Objects/Abonament'
import Cartela from './Conectare Objects/Cartela'
import InternetFix from './Conectare Objects/InternetFix'
import Portare from './Conectare Objects/Portare'
import Reincarcare from './Conectare Objects/Reincarcare'
import MagazinM from './Conectare Objects/MagazinM'
import Contacte from './Conectare Objects/Contacte'
import Mymoldcell from './Conectare Objects/Mymoldcell'
import Acoperire from './Internet-Objects/Acoperire'
import Fibra from './Internet-Objects/Fibra'
import Grila from './Internet-Objects/Grila'
import FibraTV from './Internet-Objects/FibraTV.JSX'
import MoldcellPlus from './Internet-Objects/MoldcellPlus'
import Product from './Magazin-Online/Product'
const myrouter = createBrowserRouter([
  {
    element: <Loyaut/>,
    children:[
      {
        path: "/",
        element: <Home/>

      },

      {
        path: "/business",
        element: <Businnes/>

      },

      {
        path: "/fundatie",
        element: <Fundatie/>

      },


      {
        path: "/reincarca-cont",
        element: <ReincarcaCont/>

      },


      {
        path: "/moldcell-money",
        element: <MoldcellMoney/>

      },

      {
        path: "/my-moldcell",
        element: <MyMoldcell/>

      },


      {
        path: "/Treci-la-moldcell",
        element: <Trecilamoldcell/>

      },

  

      {
        path: "/online-magazin",
        element: <MagazinOnline/>

      },

      {
        path: "/internet-tv",
        element: <InternetTV/>

      },

      {
        path: "/mobil",
        element: <Mobil/>

      },







      
      {
        path: "/conectare",
        element: <Conectare/>

      },
      
      {
        path: "/telefoane",
        element: <Telefoane/>

      },

      {
        path: "/news",
        element: <News/>

      },

      
      {
        path: "/accesorii",
        element: <Accesorii/>

      },


      
      {
        path: "/apple",
        element: <Apple/>

      },



      
      {
        path: "/exclusiv",
        element: <Exclusiv/>

      },



      
      {
        path: "/gadjeturi",
        element: <Gadjeturi/>

      },



      
      {
        path: "/laptopuri",
        element: <Laptopuri/>

      },



      
      {
        path: "/tablete",
        element: <Tablete/>

      },



      
      {
        path: "/telefoane",
        element: <Telefoane/>

      },



      
      {
        path: "/televizoare",
        element: <Televizore/>

      },

         
      {
        path: "/abonament",
        element: <Abonament/>

      },


         
      {
        path: "/cartela",
        element: <Cartela/>

      },



         
      {
        path: "/internet_fix",
        element: <InternetFix/>

      },


      {
        path: "/portare",
        element: <Portare/>

      },


      
      {
        path: "/mymoldcell",
        element: <Mymoldcell/>

      },


      {
        path: "/reincarcare",
        element: <Reincarcare/>

      },


      
      {
        path: "/magazinM",
        element: <MagazinM/>

      },


      {
        path: "/contacte",
        element: <Contacte/>

      },


      {
        path: "/acoperire",
        element: <Acoperire/>

      },


      {
        path: "/fibra",
        element: <Fibra/>

      },




      {
        path: "/fibra_tv",
        element: <FibraTV/>

      },



      {
        path: "/grila",
        element: <Grila/>

      },




      {
        path: "/moldcell_plus",
        element: <MoldcellPlus/>
      },


      {
        path: "/product/:id",
        element: <Product/>
      }

 


      
    ]
  }
])
const App = () => {
  return (
    <Context>
      <div>
       
      </div>
      <RouterProvider router={myrouter}/>
    </Context>
  )
}

export default App