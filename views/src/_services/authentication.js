import axios from "axios";

const API_URL = "http://localhost:5000";

export function signup(user) {
    return axios
        .post(API_URL + "/auth/signup", { user })
        .then((response) => {
            console.log("Sign up response: ", response.data);
            if (response.data.accessToken) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }

            return response.data;
        })
        .catch((error) => console.log("sign up error: ", error));
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
export function signout(data) {
    return axios
        .post(`${API_URL}/users/${data.user.userName}/signout`)
        .then((response) => {});
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}
