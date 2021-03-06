import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "context/userContext";
import App from "components/App";
import { CssBaseline } from "@material-ui/core";

import "fontsource-roboto"; // Defaults to weight 400 with all styles included.

// Attempt silent token refresh before startup
// accountService.refreshToken().finally(ReactDOM);

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline>
            <UserContextProvider>
                <Router>
                    <App />
                </Router>
            </UserContextProvider>
        </CssBaseline>
    </React.StrictMode>,
    document.getElementById("root")
);
