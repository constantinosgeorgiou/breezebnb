import React, { Component, Fragment } from "react";
import { signout } from "../_services/authentication";

import { Navbar, Nav, Container } from "react-bootstrap";
import UserContext from "../_helpers/UserContext";

class Navigation extends Component {
    static contextType = UserContext;

    handleSignOut = () => {
        if (this.context.user !== null) {
            signout()
                .then((response) => {
                    console.log("response: " + response);

                    // Remove from context
                    this.context.removeUser();

                    // Remove from local storage
                    localStorage.removeItem("user");

                    // Refresh window
                    window.location.reload();
                })
                .catch((error) => {
                    console.log("error: ", error);
                });
        }
    };

    render() {
        return (
            <UserContext.Consumer>
                {(context) => (
                    <Navbar collapseOnSelect expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="/">BreezeBnB</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto"></Nav>
                                {console.log("context user:", context.user)}
                                <Nav>
                                    {context.user !== null ? (
                                        context.user.userRole === "host" ? (
                                            <Nav.Link href="/host">
                                                Hostiting
                                            </Nav.Link>
                                        ) : (
                                            <Nav.Link href="/apply-for-hosting">
                                                Become a host
                                            </Nav.Link>
                                        )
                                    ) : (
                                        <Nav.Link href="/apply-for-hosting">
                                            Become a host
                                        </Nav.Link>
                                    )}

                                    {context.user === null ? (
                                        <Fragment>
                                            <Nav.Link href="/signin">
                                                Sign In
                                            </Nav.Link>
                                            <Nav.Link href="/signup">
                                                Sign Up
                                            </Nav.Link>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <Nav.Link href="/profile">
                                                Profile
                                            </Nav.Link>
                                            <Nav.Link
                                                onClick={this.handleSignOut}
                                            >
                                                Sign out
                                            </Nav.Link>
                                        </Fragment>
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
