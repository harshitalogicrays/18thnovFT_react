import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
import { toast } from 'react-toastify'
import { getData } from './fetchProducts'
import { useLoaderData } from 'react-router'
// import products from '/src/assets/productlist'
const Products = () => {
  // let [products,setProducts] =useState([])
  let products = useLoaderData()
  useEffect(()=>{
    // getData().then(data=>{
    //   console.log(data)
    //   setProducts(data.products)
    // })
  },[])
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
