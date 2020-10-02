import React, { Component, createContext } from "react";
import { getCurrentUser } from "../_services/users";
const { Provider, Consumer } = createContext();

class UserProvider extends Component {
    state = {
        user: getCurrentUser() || null,
        host: false,
    };

    render() {
        return (
            <UserContext.Provider
                value={{
                    user: this.state.user,
                    removeUser: () => {
                        this.setState((prevState) => ({
                            user: null,
                        }));
                    },
                    setHost: () => {
                        this.setState((prevState) => ({
                            host: !prevState.host,
                        }));
                    },
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
