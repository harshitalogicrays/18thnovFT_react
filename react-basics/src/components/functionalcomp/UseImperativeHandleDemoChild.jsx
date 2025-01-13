import React, { useImperativeHandle, useState } from 'react'

const UseImperativeHandleDemoChild =React.forwardRef ((props,ref) => {
    const [data,setData] =useState("")
    const [data1,setData1] =useState("")

    useImperativeHandle(ref, ()=>({
        setValue(val){setData(val)} , 
        getValue(){return data},
        clearValue(){setData("")},
        fetchValue1(){return data1}

    }) )

    return (
    <div className='mt-3'>
      <input type="text" className="form-control" value={data} 
      onChange={(e)=>setData(e.target.value)}/>
        <input type="text" className="form-control" value={data1} 
      onChange={(e)=>setData1(e.target.value)}/>
    </div>
  )
})

export default UseImperativeHandleDemoChild
