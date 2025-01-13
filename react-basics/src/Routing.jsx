import React from 'react'
import {Route, Routes } from 'react-router';
import About from './components/functionalcomp/About';
import Home from './components/functionalcomp/Home';
import App from './App';
import FirstFunComp from './components/functionalcomp/FirstFunComp';
import PropsDemoinfun from './components/functionalcomp/PropsDemoinfun';
import PageNotFound from './components/PageNotFound';
import Statedemo1 from './components/functionalcomp/Statedemo1';
import Statedemocounter from './components/functionalcomp/Statedemocounter';
import ListRendering from './components/functionalcomp/ListRendering';
import Products from './components/functionalcomp/Products';
import Firstclasscomp from './components/classcomp/firstclasscomp';
import Form1 from './components/functionalcomp/Form1';
import ReactHookFormDemo from './components/functionalcomp/ReactHookFormDemo';
import StyledComponents from './components/functionalcomp/StyledComponents';
import LTSTParent from './components/functionalcomp/LTSTParent';
import UncontrolledComp from './components/functionalcomp/UncontrolledComp';
import HooksDemo from './components/functionalcomp/HooksDemo';
import UseImperativeHandleDemo from './components/functionalcomp/UseImperativeHandleDemo';
import UseCallbackDemo from './components/functionalcomp/UseCallbackDemo';
import UseMemoDemo from './components/functionalcomp/UseMemoDemo';
import UseTransitionDemo from './components/functionalcomp/UseTransitionDemo';
import CustomHook from './components/functionalcomp/CustomHook';
const Routing = () => {
  return (
   <>
     <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route>
                <Route path="fun/first" element={<FirstFunComp/>}></Route>
                <Route path="fun/props" element={<PropsDemoinfun/>}></Route>         
                <Route path="fun/counter" element={<Statedemocounter/>}></Route>
                <Route path="fun/list" element={<ListRendering/>}></Route>
                <Route path="fun/list/products" element={<Products/>}></Route>
                <Route path="fun/form/validation/regular" element={<Form1/>}></Route>
                <Route path="fun/form/validation/rhf" element={<ReactHookFormDemo/>}>
                 </Route>
                <Route path="fun/ltsu" element={<LTSTParent/>}/>
                <Route path="styledcomp" element={<StyledComponents/>}></Route>
                <Route path="fun/hooks" element={<HooksDemo/>}>
                   <Route index element={<Statedemo1/>}></Route>
                   <Route path="uncontrolled" element={<UncontrolledComp/>}/>
                    <Route path="imperativehandle" element={<UseImperativeHandleDemo/>}/>
                    <Route path="usecallback" element={<UseCallbackDemo/>}/>
                    <Route path="usememo" element={<UseMemoDemo/>}/>
                    <Route path="usetransition" element={<UseTransitionDemo/>}/>
                    <Route path="customhook" element={<CustomHook/>}/>
                </Route>
                
                <Route path="class/first" element={<Firstclasscomp/>}/>
            </Route>

            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
   </>
  )
}

export default Routing

{/* <Route path="fun/props/:name" element={<PropsDemoinfun/>}></Route> */}