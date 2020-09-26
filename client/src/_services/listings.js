import axios from "axios";
import authorizationHeader from "../_helpers/AuthorizationHeader";

const API_URL = "http://localhost:5000";

export function searchListings(parameters) {
    return axios.post(
        `${API_URL}/listings/search`,
        {
            check_in: parameters.checkIn,
            check_out: parameters.checkout,
            country: parameters.country,
            state: parameters.state,
            city: parameters.city,
        },
        {
            headers: authorizationHeader(),
        }
    );
}

export function getListingInformation(id) {
    return axios.get(`${API_URL}/listings/${id}`);
}

export function getLocations() {
    return axios.get(
        API_URL + "/listings/all/locations"
    );
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

export function updateListing(listing) {
    return axios.put(
        API_URL + "/listings/edit/" + listing.id,
        { listing },
        {
            headers: authorizationHeader(),
        }
    );
}

export function removeListing(id) {
    return axios.delete(
        API_URL + "/listings/delete/" + id,
        {},
        {
            headers: authorizationHeader(),
        }
    );
}
