import axios from "axios";

import authorizationHeader from "helpers/authorizationHeader";

import { getCurrentUser } from "services/users";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export function signup(user) {
    return axios.post(REACT_APP_API_URL + "/auth/signup", {
        user,
    });
}

// Make a POST request to the server with username and password.
// Store user information to local storage
// Store JWT to local storage
export function signin(username, password) {
    const normalURL = REACT_APP_API_URL + "/auth/signin";

    return axios
        .post(normalURL, {
            userName: username,
            password: password,
        })
        .then((response) => {
            console.log("Axios sign in: ", response.data);

            if (response.data.accessToken) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }

            return response.data;
        })
        .catch((error) => {
            console.log("Error: ", error);
            Promise.reject("Authentication failed.");
        });
}

// Make a POST request to the server
// Remove JWT from local storage
export function signout() {
    const user = getCurrentUser();

    // Remove token from backend
    return axios.post(
        `${REACT_APP_API_URL}/auth/signout/${user.userName}`,
        {},
        {
            headers: authorizationHeader(),
        }
    );
}
