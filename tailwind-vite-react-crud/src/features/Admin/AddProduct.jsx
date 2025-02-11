import React from 'react'

const AddProduct = () => {
  return (
    <>
         <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form className="space-y-4">
        <div className="flex  gap-2">
        <div className=" flex-1">
          <label className="block text-sm font-medium">Category</label>
          <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </select>
        </div>
          <div className=" flex-1">
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>
        </div>
        <div className="flex  gap-2">
       <div className=" flex-1">
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
          />
        </div>
        <div className=" flex-1">
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div></div>
        <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium">Stock</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter stock quantity"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">Brand</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter brand"
          />
        </div>

        </div>
       
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
    </>
  )
}
export default AddProduct

