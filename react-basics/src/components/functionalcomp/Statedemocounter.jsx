import React from 'react'

const Statedemocounter = ({c}) => {
    let [count,setCount] = React.useState(c)
    let increase=()=>{
    //    setCount(count+1) // count = count+ 1
        setCount((prevcount)=> prevcount+1)
    }
  return (
    <>
        <button type="button" class="btn btn-primary me-2" onClick={increase}>Increase</button>
        <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
        <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(0)}>Reset</button>
        <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(-count)}>change sign</button>
        <h1>Count: {count}</h1>
    </>
  )
}

export default Statedemocounter
