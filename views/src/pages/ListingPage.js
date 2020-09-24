import React, { Component, Fragment } from "react";

import UserContext from "../_helpers/UserContext";

import { getListingInformation } from "../_services/listings";

import { BiStar, BiBed, BiBath } from "react-icons/bi";

import { Carousel } from "react-bootstrap";

import faker from "faker";

class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingId: props.match.params.listingId,
            listing: {
                id: faker.random.uuid(),
                title: "Cozy apartment",
                description: faker.lorem.paragraphs(3),
                propertyType: "Bed and Breakfast",
                guests: 3,
                minimumBookingDays: 2,
                rating: 5,
                cost: 15,
                owner: {
                    id: faker.random.uuid(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    photo: faker.internet.avatar(),
                    joined: faker.date.future(),
                },
                photos: [
                    faker.image.image(),
                    faker.image.image(),
                    faker.image.image(),
                    faker.image.image(),
                ],
                coordinates: {
                    latitude: 34,
                    longtitude: 123,
                },
                address: {
                    country: "Greece",
                    state: "Athens",
                    city: "Panormou",
                    zipCode: "54321",
                    streetAddress: "Blah 12",
                    apartmentNumber: "",
                },
                amenities: {
                    wifi: true,
                    shampoo: true,
                    heating: true,
                    airConditioning: true,
                    washer: true,
                    dryer: true,
                    breakfast: true,
                    indoorFireplace: true,
                    hangers: true,
                    iron: true,
                    hairDryer: true,
                    laptopFriendlyWorkspace: true,
                    tv: true,
                    crib: true,
                    highChair: true,
                    selfCheckIn: true,
                    smokeAlarm: true,
                    carbonMonoxideAlarm: true,
                    privateBathroom: true,
                    beachfront: true,
                    waterfront: true,
                },
                space: {
                    beds: 2,
                    bathrooms: 2,
                    rooms: 8,
                    squareMeters: 200,
                    bedrooms: 2,
                    livingRooms: 2,
                    kitchens: 2,
                },
                rules: {
                    petsAllowed: true,
                    smokingAllowed: true,
                    eventsAllowed: true,
                },
                reviews: [
                    {
                        author: {
                            id: faker.random.uuid(),
                            photo: faker.image.avatar(),
                        },
                        text: faker.lorem.paragraph(),
                        created: faker.date.recent(),
                    },
                    {
                        author: {
                            id: faker.random.uuid(),
                            photo: faker.image.avatar(),
                        },
                        text: faker.lorem.paragraph(),
                        created: faker.date.recent(),
                    },
                    {
                        author: {
                            id: faker.random.uuid(),
                            photo: faker.image.avatar(),
                        },
                        text: faker.lorem.paragraph(),
                        created: faker.date.recent(),
                    },
                ],
            },
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
