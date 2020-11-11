import React, { Component, createContext } from "react";

import Faker from "faker";

// import { getCurrentUser } from "services/users";

const { Provider, Consumer } = createContext();

class UserContextProvider extends Component {
    state = {
        // user: getCurrentUser() || null,
        user: {
            id: Faker.random.uuid(),
            joined: Faker.date.past(),
            about: Faker.lorem.paragraphs(3),
            userName: Faker.internet.userName(),
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            email: Faker.internet.email(),
            phone: Faker.phone.phoneNumber(),
            isHost: false,
            isAdmin: false,
            avatar: Faker.internet.avatar(),
            birthday: Faker.date.past(),
            address: {
                country: Faker.address.country(),
                state: Faker.address.state(),
                zipCode: Faker.address.zipCode(),
                city: Faker.address.city(),
                streetAddress: Faker.address.streetAddress(),
            },
        },
        // user: null,
    };

    removeUser = () => {
        this.setState((prevState) => {
            return {
                user: null,
            };
        });
    };

    render() {
        return (
            <Provider value={{ user: this.state.user, removeUser: this.removeUser }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { Provider, UserContextProvider, Consumer as UserContextConsumer };
