import axios from "axios";

const BASE_URL = "http://localhost:5000";

// Make a POST request to the server with username and password.
// Store user information to local storage
// Store JWT to local storage
export function signin(username, password) {
    return axios
        .post(`${BASE_URL}/auth/signin`, {
            userName: username,
            password: password,
        })
        .then((response) => {
            console.log("Axios sign in: ", response);

            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            // localStorage.setItem("x-access-token", response.data.token);
            // localStorage.setItem(
            //     "x-access-token-expiration",
            //     Date.now() + 2 * 60 * 60 * 1000
            // );
            return response.data;
        })
        .catch((error) => Promise.reject("Authentication failed."));
}

// Make a POST request to the server
// Remove JWT from local storage
export function signout(data) {
    return axios
        .post(`${BASE_URL}/users/${data.user.userName}/signout`)
        .then((response) => {});
}

export function isAuthenticated() {
    return (
        localStorage.getItem("x-access-token") &&
        localStorage.getItem("x-access-token-expiration") > Date.now()
    );
}
