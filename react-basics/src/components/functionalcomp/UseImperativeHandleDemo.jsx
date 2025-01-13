import React from 'react'
import UseImperativeHandleDemoChild from './UseImperativeHandleDemoChild'

const UseImperativeHandleDemo = () => {
  const innerRef = React.useRef()
  return (
    <div>
      <button  type="button" class="btn btn-primary me-2"  onClick={()=>innerRef.current.setValue("LRA")}>Set Value </button>
      <button  type="button" class="btn btn-primary me-2"
      onClick={()=>alert(innerRef.current.getValue())}
      >Get Value </button>
      <button  type="button" class="btn btn-primary" 
       onClick={()=>innerRef.current.clearValue()}>Clear Value </button>

       <button  type="button" class="btn btn-primary" 
       onClick={()=>alert(innerRef.current.fetchValue1())}>Focus </button>
      <UseImperativeHandleDemoChild ref={innerRef}/>
    </div>
  )
}

export default UseImperativeHandleDemo
