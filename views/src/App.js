import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Listings from "./components/pages/Listings";

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/listings" component={Listings} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default App;
