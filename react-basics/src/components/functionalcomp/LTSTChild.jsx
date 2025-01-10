import React from 'react'

const LTSTChild = ({increasep,decreasep,resetp,changesign}) => {
  return (
   <>
    <button type="button" class="btn btn-primary me-2" onClick={increasep} >Increase</button>
        <button type="button" class="btn btn-primary me-2" onClick={decreasep} >Decrease</button>
        <button type="button" class="btn btn-primary me-2" onClick={resetp} >Reset</button>
        <button type="button" class="btn btn-primary me-2" onClick={changesign} >change sign</button>
   </>
  )
}

export default LTSTChild
