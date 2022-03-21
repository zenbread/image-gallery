import React from 'react';
import { Navbar } from 'react-bootstrap';


function Header({title}) {
    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>)
}

export default Header;