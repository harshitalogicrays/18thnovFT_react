import { CardElement } from '@stripe/react-stripe-js'
import React, { useState } from 'react'

const StripePayment = ({clientSecret}) => {
    const [isLoading,setIsLoading] =useState(false)
  return (
    <>
  <CardElement className=' border-1 py-3 px-1 mb-4 focus:outline-2 focus:outline-indigo-600'></CardElement>
  <button
  type="submit"
  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
    {isLoading ? <div class="animate-spin w-10 h-10 mx-auto border-4 border-t-transparent border-white rounded-full " ></div>  : <>  (pay now) </> }

</button> </>
  )
}

export default StripePayment
