import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { selectCartItems, selectTotal } from '../redux/cartSlice'
import { selectcheckouts } from '../redux/checkoutSlice'
import { saveOrder, sendmail } from './fetchProducts'

const StripePayment = ({ clientSecret }) => {
  const [isLoading, setIsLoading] = useState(false)
  const stripe= useStripe()
  const elements = useElements()

  const navigate = useNavigate()
  const total = useSelector(selectTotal)
  const cartItems = useSelector(selectCartItems)
  const user = JSON.parse(sessionStorage.getItem("minicred"))
  const address = useSelector(selectcheckouts)

  const handlePayment=()=>{
    setIsLoading(true)
    if(!stripe || !elements){
      toast.error("stripe is not initalized");return
    }
    try{
      let cardElement = elements.getElement(CardElement)
      stripe.confirmCardPayment(clientSecret,{
        payment_method:{card:cardElement}
      }).then((result)=>{
       if(result.paymentIntent){
        if(result.paymentIntent.status=="succeeded"){
          toast.success("payment done") 
          //order placed 
           let orderobj = {cartItems , total , email:user.email , name:user.username, shippingAddress : address , paymentMethod:'online',status:"placed" , orderDate:new Date().toDateString() ,  orderTime:new Date().toLocaleTimeString() , createdAt:new Date()}
           let mailobj = {email:user.email,name:user.username,status:'placed',amount:total,payment:'online'}
                saveOrder(orderobj).then(()=>{
                  toast.success("order placed");
                return sendmail(mailobj)
                     }).then(()=>{navigate('/thankyou')}).catch((err)=>toast.error(err.message))
          setIsLoading(false)
        }
       }
       else if(result.error){console.log(result.error);  setIsLoading(false)}
      }).catch(err=> { toast.error(err.message);  setIsLoading(false)})
    
    }
    catch(err){
      toast.error(err.message);  setIsLoading(false)
    }
  }
  return (
    <>
      <CardElement className=' border-1 py-3 px-1 mb-4 focus:outline-2 focus:outline-indigo-600'></CardElement>

      <div className="flex mt-6 space-x-4">
        <button className="bg-blue-600 flex-2 text-white py-2 px-6 rounded-md hover:bg-blue-700"
       onClick={handlePayment} disabled={!stripe}>
          {isLoading ? <div class="animate-spin w-10 h-10 mx-auto border-4 border-t-transparent border-white rounded-full " ></div> : <>  (pay now) </>}

        </button>
        <button className="bg-red-500 flex-1 text-white py-2 px-6 rounded-md hover:bg-red-600">
          Cancel
        </button>
      </div>
    </>
  )
}

export default StripePayment
