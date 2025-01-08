import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../../assets/images/register.png'
const Form1 = () => {
    let obj = {username:"ram",email:"",password:"",cpassword:""}
    let [user,setUser] =useState({...obj})
    let handleChange=(e)=>{
        
    }
    return (
        <Container className='mt-5 shadow p-4'>
            <h1>Form Validations</h1><hr />
            <Row><Col xs={4}> <Image src={Image1} fluid />    </Col>
                <Col>
                    <Form>
                        <Row>
                            <Col><Form.Group className='mb-2'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={user.username} onChange={handleChange}></Form.Control>
                            </Form.Group>   </Col>
                            <Col>  <Form.Group className='mb-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" value={user.email} onChange={handleChange}></Form.Control>
                            </Form.Group>  </Col>
                        </Row>
                        <Form.Group className='mb-2'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={user.password} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="cpassword" value={user.cpassword} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant='danger'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Form1
