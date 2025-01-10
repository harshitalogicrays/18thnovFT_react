import React from 'react'
import LTSTChild from './LTSTChild'

const LTSTParent = () => {
    let [count,setCount] = React.useState(0)
    let increase=()=>setCount((prevcount)=> prevcount+1)
    let decrease=()=>setCount((prevcount)=> prevcount-1)
    let reset=()=>setCount(0)
    let changesign=()=>setCount(-count)

  return (
    <div>
      <h1>Count: {count}</h1>
      <LTSTChild increasep ={increase}
        decreasep={decrease}
        resetp={reset}
        changesign={changesign}
      />
    </div>
  )
}

export default LTSTParent
