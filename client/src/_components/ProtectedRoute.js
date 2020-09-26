import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { getCurrentUser } from "../_services/users";

class ProtectedRoute extends Component {
    render() {
        const Component = this.props.component;
        const currentUser = getCurrentUser();

        if (currentUser) {
            return <Component />;
        } else {
            return <Redirect to={{ pathname: "/signin" }} />;
        }
    }
}

export default ProtectedRoute;
