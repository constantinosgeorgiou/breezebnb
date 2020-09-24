import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const API_URL = "http://localhost:5000";

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export function getReceivedReviews(userName) {
    return axios.get(`${API_URL}/users/${userName}/reviews-received`, {
        headers: authorizationHeader(),
    });
}

export function updateUserInfo(user) {
    console.log("update user information!!!");
    return axios
        .put(API_URL + "/users/uptAccountInfo/" + user.id, {
            headers: authorizationHeader(),user
        })
        .then((response) => {
            console.log("response: ", response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function updateUserAdd(user) {
    console.log("update user Address!!!");
    return axios
        .put(API_URL + "/users/uptAddress/" + user.id, {
            headers: authorizationHeader(),user
        })
        .then((response) => {
            console.log("response: ", response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}