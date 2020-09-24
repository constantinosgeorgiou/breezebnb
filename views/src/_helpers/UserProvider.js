import React, { Component } from "react";

import { getCurrentUser } from "../_services/users";
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
                    removeUser: () => {
                        this.setState((prevState) => {
                            user: {
                            }
                        });
                    },
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
