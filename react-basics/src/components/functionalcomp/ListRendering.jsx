import React from 'react'
import products from '../../assets/productlist'
const ListRendering = () => {
    let names = ["aaa","bbb","ccc","ddd","eee","aaa"]
    let result = names.map((name,index)=><h1 key={index}>{name}</h1>)

    // console.log(products[0].name);
    
  return (
   <div className='container mt-5'> 
    <h1>List rendering Demo</h1>
    {/* {names} */}
    {/* {names.map((name,index)=><h1 key={index}>{name}</h1>)} */}

    {/* <div>{result}</div> */}

    <div class="table-responsive"  >
        <table class="table table-bordered table-striped "  >
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Category</th>
                    <th>Name</th> <th>Image</th><th>Price</th>
                    <th>Stock</th><th>Brand</th></tr>
            </thead>
            <tbody>
                {products.length==0 && <tr><td colSpan={7} className='text-center'>No Product Found</td></tr>}
                {/* {products.map((product,index)=>
                    <React.Fragment key={product.id} >
                    <tr>
                        <td>{index+1}</td>
                        <td>{product.category}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} height="70px" width="70px" /></td>
                        <td>&#8377;{product.price}</td>
                        <td>{product.stock > 0 ? <span class="badge rounded-pill text-bg-success"
                            >In stock</span>
                     :  <span class="badge rounded-pill text-bg-danger">Out of stock</span>}</td>
                        <td>{product.brand}</td>
                    </tr>
                    </React.Fragment>
                )} */}

        {/* {products.map((product,index)=>{
                   return <React.Fragment key={product.id} >
                    <tr>
                        <td>{index+1}</td>
                        <td>{product.category}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} height="70px" width="70px" /></td>
                        <td>&#8377;{product.price}</td>
                        <td>{product.stock > 0 ? <span class="badge rounded-pill text-bg-success"
                            >In stock</span>
                     :  <span class="badge rounded-pill text-bg-danger">Out of stock</span>}</td>
                        <td>{product.brand}</td>
                    </tr>
                    </React.Fragment>
           })} */}

{products.map((product,index)=>{
        let {name,category,image,stock,price,brand} =product
                   return <React.Fragment key={product.id} >
                    <tr>
                        <td>{index+1}</td>
                        <td>{category}</td>
                        <td>{name}</td>
                        <td><img src={image} height="70px" width="70px" /></td>
                        <td>&#8377;{price}</td>
                        <td>{stock > 0 ? <span class="badge rounded-pill text-bg-success"
                            >In stock</span>
                     :  <span class="badge rounded-pill text-bg-danger">Out of stock</span>}</td>
                        <td>{brand}</td>
                    </tr>
                    </React.Fragment>
           })}
            </tbody>
        </table>
    </div>
    

   </div>
  )
}

export default ListRendering
