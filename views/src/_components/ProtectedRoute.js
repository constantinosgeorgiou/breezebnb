import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { getCurrentUser } from "../_services/user";

class ProtectedRoute extends Component {
    render() {
        const Component = this.props.component;
        const currentUser = getCurrentUser();

        if (currentUser) {
            if (currentUser.userRole === "host") {
                return <Component />;
            } else {
                return <Redirect to={{ pathname: "/apply-for-hosting" }} />;
            }
        } else {
            return <Redirect to={{ pathname: "/signin" }} />;
        }
    }
}

export default ProtectedRoute;
