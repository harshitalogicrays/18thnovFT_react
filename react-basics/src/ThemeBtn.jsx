import React from 'react'
import { useTheme } from './ThemeContext'

const ThemeBtn = () => {
    const {themeMode,darkTheme,lightTheme} = useTheme()
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
