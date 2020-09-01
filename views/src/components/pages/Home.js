import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

// import SearchBar from "../SearchBar";
import Listings from "./Listings";

class Home extends Component {
    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Stay somewhere</h1>
                    {/* <SearchBar /> */}
                </Jumbotron>
                <Listings />
            </>
        );
    }
}

export default Home;
