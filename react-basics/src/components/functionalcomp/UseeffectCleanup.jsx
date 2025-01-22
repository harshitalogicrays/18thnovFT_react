import React, { useState, useEffect } from "react";

const UseeffectCleanup = ()=>{
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        console.log("Interval called!");
      setCount(prev => prev+1);
    }, 2000);

    return ()=>{ // unmount
      clearInterval(interval)
      console.log("Interval clear!");
    }
},[]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default UseeffectCleanup;
