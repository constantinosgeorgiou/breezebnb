import React, { Component, Fragment } from "react";

import { UserContextConsumer } from "context/userContext";

import { Navbar, Nav, Container } from "react-bootstrap";

// import { signout } from "services/authentication";

import logo from "assets/images/brand/logo.svg";

class Navigation extends Component {
    // handleSignOut = () => {
    //     if (this.context.user !== null) {
    //         signout()
    //             .then((response) => {
    //                 console.log("response: " + response);

    //                 // Remove from context
    //                 this.context.removeUser();

    //                 // Remove from local storage
    //                 localStorage.removeItem("user");

    //                 // Refresh window
    //                 window.location.reload();
    //             })
    //             .catch((error) => {
    //                 console.log("error: ", error);
    //             });
    //     }
    // };

    render() {
        return (
            <UserContextConsumer>
                {(context) => (
                    <Navbar collapseOnSelect expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="/">
                                <img
                                    alt=""
                                    src={logo}
                                    height="30"
                                    className="d-inline-block align-top text-primary"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto"></Nav>
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
                                            // onClick={this.handleSignOut}
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
            </UserContextConsumer>
        );
    }
}

Navigation.contextType = UserContextConsumer;

export default Navigation;
