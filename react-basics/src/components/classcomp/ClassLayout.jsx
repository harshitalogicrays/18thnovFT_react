import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Outlet } from 'react-router';

export default class ClassLayout extends Component {
    classlinks = [
        {url:"/class",text:"First"},
        {url:"/class/props",text:"Props"},
        {url:"/class/stateandevent",text:"State and Event"},
        {url:"/class/form",text:"Form"},
        {url:"/class/validations",text:"validations"},
        {url:"/class/lifecycle",text:"Lifecycle"},
        {url:"/class/ref",text:"ref"},
        {url:"/class/pure",text:"pure"},
        {url:"/class/errorboundary",text:"error boundary"},
        {url:"/class/hoc",text:"hoc"},

    ]    

    navlinkstyles = ({ isActive }) => ({
        color: isActive ? "purple" : "white",
        backgroundColor:isActive ? "gray" : "",
        fontWeight:isActive?"bold":""
      })
render() {
    return (
      <>
        <Navbar expand="md" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Back</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {this.classlinks.map((link,index)=><Nav.Link key={index} as={NavLink} to={link.url}
                style={this.navlinkstyles} end>{link.text}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
         </Navbar>
         <Container className='mt-5'>
            <Outlet/>
         </Container>
      </>
    )
  }
}
