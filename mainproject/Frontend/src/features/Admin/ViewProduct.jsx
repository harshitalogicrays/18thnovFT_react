import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { getData1 } from '../fetchProducts'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts, STOREPRODUCTS } from '../../redux/productSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
const ViewProduct = () => {
  const dispatch = useDispatch()
const [isDeleted,setIsDeleted] =useState(false)
useEffect(()=>{
  getData1(`${import.meta.env.VITE_BASE_URL}/products`).then(data=>{
      dispatch(STOREPRODUCTS(data))  })
},[isDeleted])
const products = useSelector(selectProducts)

const handleDelete = async(id)=>{
  if(window.confirm("are you sure to delete this??")){
    try{
      //  await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}` , {
      //   method:"DELETE" })
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
      toast.success("product deleted")
      setIsDeleted(true)
    }
    catch(err){toast.error(err)}
  }
}
  return (
    <div className="max-w-4xl mx-auto mt-2 p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Products</h2>
    <div className="overflow-x-auto mb-3">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Sr. No
            </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              category
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Image
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              stock
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length==0 &&   <tr>  <td colSpan="6"
                className="px-6 py-4 text-center text-sm text-gray-500"  >
                No Product added. </td> </tr>}
        
           {products.map((product, index) =>
            <tr key={index}
              className={`border-b ${index % 2 != 0 ? "bg-gray-50" : "bg-white"
                }`} >
              <td  className="px-6 py-4 text-sm text-gray-700">{index+1}</td>
              <td className="px-6 py-4 text-sm text-gray-700"> {product.category}  </td>
              <td className="px-6 py-4 text-sm text-gray-700"> {product.title}  </td>
              <td className="px-6 py-4 text-sm">
                  <img src={product.image} alt={product.title} 
                  className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.price} </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                {product.stock} </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                <Link to={`/admin/edit/product/${product.id}`}>
              <button type="button" className='me-2 bg-green-400 text-white p-3 rounded-md '><FaPenAlt/></button></Link>
              <button type="button"  className='me-2 bg-red-400 text-white p-3 rounded-md ' 
              onClick={()=>handleDelete(product.id)}><FaTrashAlt/></button>
               </td>
            </tr>
          )} 
        </tbody>
      </table>
    </div>

  </div>
  )
}

export default ViewProduct
