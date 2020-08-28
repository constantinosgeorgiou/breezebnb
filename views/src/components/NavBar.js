import React, { Component } from "react";

import { NavLink } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <main>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin">Sign In</NavLink>
                        </li>
                    </ul>
                </nav>
            </main>
        );
    }
}

export default NavBar;
