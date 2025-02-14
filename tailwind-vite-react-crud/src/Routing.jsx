import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './features/Home'
import About from './features/About'
import Products from './features/Products'
import Login from './features/Login'
import Register from './features/Register'
import Header from './features/Header'
import PageNotFound from './features/PageNotFound'
import { Protected, ProtectedAdmin } from './features/hiddenlinks'
import AdminLayout from './features/Admin/AdminLayout'
import Dashboard from './features/Admin/Dashboard'
import AddProduct from './features/Admin/AddProduct'
import Cart from './features/Cart'
import { getData } from './features/fetchProducts'
import ViewProduct from './features/Admin/ViewProduct'
import CheckoutPage from './features/CheckoutPage'

const Routing = createBrowserRouter([
  {path:'/',element:<App/>,
    children:[
        {element:<Header/>,loader:getData,
            children:[ 
                {index:true, element:<Home/>},
                {path:'about' , element:<Protected><About/></Protected>},
                {path:'products' , element:<Products/> ,
                  loader:getData , errorElement:<PageNotFound/>
                },
                {path:'login' , element:<Login/>},
                {path:'cart',element:<Cart/>} ,
                {path:'checkout' , element:<Protected><CheckoutPage/></Protected>},

              ]
        },
        {path:'register' , element:<Register/>},
        {path:'admin' ,element:<AdminLayout/> ,
          children:[
            {index:true , element:<Dashboard/>},
            {path:'add/product',element:<AddProduct/>},
            {path:'view/product',element:<ViewProduct/>},
            {path:'edit/product/:id',element:<AddProduct/>},

          ]
        },
    ]}  ,

   
  {path:'*' , element:<PageNotFound/>},
])

export default Routing
