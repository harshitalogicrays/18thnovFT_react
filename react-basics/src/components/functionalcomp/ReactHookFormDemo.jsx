import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../../assets/images/register.png'
import { useForm } from 'react-hook-form'

const ReactHookFormDemo = () => {
    let {register,handleSubmit,getValues, formState: { errors } , trigger} = useForm()
    let registerForm=(user)=>{
        // console.log(getValues())
        alert(JSON.stringify(user));        
    }
    return (
        <Container className='mt-5 shadow p-4'>
            <h1>Form Validations using React Hook Form </h1><hr />
            <Row><Col xs={4}> <Image src={Image1} fluid />    </Col>
                <Col><Form onSubmit={handleSubmit(registerForm)}>
                        <Row>
                            <Col><Form.Group className='mb-2'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username"
                                {...register("username", {required:"username is required" , 
                                    maxLength:{value:20 , message:"Max 20 char"}
                                } )}
                                onBlur={()=>trigger("username")}
                                ></Form.Control>
                                {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                            </Form.Group>
                            </Col>
                            <Col>  <Form.Group className='mb-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email"
                                {...register("email" , {required:"email is required" ,
                                pattern:{value:/^[\w]+\@[\w]+\.[a-zA-Z]{3}$/ ,message:"Invalid Email"} })}  onBlur={()=>trigger("email")}></Form.Control>
                                 {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                            </Form.Group>  </Col>
                        </Row>
                        <Form.Group className='mb-2'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" 
                            {...register("password" , {required:"password is required"})}></Form.Control>
                           {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="cpassword"
                            {...register("cpassword" , { 
                                validate:(cpwd)=>{
                                    let {password} = getValues()
                                    return password == cpwd || "password not match"
                                }
                            })}></Form.Control>
                              {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
                        </Form.Group>
                        <Button type="submit" variant='danger'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ReactHookFormDemo
