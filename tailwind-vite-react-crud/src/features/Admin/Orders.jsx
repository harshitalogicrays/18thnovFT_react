import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData1 } from '../fetchProducts'
import { selectOrders, STOREORDERS } from '../../redux/orderSlice'
import { Link } from 'react-router'

const Orders = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      getData1(`${import.meta.env.VITE_BASE_URL}/orders`).then((res)=>{
        dispatch(STOREORDERS(res))
      })
    },[])
  
    const orders = useSelector(selectOrders)
  return (
    <div className="max-w-6xl mx-auto mt-2 p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">My Orders</h2>
    <div className="overflow-x-auto mb-3">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Sr. No
            </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Email 
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Payment 
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Total Price
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Order Date and Time
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.length==0 && 
        <tr>  <td colSpan="7"
                className="px-6 py-4 text-center text-sm text-gray-500"  >
                No Order added. </td> </tr>}
        
          {orders.map((order, index) =>
            <tr key={index}
              className={`border-b ${index % 2 != 0 ? "bg-gray-50" : "bg-white"
                }`} >
              <td  className="px-6 py-4 text-sm text-gray-700">{index+1}</td>
              <td className="px-6 py-4 text-sm text-gray-700"> {order.id}  </td>
              <td className="px-6 py-4 text-sm text-gray-700"> {order.email}  </td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.paymentMethod} </td>
              <td className="px-6 py-4 text-sm text-gray-700">${order.total} </td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.orderDate} at {order.orderTime}</td>
              <td className={`px-6 py-4 text-sm ${order.status !='delivered' ? 'text-red-700' :'text-green-700'}`}>{order.status}</td>
              <td className="px-6 py-4 text-sm text-gray-700">
              <Link to={`/admin/orders/${order.id}`} type="button" className='me-2 bg-green-400 text-white p-3 rounded-md '>View</Link>
               </td>
            </tr>
          )}  
        </tbody>
      </table>
    </div>

  </div>
  )
}

export default Orders
