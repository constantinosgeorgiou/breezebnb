import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome home</h1>
                <p>Search for shit</p>
                <NavLink to="/listings">Show all listings</NavLink>
            </div>
        );
    }
}

export default HomePage;
