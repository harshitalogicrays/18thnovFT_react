import React from 'react'

const ForwardRefDemo = (props,ref) => {
  return (
    <div>
       <input type="text" ref={ref} 
       defaultValue={1}/>
    </div>
  )
}

export default React.forwardRef(ForwardRefDemo)
