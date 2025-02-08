import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router';
import { HiTrash } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { CALCULATE_TOTAL, DECREASE, EMPTY_CART, INCREASE, REMOVE_FROM_CART, selectCartItems, selectTotal } from '../redux/cartSlice';
const Cart = () => {
    const dispatch = useDispatch()
      const cartItems = useSelector(selectCartItems)
      const totalPrice = useSelector(selectTotal);
      const redirect = useNavigate()
      useEffect(()=>{
        dispatch(CALCULATE_TOTAL())
      },[cartItems])

      const handleCheckout=()=>{
        if(sessionStorage.getItem("minicred") !=null){
          if(cartItems.length !=0){
            redirect('/checkout')
          }
        }
        else {
          redirect('/login')
        }
      }
      return (
        <div className="max-w-7xl mt-15 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cartItems.length==0 && <h1>No Item in Cart</h1>}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-6 border-b border-gray-200">
                <div className="flex items-center gap-6">
                  <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <label htmlFor={`quantity-${item.id}`} className="mr-3 text-gray-700">
                        Quantity:
                      </label>
                      <button className="w-8  text-center" onClick={()=>dispatch(DECREASE(item))}>-</button>
                      <input type="text" value={item.qty} className="w-8 text-center"/>
                      <button className="w-8 text-center" onClick={()=>dispatch(INCREASE(item))}>+</button>
                    </div>
                    <p className="text-gray-600 mt-2">total Price: ${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700" onClick={()=>dispatch(REMOVE_FROM_CART(item.id))}>
                  <HiTrash className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium text-gray-900">${totalPrice < 20 ? '5.00' :'0.00'}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-6">
              <span>Total</span>
              <span className="text-gray-900">${totalPrice < 20 ? (totalPrice+5).toFixed(2) :totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <button className="mt-8  bg-red-600 text-white px-3 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-200" onClick={()=>dispatch(EMPTY_CART())}>
               Empty Cart
              </button>
              <button className={`mt-8 bg-indigo-600 text-white py-3 px-3 rounded-lg text-lg font-medium ${cartItems.length==0 ? 'opacity-65' : 'hover:bg-indigo-700 transition duration-200'} `} onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart