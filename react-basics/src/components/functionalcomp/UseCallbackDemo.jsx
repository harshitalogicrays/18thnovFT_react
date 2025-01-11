import React, { useCallback, useEffect, useRef, useState } from 'react'

const UseCallbackDemo = () => {
    let [length,setLength] =useState(8)
    let [data,setData] =useState("")
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let selectRef = useRef()
    // let randomNumGenerate = ()=>{
    //     let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ'
    //     let string = ''
    //     for(let i=1;i<=length;i++){
    //         string  +=`${str.charAt(Math.floor(Math.random()*str.length))}`
    //     }
    //     setData(string)
    // }

    let randomNumGenerate =  useCallback(()=>{
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ'
        if(numAllowed){str+='0987654321'}
        if(charAllowed){str+='!@#$%^&*-=+.'}

        let string = ''
        for(let i=1;i<=length;i++){
            string  +=`${str.charAt(Math.floor(Math.random()*str.length))}`
        }
        setData(string)
    },[length,numAllowed,charAllowed])

    useEffect(()=>{
        randomNumGenerate()
    },[length,numAllowed,charAllowed])
    let handleCopy =()=>{
        window.navigator.clipboard.writeText(data)
        selectRef.current.select()
    }
  return (
    <div className='container col-8 mt-5'>
        <h1>useCallback demo</h1><hr/>
        <div className="input-group">
            <input type="text" className="form-control" value={data} ref={selectRef}/>
            <button type="button" className='btn btn-primary' onClick={handleCopy}>copy</button>
        </div>
        <input type="range" name="length" min={5} max={100} value={length} 
        onChange={(e)=>setLength(e.target.value)}/> 
        <label htmlFor="" className='me-3'>Length :({length})</label>
        <input type="checkbox" onClick={()=>setNumAllowed(!numAllowed)}/> 
        <label htmlFor="" className='me-3'>Numbers</label>
        <input type="checkbox" onClick={()=>setCharAllowed(!charAllowed)}/> 
        <label htmlFor="" className='me-3'>Special Characters</label>
    </div>
  )
}

export default UseCallbackDemo
