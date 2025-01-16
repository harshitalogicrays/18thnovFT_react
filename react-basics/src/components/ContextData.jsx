import React, { useContext, useState } from 'react'
let mycon = React.createContext()

const ContextData = ({children}) => {
    let [name,setName] =useState("Ram")
    let changeName = (val)=>setName(val)
  return (
    <mycon.Provider value={{name,changeName}}>
        {children}
    </mycon.Provider>
  )
}
export default ContextData
export const MyContext1 = ()=>useContext(mycon) 