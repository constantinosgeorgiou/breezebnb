import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./_components/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UserProvider from "./_helpers/UserProvider";

import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import HostDashboard from "./pages/HostDashboard";
import ApplyForHosting from "./pages/ApplyForHosting";
// import openstreetmap from "./pages/openstreetmap_example";

class App extends Component {
    render() {
        return (
            <div>
                <UserProvider>
                    <Navigation />

                    <Switch>
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

                        <ProtectedRoute
                            path="/profile"
                            component={ProfilePage}
                        />

                        <ProtectedRoute
                            path="/host"
                            component={HostDashboard}
                        />
                        {/* <Route path="/maps" component={openstreetmap} /> */}
                    </Switch>

                    <Footer />
                </UserProvider>
            </div>
        );
    }
}
export default App;
