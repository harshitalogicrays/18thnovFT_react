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

const Routing = createBrowserRouter([
  {path:'/',element:<App/>,
    children:[
        {element:<Header/> ,
            children:[ 
                {index:true, element:<Home/>},
                {path:'about' , element:<About/>},
                {path:'products' , element:<Products/>},
                {path:'login' , element:<Login/>}]
        },
        {path:'register' , element:<Register/>}
    ]}  ,
  {path:'*' , element:<PageNotFound/>},
])

export default Routing
