import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
  let [count,setCount] = useState(1)
  let  [show,setShow] =useState(false)

  let fetchCount=(count)=>{
    for(let i=1;i<=1000000000;i++){}
    console.log(count)
    return count
  }

  // let countValue = fetchCount(count)
  let countValue = useMemo(()=>fetchCount(count),[count])
  return (
   <>
     <h1>useMemo Hook</h1>
        <button  type="button" class="btn btn-primary" 
        onClick={()=>setCount(count+1)}> Counter </button>
        <h3>count: {countValue}</h3>
        <button  type="button" class="btn btn-primary" 
        onClick={()=>setShow(!show)}> {show ? "Show" :"Hide"} </button>
   </>
  )
}

export default UseMemoDemo
