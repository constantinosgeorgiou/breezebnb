import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "context/userContext";
import App from "components/App";
// import "bootstrap/dist/css/bootstrap.min.css";
import M from "materialize-css";
// Attempt silent token refresh before startup
// accountService.refreshToken().finally(ReactDOM);

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <Router>
                <App />
            </Router>
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
