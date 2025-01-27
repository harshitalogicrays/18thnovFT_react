import React from 'react'
import { toast } from 'react-toastify'

const ProductItems = ({products}) => {
    let handleAddtoCart=()=>{
        toast.success("added")
    }
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {products.length ==0 && <h1>No Product Found</h1>}
    {products.map((product) => (
      <div key={product.id} className="relative">
        <img
          alt={product.title}
          src={product.images[0]}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <button type="button" className=' relative rounded-3xl px-2 text-white py-1 bg-blue-500 shadow-lg  shadow-gray-500 mt-2 cursor-pointer ' onClick={handleAddtoCart}>Add to Cart</button>
      </div>
    ))}
  </div>
  )
}

export default ProductItems
