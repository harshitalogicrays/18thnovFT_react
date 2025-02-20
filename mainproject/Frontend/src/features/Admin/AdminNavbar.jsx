import React from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const AdminNavbar = ({show,toggleShow}) => {
    const redirect = useNavigate()
     const handleLogout = ()=>{
        if(sessionStorage.getItem('minicred') != null){
          sessionStorage.removeItem('minicred')
          toast.success("loggedOut Successfully")
          redirect('/')
        }
      }
  return (
    <>
     <header className="flex items-center justify-between h-16 bg-gray-100 px-6 shadow-md">
        <HiBars3 aria-hidden="true" className={`${show ? "hidden" :"block"} size-6 cursor-pointer`} onClick={toggleShow}/>
        <h1 className="text-xl font-semibold">Welcome to the Admin Panel</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Admin</span>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleLogout}>  Logout </button>
        </div> </header>
    </>
  )
}

export default AdminNavbar
