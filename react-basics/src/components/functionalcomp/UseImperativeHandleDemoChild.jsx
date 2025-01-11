import React, { useImperativeHandle, useState } from 'react'

const UseImperativeHandleDemoChild =React.forwardRef ((props,ref) => {
    const [data,setData] =useState("")

    useImperativeHandle(ref, ()=>({
        setValue(val){setData(val)} , 
        getValue(){return data},
        clearValue(){setData("")}
    }) )

    return (
    <div className='mt-3'>
      <input type="text" className="form-control" value={data}
      onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
})

export default UseImperativeHandleDemoChild