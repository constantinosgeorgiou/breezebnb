import React, { Component } from "react";
import { BiStar } from "react-icons/bi";
import Listings from "../_components/Listings";
import AddNewListing from "../_components/AddNewListing";

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
                        kitchens: true,
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
                        kitchens: true,
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
                        kitchens: true,
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
                    <h1>Dashboard Host</h1>
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
                <h2 className="card-text">Stats</h2>
                <div className="row">
                    <div className="col-sm">
                        <p className="card-text">
                            <BiStar className="align-middle mr-1" size={24} />
                            <span className="card-text">
                                4.3 Overall Rating
                            </span>
                        </p>
                    </div>
                    <div className="col-sm">
                        <span className="card-text">10 Total reviews</span>
                    </div>
                    <div className="col-sm">
                        <span className="card-text">
                            343.31$ Total earnings
                        </span>
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
                <h2 className="card-text">Messages</h2>
            </div>
        </div>
    );
};

class ListingsHost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    setIsOpen = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        return (
            <div className="card my-4">
                <div className="card-body">
                    <div className="card-text">
                        <div className="row mb-4 justify-content-between">
                            <div className="col-auto ">
                                <h2>Listings</h2>
                            </div>
                            <div className="col-auto ">
                                <button
                                    type="button"
                                    className="btn btn-lg  btn-outline-success"
                                    onClick={this.setIsOpen}
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
                                <AddNewListing
                                    show={this.state.isOpen}
                                    onHide={this.setIsOpen}
                                />
                            </div>
                        </div>
                        <Listings listings={this.props.listings} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HostDashboard;
