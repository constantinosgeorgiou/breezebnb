import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function signin(data) {
    return axios
        .post(`${BASE_URL}/auth/signin`, {
            userName: data.userName,
            password: data.password,
        })
        .then((response) => {
            console.log("Axios sign in: ", response);

            localStorage.setItem("x-access-token", response.data.token);
            localStorage.setItem(
                "x-access-token-expiration",
                Date.now() + 2 * 60 * 60 * 1000
            );
            return response.data;
        })
        .catch((error) => Promise.reject("Authentication failed."));
}

export function signout(data){
    return axios.post(`${BASE_URL}/users/${data.user.userName}/signout`).then((response)=>{
        
    })
}

export function isAuthenticated() {
    return (
        localStorage.getItem("x-access-token") &&
        localStorage.getItem("x-access-token-expiration") > Date.now()
    );
}
