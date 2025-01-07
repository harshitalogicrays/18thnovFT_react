import React from 'react'
import ProductItems from './ProductItems'

const SaleProducts = () => {
    let salitems = [{price:222}]
  return (
    <div>
      <ProductItems products={salitems} type="Sale"/>
    </div>
  )
}

export default SaleProducts
