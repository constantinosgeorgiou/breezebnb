import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const API_URL = "http://localhost:5000";

export function searchListings(parameters) {
    return axios.get(
        `${API_URL}/listings/search`,
        {
            // check_in: parameters.<Insert here>
            // check_out: <insert here>
            // country: <insert here>
            // state: <insert here>
            // city: <insert here>
        },
        {
            headers: authorizationHeader(),
        }
    );
}

export function getListingInformation(id) {
    return axios.get(`${API_URL}/listings/${id}`, {
        headers: authorizationHeader(),
    });
}

export function addListing(listing) {
    return axios.post(
        API_URL + "/listings/new",
        { listing },
        {
            headers: authorizationHeader(),
        }
    );
}
