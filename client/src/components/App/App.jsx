import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "components/Navigation";
import Footer from "components/Footer";

// Public routes
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
// import SearchResultsPage from "./pages/SearchResultsPage";
import ApplyForHosting from "pages/ApplyForHosting";
import Listing from "pages/Listing";

// Protected routes
import Profile from "pages/Profile";
import HostDashboard from "pages/HostDashboard";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />

                <Switch>
                    {/* Public routes */}
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route
                        path="/apply-for-hosting"
                        component={ApplyForHosting}
                    />
                    {/*     <Route
                            path="/results"
                            render={(props) => <SearchResultsPage {...props} />}
                        />*/}
                    <Route path="/listings/:listingId" component={Listing} />

                    {/* Protected routes */}
                    <ProtectedRoute path="/profile" component={Profile} />
                    <ProtectedRoute path="/host" component={HostDashboard} />
                </Switch>

                <Footer />
            </Fragment>
        );
    }
}

export default App;
