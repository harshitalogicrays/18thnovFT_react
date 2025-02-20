import React from 'react'
import { FaHome, FaImage, FaList, FaListOl, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router'

const Sidebar = ({show,toggleShow}) => {
  return (
        <div className={`${show ? 'w-20 sm:w-64 h-full bg-gray-800 text-white flex flex-col transition-all duration-500 ease-in' :'w-0 transition-all duration-500 ease-in-out' }  `}>
            <div className="flex items-center justify-evenly h-16 text-2xl font-bold">
            {/* Hide the title on small screens */}
            <span className="hidden sm:block">Admin Panel</span>
            <span className="hidden sm:block cursor-pointer" onClick={toggleShow}>X</span> 
            </div>
            <nav className="flex flex-col mt-4">
                <Link to="/admin" className="flex items-center p-4 hover:bg-gray-700">
                <FaHome className="mr-0 sm:mr-3" />
                <span className="hidden sm:block">Dashboard</span> </Link>

                <Link to="/admin/add/product" className="flex items-center p-4 hover:bg-gray-700">
                <FaImage className="mr-0 sm:mr-3" />
                <span className="hidden sm:block">Add Product</span> </Link>

                <Link to="/admin/view/product" className="flex items-center p-4 hover:bg-gray-700">
                <FaList className="mr-0 sm:mr-3" />
                <span className="hidden sm:block">View Products</span> </Link>

                <Link to="/admin/orders" className="flex items-center p-4 hover:bg-gray-700">
                <FaShoppingBag className="mr-0 sm:mr-3" />
                <span className="hidden sm:block">View Orders</span> </Link>
            </nav>  </div>
   	
  )
}

export default Sidebar
