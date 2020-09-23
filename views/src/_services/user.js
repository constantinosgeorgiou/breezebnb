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
