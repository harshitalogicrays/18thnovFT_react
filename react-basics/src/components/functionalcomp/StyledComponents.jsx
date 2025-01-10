import React from 'react'
import { Button } from 'react-bootstrap'
import { MyButton, TextBox } from './CustomStyled'

const StyledComponents = () => {
  return (
    <div>
      {/* <button type="button" className='btn btn-primary'>Click Me</button> */}
      <Button variant='danger'>Click Me</Button>
      <MyButton>Click Me</MyButton>
      <TextBox type="date"></TextBox>
    </div>
  )
}

export default StyledComponents
