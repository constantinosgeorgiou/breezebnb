import React, { Component } from "react";
import { BiStar } from "react-icons/bi";
import Listings from "../_components/Listings";
import { Container } from "react-bootstrap";

import { BiPlusCircle } from "react-icons/bi";

class HostDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [
                {
                    id: 1,
                    title: "Cozy aparetment",
                    description:
                        "Sint nulla ex tempor voluptate quis nostrud. Aute ea ipsum ullamco ut do consectetur do. Laboris reprehenderit dolor Lorem quis. Pariatur consectetur enim ex veniam aliqua nulla cillum. Excepteur elit fugiat elit adipisicing cupidatat est consequat et. Culpa velit incididunt sunt id veniam deserunt irure Lorem deserunt fugiat ipsum Lorem. Cillum fugiat minim velit dolore est.",
                    cost: "10",
                    type: "Apartment",
                    rating: 5,
                    guests: 3,
                    pictures: [
                        {
                            id: 0,
                            url:
                                "https://a0.muscache.com/im/pictures/26f549d7-4a09-4faa-b1e4-71fcd1f3a611.jpg?im_w=720",
                        },
                        {
                            id: 1,
                            url:
                                "https://a0.muscache.com/im/pictures/af40aa25-8309-414d-b584-600ff0fb8393.jpg?im_w=720",
                        },
                        {
                            id: 2,
                            url:
                                "https://a0.muscache.com/im/pictures/e9ebee08-6956-40c2-a1bf-34350ea51b3b.jpg?im_w=720",
                        },
                    ],
                    address: {
                        country: "Greece",
                        state: "Athens",
                        city: "Panormou",
                        zipCode: 12345,
                        street: "Papantreou 10",
                        apartmentNumber: "B1",
                    },
                    space: {
                        beds: 1,
                        bedrooms: 1,
                        bathrooms: 1,
                        livingrooms: 1,
                        kitchen: true,
                        rooms: 4,
                        squareMeters: 100,
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
                    },
                    rules: {
                        pets: true,
                        smoking: true,
                        events: true,
                    },
                },
                {
                    id: 2,
                    title: "Cozy aparetment",
                    description:
                        "Sint nulla ex tempor voluptate quis nostrud. Aute ea ipsum ullamco ut do consectetur do. Laboris reprehenderit dolor Lorem quis. Pariatur consectetur enim ex veniam aliqua nulla cillum. Excepteur elit fugiat elit adipisicing cupidatat est consequat et. Culpa velit incididunt sunt id veniam deserunt irure Lorem deserunt fugiat ipsum Lorem. Cillum fugiat minim velit dolore est.",
                    cost: "10",
                    type: "Apartment",
                    rating: 5,
                    guests: 3,

                    pictures: [
                        {
                            id: 0,
                            url:
                                "https://a0.muscache.com/im/pictures/26f549d7-4a09-4faa-b1e4-71fcd1f3a611.jpg?im_w=720",
                        },
                        {
                            id: 1,
                            url:
                                "https://a0.muscache.com/im/pictures/af40aa25-8309-414d-b584-600ff0fb8393.jpg?im_w=720",
                        },
                        {
                            id: 2,
                            url:
                                "https://a0.muscache.com/im/pictures/e9ebee08-6956-40c2-a1bf-34350ea51b3b.jpg?im_w=720",
                        },
                    ],
                    address: {
                        country: "Greece",
                        state: "Athens",
                        city: "Panormou",
                        zipCode: 12345,
                        street: "Papantreou 10",
                        apartmentNumber: "B1",
                    },
                    space: {
                        beds: 1,
                        bedrooms: 1,
                        bathrooms: 1,
                        livingrooms: 1,
                        kitchen: true,
                        rooms: 4,
                        squareMeters: 100,
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
                    },
                    rules: {
                        pets: true,
                        smoking: true,
                        events: true,
                    },
                },
                {
                    id: 3,
                    title: "Cozy aparetment",
                    description:
                        "Sint nulla ex tempor voluptate quis nostrud. Aute ea ipsum ullamco ut do consectetur do. Laboris reprehenderit dolor Lorem quis. Pariatur consectetur enim ex veniam aliqua nulla cillum. Excepteur elit fugiat elit adipisicing cupidatat est consequat et. Culpa velit incididunt sunt id veniam deserunt irure Lorem deserunt fugiat ipsum Lorem. Cillum fugiat minim velit dolore est.",
                    cost: "10",
                    type: "Apartment",
                    rating: 5,
                    guests: 1,
                    pictures: [
                        {
                            id: 0,
                            url:
                                "https://a0.muscache.com/im/pictures/26f549d7-4a09-4faa-b1e4-71fcd1f3a611.jpg?im_w=720",
                        },
                        {
                            id: 1,
                            url:
                                "https://a0.muscache.com/im/pictures/af40aa25-8309-414d-b584-600ff0fb8393.jpg?im_w=720",
                        },
                        {
                            id: 2,
                            url:
                                "https://a0.muscache.com/im/pictures/e9ebee08-6956-40c2-a1bf-34350ea51b3b.jpg?im_w=720",
                        },
                    ],
                    address: {
                        country: "Greece",
                        state: "Athens",
                        city: "Panormou",
                        zipCode: 12345,
                        street: "Papantreou 10",
                        apartmentNumber: "B1",
                    },
                    space: {
                        beds: 1,
                        bedrooms: 1,
                        bathrooms: 1,
                        livingrooms: 1,
                        kitchen: true,
                        rooms: 4,
                        squareMeters: 100,
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
                    },
                    rules: {
                        pets: true,
                        smoking: true,
                        events: true,
                    },
                },
            ],
        };
    }

    render() {
        return (
            <main role="main">
                <div className="container pt-sm-2">
                    <div className="row">
                        <h1>&nbsp;&nbsp;Dashboard Host</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col">
                                    <Stats />
                                    <ListingsHost
                                        listings={this.state.listings}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col">
                                    <Messages />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const Stats = () => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <p className="card-text">
                    <h2>Stats</h2>
                    <span className="card-text pl-2"></span>
                </p>
                <Container></Container>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <p className="card-text">
                                <BiStar className="align-middle" size={24} />
                                <span className="card-text pl-2">
                                    4.3 Overall Rating
                                </span>
                            </p>
                        </div>
                        <div class="col-sm">
                            <span className="card-text pl-2">
                                10 Total reviews
                            </span>
                        </div>
                        <div class="col-sm">
                            <span className="card-text pl-2">
                                343.31$ Total earnings
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Messages = () => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <p className="card-text">
                    <h2>Messages</h2>
                </p>
            </div>
        </div>
    );
};

const ListingsHost = (props) => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <p className="card-text">
                    <div className="row mb-4 justify-content-between">
                        <div className="col-auto ">
                            <h2>Listings</h2>
                        </div>
                        <div className="col-auto ">
                            <button
                                type="button"
                                class="btn btn-lg  btn-outline-success"
                            >
                                <span>
                                    <BiPlusCircle
                                        className="align-middle"
                                        size={36}
                                    />
                                    <span className="align-middle ml-2">
                                        Add new listing
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <Listings listings={props.listings} />
                </p>
            </div>
        </div>
    );
};

export default HostDashboard;
