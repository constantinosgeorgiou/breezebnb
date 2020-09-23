import React, { Component } from "react";

import { getCurrentUser } from "../_services/user";
import UserContext from "./UserContext";

class UserProvider extends Component {
    state = {
        user: getCurrentUser() || {},
    };

    render() {
        return (
            <UserContext.Provider
                value={{
                    user: this.state.user,
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
