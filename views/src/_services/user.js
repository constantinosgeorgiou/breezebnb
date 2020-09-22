import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const API_URL = "http://localhost:5000";

export function getReceivedReviews(userName) {
    console.log("get reviews!!!");
    return axios
        .get(API_URL + "/users/" + userName + "/received-reviews", {
            headers: authorizationHeader(),
        })
        .then((response) => {
            console.log("response: ", response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
