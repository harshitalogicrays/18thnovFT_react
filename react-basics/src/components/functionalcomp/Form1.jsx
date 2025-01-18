import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../../assets/images/register.png'
const Form1 = () => {
    let obj = { username: "", email: "", password: "", cpassword: "" }
    let [user, setUser] = useState({ ...obj })
    let [errors, setErrors] = useState({})
    let handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value }) //user = {email:"",password:"",cpassword:"",username:"Meera"}
        //user = {email:"",password:"12345",cpassword:"",username:"Meera"}
        // console.log(user)
    }

    let checkusername = () => {
        if (user.username == '') {
            setErrors((prevErr)=>({ ...prevErr, username: "username is required" }));return false
        }
        else if(!/^[a-zA-Z]+$/.test(user.username)){
            setErrors((prevErr)=>({ ...prevErr, username: "alphabets only" }));return false
        }
        else {
            setErrors((prevErr)=>({ ...prevErr, username: "" }));return true
        }
    }

    let checkemail = () => {
        if (user.email == '') {
            setErrors((prevErr)=>({ ...prevErr, email: "email is required" }))
            return false
        }
        else {
            setErrors((prevErr)=>({ ...prevErr, email: "" }));return true
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let un = checkusername();let em=checkemail()
        if(un==false || em==false){e.preventDefault()}
        else console.log(user)
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
         <Form.Control type="text" name="username" value={user.username} onChange={handleChange} onBlur={checkusername}></Form.Control>
         {errors?.username && <span className='text-danger'>{errors.username}</span>}
                            </Form.Group>
                            </Col>
                            <Col>  <Form.Group className='mb-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" value={user.email} onChange={handleChange} onBlur={checkemail}></Form.Control>
                                {errors?.email && <span className='text-danger'>{errors.email}</span>}
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
