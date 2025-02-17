import React, { useEffect, useState } from 'react'
import CheckoutSummary from './CheckoutSummary';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectTotal } from '../redux/cartSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripePayment from './StripePayment';

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`)

const CheckoutPayment = () => {
  const [paymentMethod,setPaymentMethod] = useState('')
  const [clientSecret,setClientSecret] = useState('')
  const total = useSelector(selectTotal)

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
    if(paymentMethod =='cod'){
      //order placed  and cart empty 
    }
    else if(paymentMethod=="online" && clientSecret !=''){}
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

       <div className="flex mt-6 space-x-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          onClick={handleOrder}>
            Place Order
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
            Cancel
          </button>
        </div>
    </div>
    <div className='flex-1'>
        <CheckoutSummary/>
    </div>
   </div>
  </Elements>
  )
}

export default CheckoutPayment
