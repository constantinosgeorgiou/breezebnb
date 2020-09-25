import React, {
    Component,
    Fragment,
} from "react";

import { getListingInformation } from "../_services/listings";

import { BiStar } from "react-icons/bi";

import Description from "../_components/Description";
import Summary from "../_components/Summary";
import Photos from "../_components/Photos";
import BedsAndRooms from "../_components/BedsAndRooms";
import AmenitiesPreviewCard from "../_components/AmenitiesPreviewCard";
import Address from "../_components/Address";
import Owner from "../_components/Owner";
import BookListing from '../_components/BookListing'
class ListingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null,

            listingId:
                props.match.params.listingId,
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

    render() {
        const {
            isLoading,
            error,
            listing,
        } = this.state;

        if (error) {
            return (
                <div>Error: {error.message}</div>
            );
        } else if (isLoading) {
            return <div>Loading...</div>;
        } else {
            console.log(
                "lsting: " +
                    JSON.stringify(
                        listing,
                        null,
                        4
                    )
            );
            return (
                <main role="main">
                    <div className="container-lg">
                        <h1>{listing.title}</h1>
                        <p>
                            <BiStar className="align-middle" />
                            <span className="align-middle ml-1">
                                {listing.rating}
                                <span className="text-muted ml-1">
                                    {/* ({listing.reviews.length}) */}
                                    5
                                </span>
                            </span>{" "}
                            <span className="align-middle ml-1 mr-2">
                                ·
                            </span>
                            <span className="align-middle">
                                {
                                    listing
                                        .address
                                        .city
                                }
                                ,{" "}
                                {
                                    listing
                                        .address
                                        .state
                                }
                                ,{" "}
                                {
                                    listing
                                        .address
                                        .country
                                }
                            </span>
                        </p>

                        {/* <Photos photos={listing.photos} /> */}

                        <div className="row">
                            <div className="col-md-8">
                                <div className="card border-0">
                                    <Summary
                                        propertyType={
                                            listing.propertyType
                                        }
                                        guests={
                                            listing.guests
                                        }
                                        space={
                                            listing.space
                                        }
                                        owner={
                                            listing.owner
                                        }
                                    />

                                    <Description
                                        description={
                                            listing.description
                                        }
                                        contactHost={
                                            this
                                                .constactHost
                                        }
                                    />

                                    <hr className="my-5" />

                                    <BedsAndRooms
                                        space={
                                            listing.space
                                        }
                                    />

                                    <hr className="my-5" />

                                    <AmenitiesPreviewCard
                                        amenities={
                                            listing.amenities
                                        }
                                    />

                                    <Address
                                        address={
                                            listing.address
                                        }
                                    />

                                    <Owner
                                        owner={
                                            listing.owner
                                        }
                                    />
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

export default ListingPage;
