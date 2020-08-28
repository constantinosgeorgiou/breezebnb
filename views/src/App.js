// Based on this tutorial
// https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AppBar, Toolbar, Typography } from "@material-ui/core";

import NavBar from "./components/NavBar";

import HomePage from "./components/pages/HomePage";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
// import Listings from "./components/pages/Listings";
// import SearchBar from "./components/searchbar";

class App extends Component {
    // state = {
    //     listings: [],
    // };

    // componentDidMount() {
    //     fetch("http://localhost:5000/listings")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({ listings: data });
    //         })
    //         .catch(console.log);
    // }

    render() {
        return (
            <Router>
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                {/* <Route path="/listings" component={Listings} /> */}
            </Router>
        );
    }
}
export default App;
