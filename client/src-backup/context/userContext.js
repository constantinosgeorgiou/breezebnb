import React, { Component, createContext } from 'react'

import { getCurrentUser } from 'services/users'

const { Provider, Consumer } = createContext()

class UserContextProvider extends Component {
    state = {
        user: getCurrentUser() || null,
    }

    removeUser = () => {
        this.setState(prevState => {
            return {
                user: null
            }
        })
    }

    render() {
        return (
            <Provider value={{ user: this.state.user, removeUser: this.removeUser }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }