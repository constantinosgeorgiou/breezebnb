import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

import Search from "../Search";
import Listings from "./Listings";

class Home extends Component {
    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Stay somewhere</h1>
                    <Search />
                </Jumbotron>
                <Listings />
            </>
        );
    }
}

export default Home;
