import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const API_URL = "http://localhost:5000";

export function getReceivedReviews(userName) {
    console.log(userName + "get request");
    return axios.get(`${API_URL}/users/${userName}/reviews-received`, {
        headers: authorizationHeader(),
    });
}
