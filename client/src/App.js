import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./_components/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UserProvider from "./_helpers/UserProvider";

import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

// Public routes
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ApplyForHosting from "./pages/ApplyForHosting";
import ListingPage from "./pages/ListingPage";

// Protected routes
import ProfilePage from "./pages/ProfilePage";
import HostDashboard from "./pages/HostDashboard";

class App extends Component {
    render() {
        return (
            <Fragment>
                <UserProvider>
                    <Navigation />

                    <Switch>
                        {/* Public routes */}
                        <Route exact path="/" component={HomePage} />
                        <Route path="/signin" component={SignInPage} />
                        <Route path="/signup" component={SignUpPage} />
                        <Route
                            path="/apply-for-hosting"
                            component={ApplyForHosting}
                        />
                        <Route
                            path="/results"
                            render={(props) => <SearchResultsPage {...props} />}
                        />
                        <Route
                            path="/listings/:listingId"
                            component={ListingPage}
                        />

                        {/* Protected routes */}
                        <ProtectedRoute
                            path="/profile"
                            component={ProfilePage}
                        />
                        <ProtectedRoute
                            path="/host"
                            component={HostDashboard}
                        />
                    </Switch>

                    <Footer />
                </UserProvider>
            </Fragment>
        );
    }
}
export default App;
