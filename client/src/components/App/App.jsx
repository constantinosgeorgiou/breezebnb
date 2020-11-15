import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";

import { makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Navigation from "components/Navigation";
import Footer from "components/Footer";

// Public routes
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp/SignUp";
// import SearchResultsPage from "./pages/SearchResultsPage";
import ApplyForHosting from "pages/ApplyForHosting/ApplyForHosting";
// import Listing from "pages/Listing";

// Protected routes
import Profile from "pages/Profile";
// import HostDashboard from "pages/HostDashboard";

const theme = createMuiTheme({
    // TODO: Add airbnb color palette
    // palette: {
    //     primary: {
    //         main: "#ff5a60",
    //         light: "#ff8e8d",
    //         dark: "#c62036",
    //     },
    //     secondary: {
    //         main: "#00a698",
    //         light: "#57d8c9",
    //         dark: "#00766a",
    //     },
    // },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
}));

const App = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Navigation />

                <Switch>
                    {/* Public routes */}
                    <Route exact path="/" component={Home} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/apply-for-hosting" component={ApplyForHosting} />
                    {/* <Route path="/results" render={(props) => <SearchResultsPage {...props} /> */}
                    {/* <Route path="/listings/:listingId" component={Listing} /> */}

                    {/* Protected routes */}
                    <ProtectedRoute path="/profile" component={Profile} />
                    {/* <ProtectedRoute path="/host" component={HostDashboard} /> */}
                </Switch>

                <Footer />
            </ThemeProvider>
        </div>
    );
};

export default App;
