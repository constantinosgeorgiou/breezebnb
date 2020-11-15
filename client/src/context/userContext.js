import React, { Component, createContext } from "react";

import Faker from "faker";

// import { getCurrentUser } from "services/users";

const { Provider, Consumer } = createContext();

class UserContextProvider extends Component {
    state = {
        // user: getCurrentUser() || null,
        // user: {
        //     id: Faker.random.uuid(),
        //     joined: { month: Faker.date.month(), year: "2020" },
        //     about: Faker.lorem.paragraphs(3),
        //     userName: Faker.internet.userName(),
        //     firstName: Faker.name.firstName(),
        //     lastName: Faker.name.lastName(),
        //     email: Faker.internet.email(),
        //     phone: Faker.phone.phoneNumber(),
        //     isHost: false,
        //     isAdmin: false,
        //     // avatar:
        //     //     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbe%2FArnold_Schwarzenegger_-_2019_(33730956438)_(cropped).jpg%2F1200px-Arnold_Schwarzenegger_-_2019_(33730956438)_(cropped).jpg&f=1&nofb=1",
        //     avatar: null,
        //     birthday: Faker.date.past(),
        //     address: {
        //         country: Faker.address.country(),
        //         state: Faker.address.state(),
        //         zipCode: Faker.address.zipCode(),
        //         city: Faker.address.city(),
        //         streetAddress: Faker.address.streetAddress(),
        //     },
        // },
        user: null,
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
