import React, { Component, Fragment } from "react";

import UserContext from "../_helpers/UserContext";

import { getListingInformation } from "../_services/listings";

import { BiStar, BiBed, BiBath } from "react-icons/bi";

import { Carousel } from "react-bootstrap";

class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingId: props.match.params.listingId,
            listing: {},
        };
    }

    static contextType = UserContext;

    componentDidMount() {
        // Fetch listing info
        getListingInformation(this.state.listingId)
            .then((response) => {
                const { data } = response;

                console.log(
                    "received: " + JSON.stringify(response.data, null, 4)
                );

                this.setState((prevState) => ({
                    listing: data.listing,
                }));
            })
            .catch((error) => {
                console.log("Error while fetcing listing: " + error);
            });
    }

    contactHost = (change) => {
        change.preventDefault();
    };

    render() {
        const listing = this.state.listing;

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

                                <Description
                                    description={listing.description}
                                    contactHost={this.constactHost}
                                />

                                <hr className="my-5" />

                                <BedsAndRooms />

                                <hr className="my-5" />
                            </div>
                        </div>
                        <div className="col-md-4">b</div>
                    </div>
                </div>
            </main>
        );
    }
}

const Description = ({ description, contactHost }) => {
    return (
        <div className="card-body p-0">
            <p className="card-text">{description}</p>

            <button className="btn btn-outline-secondary" onClick={contactHost}>
                Contact host
            </button>
        </div>
    );
};

const Summary = ({ propertyType, guests, space, owner }) => {
    return (
        <div className="card-header p-0">
            <div className="row no-gutters">
                <div className="col">
                    <h2 className="card-title mb-1">
                        <span>{propertyType}</span>
                        <span className="w-100 d-none d-md-block"></span>
                        <span>hosted by {owner.firstName}</span>
                    </h2>
                    <p>
                        <span>
                            {guests} guest
                            {guests === 1 ? "" : "s"}
                        </span>
                        <span className="mx-2">·</span>
                        <span>
                            {space.beds} bed
                            {space.beds === 1 ? "" : "s"}
                        </span>
                        <span className="mx-2">·</span>
                        <span>
                            {space.bedrooms} bedroom
                            {space.bedrooms === 1 ? "" : "s"}
                        </span>
                        <span className="mx-2">·</span>
                        <span>
                            {space.bathrooms} bathroom
                            {space.bathrooms === 1 ? "" : "s"}
                        </span>
                    </p>
                </div>
                <div className="col-auto mr-2  align-self-center">
                    <img
                        src={owner.photo}
                        className="rounded-circle img-circle-60"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

const BedsAndRooms = ({}) => {
    return (
        <div className="card-body p-0">
            <p>test</p>
        </div>
    );
};

const Photos = ({ photos }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={photos[0]} alt="" />
            </Carousel.Item>
        </Carousel>
    );
};

export default ListingPage;
