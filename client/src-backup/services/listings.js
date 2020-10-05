import axios from "axios";
import authorizationHeader from "helpers/authorizationHeader";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

console.log("REACT_APP_API_URL: " + process.env.REACT_APP_API_URL)

export function searchListings(parameters) {
    return axios.post(
        `${REACT_APP_API_URL}/listings/search`,
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
    return axios.get(`${REACT_APP_API_URL}/listings/${id}`);
}

export function getLocations() {
    return axios.get(
        REACT_APP_API_URL + "/listings/all/locations"
    );
}

export function addListing(listing) {
    return axios.post(
        REACT_APP_API_URL + "/listings/new",
        { listing },
        {
            headers: authorizationHeader(),
        }
    );
}

export function updateListing(listing) {
    return axios.put(
        REACT_APP_API_URL + "/listings/edit/" + listing.id,
        { listing },
        {
            headers: authorizationHeader(),
        }
    );
}

export function removeListing(id) {
    return axios.delete(
        REACT_APP_API_URL + "/listings/delete/" + id,
        {},
        {
            headers: authorizationHeader(),
        }
    );
}
