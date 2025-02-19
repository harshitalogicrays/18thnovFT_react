import React, { useEffect, useState } from 'react'
import CheckoutSummary from './CheckoutSummary';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotal } from '../redux/cartSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripePayment from './StripePayment';
import { saveOrder, sendmail } from './fetchProducts';
import { useNavigate } from 'react-router';
import { selectcheckouts } from '../redux/checkoutSlice';

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`)

const CheckoutPayment = () => {
  const [paymentMethod,setPaymentMethod] = useState('')
  const [clientSecret,setClientSecret] = useState('')
   const navigate = useNavigate()

  const total = useSelector(selectTotal)
  const cartItems = useSelector(selectCartItems)
  const user = JSON.parse(sessionStorage.getItem("minicred"))
  const address = useSelector(selectcheckouts)
  
  useEffect(()=>{
    if(paymentMethod=="online"){
      payonline()
    }
  },[paymentMethod])

  const payonline = async()=>{
    try{  
      const res = await axios.post(`${import.meta.env.VITE_NODE_URL}/create-payment-intent`,{amount:total})
      // console.log(res.data)
      setClientSecret(res.data.clientSecret)
    }
    catch(err){
      toast.error(err.message)
    }
  }

  const handleOrder = async()=>{
    let orderobj = {cartItems , total , email:user.email , name:user.username, shippingAddress : address , paymentMethod:'cod',status:"placed" , orderDate:new Date().toDateString() ,  orderTime:new Date().toLocaleTimeString() , createdAt:new Date()}
    let mailobj = {email:user.email,name:user.username,status:'placed',amount:total,payment:'cod'}
      saveOrder(orderobj).then(()=>{
        toast.success("order placed");
        return sendmail(mailobj)
      }).then((res)=>{ toast.success(res.message);navigate('/thankyou')})
      .catch((err)=>toast.error(err.message))
  }
  return (
    <Elements stripe={stripePromise}>
    <div className='flex max-w-7xl gap-12 mt-32 mx-auto bg-white shadow-lg rounded-lg p-6 '>
    <div className='flex-1 border p-3'>
        <h1 className='text-center text-4xl mb-4'>Checkout Payment</h1><hr/>
        <h2 className="text-xl font-semibold mt-4">Payment Method</h2>
        <div className="mt-3">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="cod" onChange={()=>setPaymentMethod('cod')}
              className="w-5 h-5 text-blue-500"
            />
            <label className="text-lg">Cash on Delivery</label>
          </div>
          {paymentMethod=="cod" &&        <div className="flex mt-6 space-x-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          onClick={handleOrder}>
            Place Order
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
            Cancel
          </button>
        </div>}
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="radio"
              name="payment"
              value="online" onChange={()=>setPaymentMethod('online')}
              className="w-5 h-5 text-blue-500" 
            />
            <label className="text-lg">Pay Online</label>
          </div>
        </div>
        { (paymentMethod=="online" && clientSecret !='' ) &&
          <div className="mt-4 p-4 border rounded-lg bg-gray-100">
            <h3 className="text-lg font-semibold mb-2">Enter Payment Details</h3>
            <StripePayment clientSecret = {clientSecret}/>
          </div> }
          

    </div>
    <div className='flex-1'>
        <CheckoutSummary/>
    </div>
   </div>
  </Elements>
  )
}

export default CheckoutPayment
