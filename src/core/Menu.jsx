
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
  
    <Navbar bg="dark" variant={"dark"} expand="lg" fixed="top" >
    <Navbar.Brand as={NavLink} className='mx-3 ' to="#">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>

        </Nav>
        <Nav
            className="ms-auto my-2 my-lg-0 mx-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link as={NavLink} to="/signin">signin</Nav.Link>
            <Nav.Link as={NavLink} to="/signup">signup</Nav.Link>

        </Nav>

    </Navbar.Collapse>
</Navbar>
  
   
  );
};

export default Menu;
