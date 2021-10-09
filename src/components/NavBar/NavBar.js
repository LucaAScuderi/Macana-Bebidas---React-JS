import React from 'react'
import { CartWidget } from './CartWidget'
import {Navbar, Container, Nav} from 'react-bootstrap'

export const NavBar = ({brand}) => {

    return (
        
        <header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">{brand}</Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Bebidas</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
                <CartWidget />
                </Nav>
            </Container>
        </Navbar>
        
        
            
            
        </header>
        
    )

    
}