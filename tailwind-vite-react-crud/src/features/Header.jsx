import React from 'react'
import { Outlet } from 'react-router'

const Header = () => {
  return (
    <div>
      navbar
      <Outlet/>
    </div>
  )
}

export default Header
