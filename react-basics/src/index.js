import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router';
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Routing/>
    </BrowserRouter>
);

