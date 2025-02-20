import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router'
import Routing from './Routing.jsx'
import { Provider } from 'react-redux'
import mystore from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={mystore}>
         <RouterProvider router={Routing}/>
    </Provider>

)
