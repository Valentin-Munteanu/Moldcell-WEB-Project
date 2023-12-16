import React from 'react'
import { useState , createContext,useEffect } from 'react'
import dater from "./Data.json"
import daters from "./Acces.json"
export const Conte = createContext()
const Context = ({children}) => {
    const[date , SetDate] = useState(dater)
    const[data, SetData] = useState(daters)


    
        
       
     
  
  return (
<Conte.Provider value={{date: date, data: data}}>
    {children}
</Conte.Provider>
  )
}

export default Context