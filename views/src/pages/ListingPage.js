import React, { Component } from "react";

import { getListingInformation } from "../_services/listings";

class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingId: props.match.params.listingId,
            listing: {},
        };
    }

    componentDidMount() {
        // Fetch listing info
        getListingInformation(this.state.listingId)
            .then((response) => {
                this.setState((prevState) => ({
                    listing: response.data.listing,
                }));
            })
            .catch((error) => {
                console.log("Error while fetcing listing: " + error);
            });
    }

    render() {
        return (
            <div>
                {/* TODO: Make it beatiful */}
                {console.log("listing: ", this.state.listing)}
                <h1>Listing with id: {this.state.listing.id}</h1>
            </div>
        );
    }
}

export default ListingPage;
