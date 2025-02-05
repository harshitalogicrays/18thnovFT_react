import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
    const [show,setShow] =useState(true)
    const toggleShow=()=>setShow(!show)
  return (
    <>
    <div className="flex h-screen"> <Sidebar show={show} toggleShow={toggleShow}/>
    <div className="flex flex-col flex-grow">  <AdminNavbar show={show} toggleShow={toggleShow}/>
      <main className="p-6 bg-gray-50 flex-grow overflow-y-auto"><Outlet/></main>
    </div> </div>
    </>
  )
}

export default AdminLayout
