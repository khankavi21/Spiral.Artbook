import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class Navbarx extends Component {
  render() {
    return (
      
        <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand className="text-light fs-1 mx-2" href="/">Spiral . artbook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  className='bg-light'/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '110px' }}
              navbarScroll
            >
              <Nav.Link className="text-light fs-4 mx-3" href="/">Home</Nav.Link>
              <div className='d-flex me-auto'>
                <Nav.Link className="text-light fs-4 mx-3" href="/About">About Us</Nav.Link>
                <Nav.Link className="text-light fs-4 mx-3" href="/Contact">Contact Us </Nav.Link>
              </div>
              </Nav>
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

