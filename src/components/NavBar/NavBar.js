import React from "react";
import { CartWidget } from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = ({ brand }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            {brand}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className="nav-link"
                activeClassName={"active"}
                exact
                to="/"
              >
                Home
              </NavLink>

              <NavDropdown className="ms-lg-2 me-lg-2" title="Filtro de bebidas" id="dropdown-split-basic" menuVariant="dark">
                <NavLink
                  className="dropdown-item"
                  activeClassName={"active"}
                  exact
                  to="/productos/fernet"
                >
                  Fernet
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  activeClassName={"active"}
                  exact
                  to="/productos/cerveza"
                >
                  Cerveza
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  activeClassName={"active"}
                  exact
                  to="/productos/vodka"
                >
                  Vodka
                </NavLink>
              </NavDropdown>

              <NavLink to="/cart">
                <CartWidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
