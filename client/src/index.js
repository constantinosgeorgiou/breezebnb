import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

// Attempt silent token refresh before startup
// accountService.refreshToken().finally(ReactDOM);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
