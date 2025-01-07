import React from 'react'

const ProductCard = ({product}) => {
    console.log(product)
    let {name="Product1"}=product

  return (
    <div className='col-3 mb-3'>
      <div class="card">
        {product.image ?    <img class="card-img-top" src={product.image} alt={product.name} height="200px" />
        :
        <img class="card-img-top" src="https://c8.alamy.com/comp/P2D5P1/photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept-P2D5P1.jpg" height="200px" /> 
    }
     
        <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <p class="card-text">{product.category}</p>
            <p>&#8377; {product.price}</p>
            <button type="button"
                class="btn btn-primary"  >
                Add to Cart </button>
            
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard
