import React, { Component, Fragment } from "react";

import { getCurrentUser } from "../_services/user";

import { Navbar, Nav, Container } from "react-bootstrap";
import UserContext from "../_helpers/UserContext";

class Navigation extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {(context) => (
                    <Navbar collapseOnSelect expand="lg">
                        {console.log("context: ", context)}
                        <Container fluid>
                            <Navbar.Brand href="/">BreezeBnB</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto"></Nav>
                                <Nav>
                                    {!context.user ? (
                                        <Nav.Link href="/hosting">
                                            Become a host
                                        </Nav.Link>
                                    ) : (
                                        <Nav.Link href="/host">
                                            Hostiting
                                        </Nav.Link>
                                    )}
                                    {!context.user ? (
                                        <Fragment>
                                            <Nav.Link href="/signin">
                                                Sign In
                                            </Nav.Link>
                                            <Nav.Link href="/signup">
                                                Sign Up
                                            </Nav.Link>
                                        </Fragment>
                                    ) : (
                                        <Nav.Link href="/profile">
                                            Profile
                                        </Nav.Link>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                )}
            </UserContext.Consumer>
        );
    }
}

export default Navigation;
