import React from 'react'
import { Col, Row,Nav, Container} from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router'

const HooksDemo = () => {
    let links = [
        {url:"/fun/hooks",text:"useState demo"},
        {url:"/fun/hooks/uncontrolled",text:"useRef  and useEffect demo"},
        {url:"/fun/hooks/imperativehandle",text:"useImperative handle demo"},
        {url:"/fun/hooks/usecallback",text:"useCallback. useRef and useEffect demo"},
        {url:"/fun/hooks/usememo",text:"useMemo demo"},
        {url:"/fun/hooks/usetransition",text:"useTransition demo"},
        {url:"/fun/hooks/customhook",text:"customhook demo"},

    ]
  return (
    <Row>
        <Col xs={3}>
        <Nav className="flex-column">
            {links.map((link,index)=> <Nav.Link key={index} as={NavLink} to={link.url}   style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                backgroundColor:isActive ? "yellow" : "",
                textDecoration:"none" 
              })} end>{link.text}</Nav.Link>)}
       

        </Nav>
        </Col>
        <Col>
            <Container className='mt-4'>
              <Outlet/></Container>
        </Col>
      </Row>
  )
}

export default HooksDemo
