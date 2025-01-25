import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
import { toast } from 'react-toastify'
// import products from '/src/assets/productlist'
const Products = () => {
  let [products,setProducts] =useState([])
  let getData = async()=>{
      try{
       let res =  await fetch("https://dummyjson.com/products")
       let data = await res.json()
      //  console.log(data.products)
      setProducts(data.products)
        //  toast.success("ok")
      }
      catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{getData()},[])
  return (
   <>
     <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

       <ProductItems products={products}/>      
       </div>
    </div>
   </>
  )
}

export default Products
