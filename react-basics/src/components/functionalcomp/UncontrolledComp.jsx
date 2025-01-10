import React, { useRef, useState } from 'react'
import Refchildren from './Refchildren'
import ForwardRefDemo from './ForwardRefDemo'

const UncontrolledComp = () => {
    // let [name,setName] = useState("Ram")
    // let handleClick = ()=>{alert(name)}

    let textRef  = React.useRef()
    let focusRef = useRef()
    let innerRef = useRef()
    let countRef =  useRef()
    let ref1 = useRef()
    let handleClick = ()=>{
        textRef.current.style.color="blue"
        alert(textRef.current.value) //document.getElementById("val").value
        textRef.current.value=''
    }
    //  window.onload =()=>focusRef.current.focus() //works on window load not component
        React.useEffect(()=>{focusRef.current.focus()},[]) //component load 

  return (
    <div className='container col-8 mt-5'>
        {/* <input type="text" className="form-control mb-3" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type="button" className='btn btn-primary' onClick={handleClick}>Fetch TextBox Value</button> */}

    {/* <input type="text" className="form-control mb-3" defaultValue="Ram" ref={textRef} id="val"/>
    <button type="button" className='btn btn-primary mb-3' onClick={handleClick}>Fetch TextBox Value</button> */}


    <input type="text" className="form-control mb-3" ref={focusRef}/>
    {/* <button type="button" className='btn btn-primary' onClick={()=>{focusRef.current.focus()}}>Focus</button> */}
    
    {/* <hr/> */}
    {/* <h4>Pass ref as an prop to children</h4>
    <input type="text" className="form-control mb-3" ref={innerRef}/>
    <Refchildren inner={innerRef} count={countRef}/>

    <input type="text" ref={countRef} defaultValue={1}/> */}
    {/* <hr/> */}

<h4>Forwarding ref</h4>
    <ForwardRefDemo ref={ref1}/>
    <button type="button" className='btn btn-primary' onClick={()=>{alert(ref1.current.value)}}>Fetch Data</button>
    </div>
  )
}

export default UncontrolledComp
