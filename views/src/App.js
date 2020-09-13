import React, { Component } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import Listings from "./pages/Listings";

import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

class App extends Component {
    // constructor(props) {
    //     const { pathname } = useLocation();
    // }

    render() {
        return (
            <div>
                <Navigation />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signin" component={SignInPage} />
                    {/* <Route path="/signup" component={SignUp} /> */}
                    {/* <Route path="/listings" component={Listings} /> */}
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default App;
