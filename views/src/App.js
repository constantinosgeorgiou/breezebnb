import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

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
                    <Route path="/signup" component={SignUpPage} />
                    {/* <Route path="/listings" component={Listings} /> */}
                    {/* <Route path="/search/" component={ResultsPage} /> */}
                    <Route path="/users" component={ProfilePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default App;
