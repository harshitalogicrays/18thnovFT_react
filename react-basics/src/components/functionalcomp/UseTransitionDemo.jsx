import React, { useState, useTransition } from 'react'
import { Spinner } from 'react-bootstrap'

const UseTransitionDemo = () => {
  const [isLoading,setIsLoading] =useState(false)

  const [isPending, startTransition] = useTransition()
  let loadItems = ()=>{
        // setIsLoading(true)
        // await new Promise(res=>setTimeout(()=>{setIsLoading(false);return res},4000))

        startTransition(async()=>{
          await new Promise(res=>setTimeout(res,4000))
        })    
  }
  return (
    <>
    {/* <button  type="button" class="btn btn-primary" onClick={loadItems}>
     {isLoading ? "Loading...." :  "Click me to Load Items"}</button>        */}

{isPending &&  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
    <button  type="button" class="btn btn-primary" onClick={loadItems} disabled={isPending}>
     {isPending  ? "Loading...." :  "Click me to Load Items"} </button>      
   </>
  )
}

export default UseTransitionDemo
