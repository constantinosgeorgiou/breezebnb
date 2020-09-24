import React, { Component } from "react";

import UserContext from "../_helpers/UserContext";

import { getListingInformation } from "../_services/listings";

import { BiStar } from "react-icons/bi";

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
                description: faker.lorem.paragraph(),
                propertyType: "Bed and Breakfast",
                guests: 3,
                minimumBookingDays: 2,
                rating: 5,

                owner: 0,
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
        // let listing = {};
        // // Fetch listing info
        getListingInformation(this.state.listingId)
            .then((response) => {
                console.log(
                    "received: " + JSON.stringify(response.data, null, 4)
                );
                // const { data } = response;

                // listing.id = this.setState((prevState) => ({
                //     listing: response.data.listing,
                // }));
            })
            .catch((error) => {
                console.log("Error while fetcing listing: " + error);
            });

        this.state.listing.owner = this.context.user.id;
    }

    render() {
        const listing = this.state.listing;

        return (
            <main role="main">
                <div className="container">
                    <h1>{listing.title}</h1>
                    <p>
                        <BiStar className="align-middle" />
                        <span className="align-middle ml-1">
                            {listing.rating}
                            <span className="text-muted ml-1">
                                ({listing.reviews.length})
                            </span>
                        </span>{" "}
                        <span className="align-middle ml-1 mr-2">·</span>
                        <span className="align-middle">
                            {listing.address.city}, {listing.address.state},{" "}
                            {listing.address.country}
                        </span>
                    </p>
                </div>

                {/* <Photos photos={listing.photos} /> */}

                <div className="row">
                    <div className="col-8 red-border">a</div>
                    <div className="col-4 blue-border" b></div>
                </div>
            </main>
        );
    }
}

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
