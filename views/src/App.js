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
import SearchResultsPage from "./pages/SearchResultsPage";
import openstreetmap from "./pages/openstreetmap_example";
import HostDashboard from "./pages/HostDashboard";

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <Switch>
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/users" component={ProfilePage} />
                    <Route
                        path="/results"
                        render={(props) => <SearchResultsPage {...props} />}
                    />
                    <Route path="/maps" component={openstreetmap} />
                    <Route path="/host" component={HostDashboard} />
                </Switch>

                <Footer />
            </div>
        );
    }
}
export default App;
