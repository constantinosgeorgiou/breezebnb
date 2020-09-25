import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const API_URL = "http://localhost:5000";

export function getCurrentUser() {
    return JSON.parse(
        localStorage.getItem("user")
    );
}

export function getReceivedReviews(userName) {
    return axios.get(
        `${API_URL}/users/${userName}/reviews-received`,
        {},
        {
            headers: authorizationHeader(),
        }
    );
}

export function updateUserInfo(user) {
    console.log(
        "update user information!!!" +
            JSON.stringify(user, null, 4)
    );
    return axios.put(
        API_URL +
            "/users/update/account-info/" +
            user.userName,
        {
            user,
        },
        {
            headers: authorizationHeader(),
        }
    );
}

export function updateUserAdd(user) {
    console.log("update user Address!!!" + user);
    return axios.put(
        API_URL +
            "/users/update/address/" +
            user.userName,
        {
            user,
        },
        {
            headers: authorizationHeader(),
        }
    );
}

export function getListingsOfUser(id) {
    console.log("host id:", id);

    return axios.get(
        API_URL + "/hosting/" + id,
        {},
        {
            headers: authorizationHeader(),
        }
    );
}
