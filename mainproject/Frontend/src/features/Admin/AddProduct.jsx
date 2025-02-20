import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { selectProducts } from '../../redux/productSlice'

const AddProduct = () => {
  const navigate = useNavigate()
  let obj = {category:'',title:'',price:'',stock:'',brand:'',desc:'',image:''}
  const [product,setProduct] =useState({...obj})
  const [picLoading,setPicLoading] =useState(false)
  const categories = ["Electronics","Fashion","Beauty","Home","Books","Grocery","Art and Craft"] 

  //edit 
  const {id} = useParams()
  const products = useSelector(selectProducts)
  const productEdit = products.find(item=>item.id==id)
  useEffect(()=>{
    if(id){setProduct({...productEdit})}
    else {setProduct({...obj})}
  },[id])

/////////////////////
  const handleImage=async(e)=>{
   const  img =  e.target.files[0]
   const ext = ["image/jpg","image/jpeg","image/png","image/gif","image/webp","image/jfif"]
    setPicLoading(true)
    if(img==undefined){toast.error("please select an image")}
    if(!ext.includes(img.type)) toast.error("invalid extension")
    else if(img.size > 1048576){ //1MB 
      toast.error("file size exceeded")
  }
    else {
      const data = new FormData()
      data.append("file",img)
      data.append("upload_preset","18thnov_react")
      data.append("cloud_name","harshitalogicrays2")
      data.append("folder","products")
      try{
        const res= await axios.post("https://api.cloudinary.com/v1_1/harshitalogicrays2/image/upload",data)
        console.log(res.data)
        setProduct({...product,image:res.data.url})
        setPicLoading(false)
      }
      catch(err){toast.error(err.message);setPicLoading(false)}
  }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
   let {category,title,price,image} = product
   if(!category || !title || !price || !image){
    toast.error("please fill all the fields")
   }
   else{
    if(!id){ //add
      try{
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products` , {
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify({...product,createdAt:new Date()})
        })
        toast.success("product added")
        navigate('/admin/view/product')
     }
    catch(err){toast.error(err)}
    }
    else { //update
      try{
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}` , {
          method:"PUT",
          headers:{'content-type':'application/json'},
          body:JSON.stringify({...product,createdAt:productEdit.createdAt , editedAt:new Date()})
        })
        toast.success("product updated")
        navigate('/admin/view/product')
     }
    catch(err){toast.error(err)}
    }
    }
  }
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{id ? "Edit " :"Add "} Product</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                <option value="" selected  disabled>Select a category</option>
                {categories.map((c,i)=><option key={i}>{c}</option>)}
                
              </select>
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Product Title</label>
              <input
                type="text"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"  value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})}
              />
            </div>
          </div>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"  value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}
              />
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Image</label>
              <input
                type="file"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleImage}
                placeholder="Enter image URL" 
              />
              {product.image && <img src={product.image}  className='w-12 h-12 mt-3'/>}
            </div></div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Stock</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter stock quantity"  value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Brand</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter brand"  value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})}
              />
            </div>

          </div>

          <div>
            <label className="block text-sm font-medium mb-2" >Description</label>
            <textarea
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={product.desc} onChange={(e)=>setProduct({...product,desc:e.target.value})}></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {picLoading ?  
            <div class="animate-spin w-10 h-10 mx-auto border-4 border-t-transparent border-white rounded-full " ></div> :  <>{id ? "Update Product" : "Add Product"} </>}
          </button>
        </form>
      </div>
    </>
  )
}
export default AddProduct

