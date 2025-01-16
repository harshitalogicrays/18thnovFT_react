import React from 'react'
import useToogle from './useToogle'

const CustomHook = () => {
  const [state,toggleState] = useToogle(true)
  return (
    <div>
      <button type="button" className='btn btn-primary me-2' onClick={()=>toggleState(false)}>Hide Data</button>
      <button type="button" className='btn btn-primary me-2'  onClick={()=>toggleState(true)}>Show Data</button>
      <button type="button" className='btn btn-primary me-2' onClick={toggleState}>Toggle Data</button>

      {
      state  && 
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nostrum perferendis quod eos quae. Deleniti, sit. Voluptatem cupiditate repudiandae a eveniet, alias, vitae eum eaque hic repellendus vel cumque officia.</div>
    }
    </div>
  )
}

export default CustomHook
