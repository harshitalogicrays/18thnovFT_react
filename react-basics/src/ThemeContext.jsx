import React, { createContext, useContext, useState } from 'react'
let themecon = createContext()

const ThemeContext = ({children}) => {
    const [themeMode,setThemeMode] =useState("light")
    const darkTheme =()=>setThemeMode("dark")
    const lightTheme = ()=>setThemeMode("light")

    const themeStyles = {
        backgroundColor:themeMode=="light"?"wheat":"gray",
        height:"100%",
        color:themeMode=="light"?"black":"white",
        transition:"all 0.3s ease"
    }
  return (
    <themecon.Provider value={{themeMode,darkTheme,lightTheme}}>
        <div style={themeStyles}>
            {children} </div>  
    </themecon.Provider>
  )
}
export default ThemeContext

export const useTheme = ()=>useContext(themecon)
