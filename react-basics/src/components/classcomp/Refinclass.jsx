import React, { Component, createRef } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../../assets/images/register.png'

export default class Refinclass extends Component {
  constructor(props) {
    super(props)
    this.state = {email:"",password:""}
    this.focusRef = createRef()
  }
 
  handleFocus =(e)=>{ alert(this.focusRef.current.value)}

  componentDidMount(){ //calls implicitly once the component is completely loaded
    this.focusRef.current.focus()
  }

  render() {
    return (
      <Container className='mt-5 shadow p-4'>
        <h1>Ref</h1><hr />
        <Row><Col xs={4}> <Image src={Image1} fluid />    </Col>
          <Col>
             <Form.Group className='mb-2'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" ref={this.focusRef} value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></Form.Control>
                </Form.Group>  
              <Form.Group className='mb-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}></Form.Control>
              </Form.Group>
              <Button type="submit" variant='danger'onClick={this.handleFocus}>Login</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
