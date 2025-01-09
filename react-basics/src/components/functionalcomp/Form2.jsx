import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../../assets/images/register.png'
const Form2 = () => {
    let obj = {username:"ram",email:"",password:"",cpassword:""}
    let [user,setUser] =useState({...obj})
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(user)
    }
    return (
        <Container className='mt-5 shadow p-4'>
            <h1>Form Validations</h1><hr />
            <Row><Col xs={4}> <Image src={Image1} fluid />    </Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col><Form.Group className='mb-2'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}></Form.Control>
                            </Form.Group>   </Col>
                            <Col>  <Form.Group className='mb-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}></Form.Control>
                            </Form.Group>  </Col>
                        </Row>
                        <Form.Group className='mb-2'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="cpassword" value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant='danger'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Form2
