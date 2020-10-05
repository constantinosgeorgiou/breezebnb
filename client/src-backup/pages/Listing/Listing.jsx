import React, { Component } from "react";

import { getListingInformation } from "services/listings";

import { BiStar } from "react-icons/bi";

import Address from "./components/Address";
import AmenitiesPreviewCard from "./components/AmenitiesPreviewCard";
import BedsAndRooms from "./components/BedsAndRooms";
import BookListing from "./components/BookListing";
import Description from "./components/Description";
import HostActions from "./components/HostActions";
import Owner from "./components/Owner";
// import Photos from "../_components/Listing/Photos";
import Summary from "./components/Summary";

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null,

            listingId: props.match.params.listingId,
            initialListingState: {},
            listing: {},
        };
    }

    componentDidMount() {
        const { listingId } = this.state;

        // Fetch listing info
        getListingInformation(listingId).then(
            (response) => {
                const { data } = response;

                this.setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    initialListingState: data.listing,
                    listing: data.listing,
                }));
            },
            (error) => {
                this.setState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    error,
                }));
            }
        );
    }

    contactHost = (change) => {
        change.preventDefault();
    };

    handleEditChange = ({ target }) => {
        const { name, value, type } = target;

        if (type === "checkbox") {
            // Checked contains the value
            // Value contains the object to change
            const { checked } = target;

            this.setState((prevState) => ({
                ...prevState,
                listing: {
                    ...prevState.listing,
                    [value]: {
                        ...prevState.listing[value],
                        [name]: checked,
                    },
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                listing: {
                    ...prevState.listing,
                    [name]: value,
                },
            }));
        }
    };

    handleEditAddressChange = ({ target }) => {
        const { name, value } = target;

        this.setState((prevState) => ({
            listing: {
                ...prevState.listing,
                address: {
                    ...prevState.listing.address,
                    [name]: value,
                },
            },
        }));
    };

    handleEditSpaceChange = ({ target }) => {
        const { name, value } = target;

        this.setState((prevState) => ({
            listing: {
                ...prevState.listing,
                space: {
                    ...prevState.listing.space,
                    [name]: value,
                },
            },
        }));
    };

    render() {
        const {
            state: { isLoading, error, initialListingState, listing },
            handleEditChange,
            handleEditAddressChange,
            handleEditSpaceChange,
        } = this;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (isLoading) {
            return <div>Loading...</div>;
        } else {
            console.log("lsting: " + JSON.stringify(listing, null, 4));
            return (
                <main role="main">
                    <div className="container-lg">
                        <h1>{listing.title}</h1>
                        <p>
                            <BiStar className="align-middle" />
                            <span className="align-middle ml-1">
                                {listing.rating}
                                <span className="text-muted ml-1">
                                    {/* ({listing.reviews.length}) */}5
                                </span>
                            </span>{" "}
                            <span className="align-middle ml-1 mr-2">·</span>
                            <span className="align-middle">
                                {listing.address.city}, {listing.address.state},{" "}
                                {listing.address.country}
                            </span>
                        </p>

                        {/* <Photos photos={listing.photos} /> */}

                        <div className="row">
                            <div className="col-md-8">
                                <div className="card border-0">
                                    <Summary
                                        propertyType={listing.propertyType}
                                        guests={listing.guests}
                                        space={listing.space}
                                        owner={listing.owner}
                                    />
                                    <HostActions
                                        initialListingState={
                                            initialListingState
                                        }
                                        listing={listing}
                                        handleEditAddressChange={
                                            handleEditAddressChange
                                        }
                                        handleEditChange={handleEditChange}
                                        handleEditSpaceChange={
                                            handleEditSpaceChange
                                        }
                                    />
                                    <Description
                                        description={listing.description}
                                        contactHost={this.constactHost}
                                    />

                                    <hr className="my-5" />

                                    <BedsAndRooms space={listing.space} />

                                    <hr className="my-5" />

                                    <AmenitiesPreviewCard
                                        amenities={listing.amenities}
                                    />

                                    <Address address={listing.address} />

                                    <Owner owner={listing.owner} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <BookListing />
                            </div>
                        </div>
                    </div>
                </main>
            );
        }
    }
}

export default Listing;
