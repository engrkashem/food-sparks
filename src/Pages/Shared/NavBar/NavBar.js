import React from 'react';
import logo from '../../../images/logofs.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <ShoppingCartIcon style={{ height: '20px' }} className='me-4'></ShoppingCartIcon>
                    <Nav>
                        <Nav.Link className='text-dark me-4' as={Link} to="/login">Login</Nav.Link>
                        <Button variant="danger rounded-pill px-4">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default NavBar;