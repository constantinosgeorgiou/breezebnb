import axios from "axios";

import authorizationHeader from "../_helpers/AuthorizationHeader";

import { getCurrentUser } from "./user";

const API_URL = "http://localhost:5000";

export function signup(user) {
    return axios.post(API_URL + "/auth/signup", { user });
}

// Make a POST request to the server with username and password.
// Store user information to local storage
// Store JWT to local storage
export function signin(username, password) {
    return axios
        .post(API_URL + "/auth/signin", {
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

    return axios
        .post(
            `${API_URL}/auth/signout/${user.userName}`,
            {},
            {
                headers: authorizationHeader(),
            }
        )
        .then((response) => {
            console.log("response: " + response);
            localStorage.removeItem("user");
        })
        .catch((error) => {
            console.log("error: ", error);
        });
}
