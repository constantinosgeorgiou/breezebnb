import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export function getCurrentUser() {
    return JSON.parse(
        localStorage.getItem("user")
    );
}

export function getReceivedReviews(userName) {
    return axios.get(
        `${REACT_APP_API_URL}/users/${userName}/reviews-received`,
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
        REACT_APP_API_URL +
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
        REACT_APP_API_URL +
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
        REACT_APP_API_URL + "/hosting/" + id,
        {},
        {
            headers: authorizationHeader(),
        }
    );
}
