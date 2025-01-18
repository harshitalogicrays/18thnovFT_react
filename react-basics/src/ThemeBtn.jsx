import React, { use, useContext } from 'react'
import { Theme1, themecon } from './ThemeContext'

const ThemeBtn = () => {
  //  const {themeMode,darkTheme,lightTheme} = Theme1()
  const  {themeMode,darkTheme,lightTheme} = use(themecon)
    const handleThemeChange = (e)=>{
        const darkStatus = e.target.checked
        if(darkStatus) darkTheme()
        else lightTheme()
    }
  return (
    <>
        <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox"
                checked={themeMode=="dark"}
                onChange={handleThemeChange}
                />
        </div>
    </>
  )
}

export default ThemeBtn
