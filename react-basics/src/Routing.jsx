import React from 'react'
import {Route, Routes } from 'react-router';
import About from './components/functionalcomp/About';
import Home from './components/functionalcomp/Home';
import App from './App';
import FirstFunComp from './components/functionalcomp/FirstFunComp';
import PropsDemoinfun from './components/functionalcomp/PropsDemoinfun';
import PageNotFound from './components/PageNotFound';
const Routing = () => {
  return (
   <>
     <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/fun/first" element={<FirstFunComp/>}></Route>
            <Route path="/fun/props/:name" element={<PropsDemoinfun/>}></Route>

            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
   </>
  )
}

export default Routing
