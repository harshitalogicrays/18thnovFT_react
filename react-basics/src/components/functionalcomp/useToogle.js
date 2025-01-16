import React, { useState } from 'react'

const useToogle = (val=false) => {
    const [state,setState] = useState(val)
    const toggleState = (v)=>{
        if(typeof v != 'boolean'){
            setState(!state)
        }
        else {
            setState(v)
        }
    }
     return [state,toggleState]
}

export default useToogle
