import React, { Fragment, useEffect, useState } from 'react'
import ProductItems from './ProductItems'
import { toast } from 'react-toastify'
import { getData } from './fetchProducts'
import { useLoaderData } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FILTET_BY_CATEGORY, selectCatVal, selectFilterProducts, selectSearchVal } from '../redux/productSlice'

const Products = () => {
  const dispatch = useDispatch()
  let products = useLoaderData()
  const filterProducts = useSelector(selectFilterProducts)
  const searchval = useSelector(selectSearchVal)

  const categories =Array.from(new Set( products.map((item)=>item.category)))
  const [catval,setCatVal] =useState('')
  useEffect(()=>{
    dispatch(FILTET_BY_CATEGORY({products,catval}))
  },[catval])
  const categoryval = useSelector(selectCatVal)
  return (
   <> <div className="bg-white">
      <div className="flex">
      <div className="flex-1 mt-40 ms-4 shadow p-3">       
          {categories.map((cat,i)=>
           <div className='mb-3' key={i}>
           <input type="radio"  className="me-2" name="categories" onClick={()=>setCatVal(cat)}/>
           <label htmlFor="">{cat}</label>
         </div>  )}
        </div>
        <div className="flex-4">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            {searchval != '' || categoryval !='' ? <>
                  {filterProducts.length == 0 ? <h1>No Product Found</h1>
                  : <ProductItems products={filterProducts}/>
                }</>   : <ProductItems products={products}/>} 
              
          </div>
        </div>
      </div>
     
    </div>
   </>
  )
}

export default Products
