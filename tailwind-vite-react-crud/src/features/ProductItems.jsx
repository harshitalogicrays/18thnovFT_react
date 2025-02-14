import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { ADD_TO_CART } from '../redux/cartSlice'
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import ReactPaginate from 'react-paginate';

const ProductItems = ({products=[]}) => {
  const dispatch = useDispatch()
    let handleAddtoCart=(product)=>{
        dispatch(ADD_TO_CART(product))
    }
    let itemsPerPage  = 4 
    const [itemOffset, setItemOffset] = useState(0)
    const [currentItems,setCurrentItems] = useState([])
    const [pageCount ,setPageCount] = useState(0)

    useEffect(()=>{
      const endOffset = itemOffset + itemsPerPage; //0+4=4 ,4+4=8
      setCurrentItems(products.slice(itemOffset, endOffset)) //0,4 =>0 to 3 ,4 to7
      setPageCount(Math.ceil(products.length / itemsPerPage)) //30/4 => 8
    },[itemOffset,products])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;//4%30 = 4
       setItemOffset(newOffset);//4
    };

    return (
    <div>    <div className="mt-6 mb-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.length ==0 && <h1>No Product Found</h1>}
      {currentItems.map((product) => (
        <div key={product.id} className="relative">
          <img
            alt={product.title}
            src={product.image}
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
          <button type="button" className=' relative rounded-3xl px-2 text-white py-1 bg-blue-500 shadow-lg  shadow-gray-500 mt-2 cursor-pointer ' onClick={()=>handleAddtoCart(product)}>Add to Cart</button>
        </div>
      ))}
</div>

    < ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="sm:flex sm:flex-1 sm:items-center sm:justify-center"
            pageClassName ="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset
            hover:text-gray-900  focus:z-20 focus:outline-offset-0 cursor-pointer"
            previousClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset
            hover:text-gray-900  focus:z-20 focus:outline-offset-0 cursor-pointer"
            nextClassName='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset
            hover:text-gray-900  focus:z-20 focus:outline-offset-0 cursor-pointer'
            activeClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
  </div>
  )
}

export default ProductItems
