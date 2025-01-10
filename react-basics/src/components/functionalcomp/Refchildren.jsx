import React from 'react'

const Refchildren = (props) => {
  return (
    <div>
             <button type="button" className='btn btn-primary mb-4 me-3' 
             onClick={()=>props.inner.current.focus()}>Focus</button><br/><hr/>
             
               <button type="button" className='btn btn-primary me-3 mb-4' 
                 onClick={()=>props.count.current.value--}
                 > decrease</button>
               <button type="button" className='btn btn-primary  me-3 mb-4'   onClick={()=>props.count.current.value++}>increase</button>
    </div>
  )
}

export default Refchildren
