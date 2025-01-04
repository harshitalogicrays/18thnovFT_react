import React, { useState } from 'react'

const Statedemo1 = () => {
    let [num1,setNum1] = useState('')
    let [num2,setNum2] =useState('')
    let [result,setResult] =useState('')
    let handleAdd =()=>setResult(parseInt(num1)+parseInt(num2))
    let handleNum1 =(e)=>{// console.log(e.target.value)
        setNum1(e.target.value) //num1 = e.target.value 
    }

    let styles = {textDecoration : "overline" ,backgroundColor:'wheat'}
  return (
   <div className='container col-6 mt-5'>
    <h1 style={styles} className='success'>State Demo</h1>
    {/* <h2 className={cssm.error}>Welcome to LRA</h2> */}
    <div className="mb-3">
        <label htmlFor="num1" className="form-label">Num1</label>
        <input type="text" name="num1" className="form-control" 
        value={num1} onChange={handleNum1}/>  </div>
    <div className="mb-3">
        <label htmlFor="num2" className="form-label">Num2</label>
        <input type="text" name="num2" className="form-control" 
        value={num2} onChange={(e)=>setNum2(e.target.value)}/></div>
     <button type="button" className="btn btn-primary me-2" onClick={handleAdd}>Show Result</button>  
    
     <h1 style ={ {color:"orange" , textDecoration : "underline"} }>Total = {result}</h1>

   </div>
  )
}

export default Statedemo1
