import React, { Component } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../../assets/images/register.png'
export default class Forminclass extends Component {
  constructor(props) {
    super(props)
    this.state = {
       user : {username:"",email:"",password:"",cpassword:""}
    }
  }
  handleChange =(e)=>{
    this.setState({
      user : {...this.state.user,[e.target.name] :e.target.value}
    })
  }
  handleSubmit =(e)=>{
    e.preventDefault()
    alert(JSON.stringify(this.state.user))
  }
  render() {
    return (
      <Container className='mt-5 shadow p-4'>
        <h1>Form</h1><hr />
        <Row><Col xs={4}> <Image src={Image1} fluid />    </Col>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Row> <Col><Form.Group className='mb-2'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" value={this.state.user.username} onChange={this.handleChange}></Form.Control>
                </Form.Group>
                </Col>
                <Col>  <Form.Group className='mb-2'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" value={this.state.user.email} onChange={this.handleChange}></Form.Control>
                </Form.Group>  </Col>
              </Row>
              <Form.Group className='mb-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.user.password} onChange={this.handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="cpassword" value={this.state.user.cpassword} onChange={this.handleChange}></Form.Control>
              </Form.Group>
              <Button type="submit" variant='danger'>Register</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
