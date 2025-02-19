import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { sendmail } from '../fetchProducts'

const ChangeOrderStatus = ({status,order}) => {
    const [ostate,setOstate] =useState(status)
    const navigate = useNavigate()
    const handleSubmit=async(e)=>{e.preventDefault()
        let mailobj = {email:order.email,name:order.name,status:ostate,amount:order.total,payment:order.paymentMethod}
        try{
             await fetch(`${import.meta.env.VITE_BASE_URL}/orders/${order.id}` , {
                      method:"PUT",
                      headers:{'content-type':'application/json'},
                      body:JSON.stringify({...order,status:ostate,createdAt:order.createdAt , editedAt:new Date()}) })
            const mailres = await sendmail(mailobj)
             toast.success("order updated")
             toast.success(mailres.message)
            navigate('/admin/orders') }
        catch(err){toast.error(err)} }
  return (
    <div className='flex gap-3'>
      <h1 className='font-bold text-2xl text-blue-500'>Update Order Status:</h1>
      <form className='flex gap-3' onSubmit={handleSubmit}>
        <select  className="w-3xs rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
             value={ostate} onChange={(e)=>setOstate(e.target.value)}>
            <option disabled>select status</option>
            <option>placed</option>
            <option>processing</option>
            <option>shipped</option>
            <option>out for delivery</option>
            <option>delivered</option>
            <option>cancelled</option>
        </select>
        <button type="submit" className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update </button>
      </form>
    </div>
  )
}

export default ChangeOrderStatus
