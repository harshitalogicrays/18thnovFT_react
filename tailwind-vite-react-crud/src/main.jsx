import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router'
import Routing from './Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={Routing}/>,
)
