import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar";

class Home extends Component {
    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Stay somewhere</h1>
                    {/* <SearchBar /> */}
                </Jumbotron>
                <Link to="/listings">
                    <Button>Start exploring</Button>
                </Link>
            </>
        );
    }
}

export default Home;
