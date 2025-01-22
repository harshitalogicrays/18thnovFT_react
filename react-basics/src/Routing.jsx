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
import ContextData from './components/ContextData';
import Login from './components/functionalcomp/Login';
import Register from './components/functionalcomp/Register';
import ThemeContext from './ThemeContext';
import Header from './components/functionalcomp/Header';
import ClassLayout from './components/classcomp/ClassLayout';
import Propsinclass from './components/classcomp/Propsinclass';
import Stateandeventinclass from './components/classcomp/Stateandeventinclass';
import Forminclass from './components/classcomp/Forminclass';
import Formvalidationinclass from './components/classcomp/Formvalidationinclass';
import LifeCycleMethods from './components/classcomp/LifeCycleMethods';
import Refinclass from './components/classcomp/Refinclass';
import PureCompDemo from './components/classcomp/PureCompDemo';
import UseeffectCleanup from './components/functionalcomp/UseeffectCleanup';
import ErrorDemo from './components/functionalcomp/ErrorDemo';
import HOCDemo from './components/classcomp/HOCDemo';
const Routing = () => {
  return (
   <>
     <Routes>
            <Route path="/" element={<ContextData><App/></ContextData>}>
                <Route element={<ThemeContext><Header/></ThemeContext>}>
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
                        <Route path="useeffect" element={<UseeffectCleanup/>}/>
                    </Route>
                
                </Route>                
                
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>

                <Route path="class" element={<ClassLayout/>}>
                   <Route index element={<Firstclasscomp/>}/>
                   <Route path='props' element={<Propsinclass/>}/>
                   <Route path='stateandevent' element={<Stateandeventinclass/>}/>
                   <Route path='form' element={<Forminclass/>}/>
                   <Route path='validations' element={<Formvalidationinclass/>}/>
                   <Route path='lifecycle' element={<LifeCycleMethods color="red"/>}/>
                   <Route path='ref' element={<Refinclass/>}/>
                   <Route path='pure' element={<PureCompDemo/>}/>
                   <Route path='errorboundary' element={<ErrorDemo/>}/>
                   <Route path='hoc' element={<HOCDemo/>}/>                  

                </Route>
      
            </Route>

            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
   </>
  )
}

export default Routing

{/* <Route path="fun/props/:name" element={<PropsDemoinfun/>}></Route> */}