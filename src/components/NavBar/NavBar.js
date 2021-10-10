import React from 'react'
import { CartWidget } from './CartWidget'
import {NavLink} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'

export const NavBar = ({brand}) => {

    return (
        
        <header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">{brand}</Navbar.Brand>
                <Nav className="ms-auto">
                    
                    <NavLink  className="nav-link" activeClassName={'active'} exact to="/">Home</NavLink>
                    <NavLink className="nav-link" activeClassName={'active'} exact to="/productos">Bebidas</NavLink>
                    <NavLink className="nav-link" activeClassName={'active'} exact to="/contacto">Contacto</NavLink>

                    <NavLink to="/cart"><CartWidget /></NavLink>
                
                </Nav>
            </Container>
        </Navbar>
        
        
            
            
        </header>
        
    )

    
}