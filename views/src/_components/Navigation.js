import React, { Component } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">BreezeBnB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/hosting">Become a host</Nav.Link>
                            <Nav.Link href="/signin">Sign In</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;
