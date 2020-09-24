import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const API_URL = "http://localhost:5000";

export function searchListings(parameters) {
    
    return axios.get(`${API_URL}/listings/search`, {
        headers: authorizationHeader(),
    });
}

export function getListingInformation(id) {
    return axios.get(`${API_URL}/listings/${id}`, {
        headers: authorizationHeader(),
    });
}
