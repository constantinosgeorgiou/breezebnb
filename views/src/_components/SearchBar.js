import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import axios from "axios";

import { searchListings ,getLocations} from "../_services/listings";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { BiSearch } from "react-icons/bi";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Query information
            location: {},
            checkInDate: new Date(),
            checkOutDate: new Date(),
            guests: 0,

            // Query results
            listings: [],

            // Used with axios
            error: null,
            isLoaded: false,

            isDesktop: false, // Used to render different views

            // Option for typeahead
            // options: [],
            options: [
                { id: 0, country: "Anywhere", state: "", city: "" },
                { id: 1, country: "Greece", state: "Athens", city: "Zografou" },
                { id: 2, country: "Greece", state: "Athens", city: "Kolonaki" },
                {
                    id: 3,
                    country: "Greece",
                    state: "Thessaloniki",
                    city: "Kentro",
                },
                { id: 4, country: "Cyprus", state: "Nicosia", city: "Dali" },
                { id: 5, country: "Cyprus", state: "Limassol", city: "Azgata" },
            ],
            //use this function to get opioions dynamicaly
          //  test:getLocations(),
        };

        this.retrieveLocations = this.retrieveLocations.bind(this);
        this.updateViewForDesktop = this.updateViewForDesktop.bind(this);
    }

    componentDidMount() {
        // Create parameters object
        // const parameters = {
        //     this.state.
        // }
        // Retrieve available listings locations
        // this.searchLocations(parameters);
        
        // Update view
        this.updateViewForDesktop();
        window.addEventListener("resize", this.updateViewForDesktop);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateViewForDesktop);
    }

    // Retrieve Locations
    retrieveLocations() {
        axios
            .get(`/listings-locations`)
            .then((response) => {
                this.setState({ options: response });
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    }

    updateViewForDesktop() {
        this.setState({ isDesktop: window.innerWidth >= 768 });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {

        const parameters = {
            checkIn: this.state.checkInDate,
            checkout: this.state.checkOutDate,
            country:this.state.location.country,
            state: this.state.location.state,
            city: this.state.location.city,
        }

        // check_in, check_out, country, state, city
           // check_in: parameters.<Insert here>
            // check_out: <insert here>
            // country: <insert here>
            // state: <insert here>
            // city: <insert here>
        //Retrieve available listings locations
        searchListings(parameters);



        // event.preventDefault();
        // const url = "/results";

        // const query = {
        //     location: this.state.location,
        //     checkIn: this.state.checkInDate,
        //     checkout: this.state.checkOutDate,
        //     guests: this.state.guests,
        // };

        // const dummyQuery = {
        //     listing_location: this.state.location.state,
        //     check_in: this.state.checkInDate,
        //     check_out: this.state.checkOutDate,
        // };

        // Retrieve data with axios
        // axios
        //     .post(url, dummyQuery)
        //     .then((response) => {
        //         this.setState({ isLoaded: true, listings: response.data });
        //     })
        //     .catch((error) => {
        //         this.setState({ isLoaded: true, error: error });
        //     });

        // alert("Received listings: " + this.state.listings);
        this.setState({
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
        });
    };

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div className="container-sm">
                {isDesktop ? (
                    <div className="card rounded-pill">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-body">
                                {/* Pill search. Displayed until md viewport */}
                                <div className="row pl-2 align-items-center">
                                    {/* Location */}
                                    <div className="col-md">
                                        <div className="card-text form-group">
                                            <label
                                                className="mb-1"
                                                htmlFor="locationTypeheadInput"
                                            >
                                                <small>Location</small>
                                            </label>
                                            <Typeahead
                                                className=""
                                                id="locationTypeaheadInput"
                                                options={this.state.options}
                                                onChange={(selected) => {
                                                    this.setState({
                                                        location: selected[0],
                                                    });
                                                }}
                                                labelKey={(option) => {
                                                    if (
                                                        option.country ===
                                                        "Anywhere"
                                                    ) {
                                                        return `${option.country}`;
                                                    } else {
                                                        return `${option.city}, ${option.state}, ${option.country}`;
                                                    }
                                                }}
                                                placeholder="Anywhere"
                                                emptyLabel="No matches found for given location."
                                                highlightOnlyResult={true}
                                                caseSensitive // Filtering ignores case
                                                ignoreDiacritics // Filtering ignores accents and diacritical marks
                                            />
                                        </div>
                                    </div>

                                    {/* Check in */}
                                    <div className="col-md">
                                        <div className="card-text form-group">
                                            <label
                                                className="mb-1"
                                                htmlFor="checkInDateInput"
                                            >
                                                <small>Check in</small>
                                            </label>
                                            <input
                                                id="checkInDateInput"
                                                type="date"
                                                name="checkInDate"
                                                className="form-control"
                                                value={this.checkInDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Check out */}
                                    <div className=" col-md">
                                        <div className="card-text form-group">
                                            <label
                                                className="mb-1"
                                                htmlFor="checkOutDateInput"
                                            >
                                                <small>Check out</small>
                                            </label>
                                            <input
                                                id="checkOutDateInput"
                                                type="date"
                                                name="checkOutDate"
                                                className="form-control"
                                                value={this.checkOutDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div className="col-md">
                                        <div className="card-text form-group">
                                            <label
                                                className="mb-1"
                                                htmlFor="guestsInput"
                                            >
                                                <small>Guests</small>
                                            </label>
                                            <input
                                                id="guestsInput"
                                                type="number"
                                                name="guests"
                                                className="form-control"
                                                value={this.guests}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Search circle */}
                                    <div className="col-auto d-none d-md-block">
                                        <div className="card-text from group">
                                            <button
                                                className="btn btn-primary p-2 rounded-circle"
                                                type="submit"
                                            >
                                                <BiSearch size={24} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="card rounded-lg">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-body">
                                {/* Form search. Displayed below md viewport */}
                                <div className="row pl-2 align-items-center">
                                    {/* Location */}
                                    <div className="col-md mb-2">
                                        <div className="card-text form-group">
                                            <label htmlFor="locationTypeheadInput">
                                                <small>Location</small>
                                            </label>
                                            <Typeahead
                                                className=""
                                                id="locationTypeaheadInput"
                                                options={this.state.options}
                                                onChange={(selected) => {
                                                    this.setState({
                                                        location: selected,
                                                    });
                                                }}
                                                labelKey={(option) => {
                                                    if (
                                                        option.country ===
                                                        "Anywhere"
                                                    ) {
                                                        return `${option.country}`;
                                                    } else {
                                                        return `${option.city}, ${option.state}, ${option.country}`;
                                                    }
                                                }}
                                                placeholder="Anywhere"
                                                emptyLabel="No matches found for given location."
                                                highlightOnlyResult={true}
                                                caseSensitive // Filtering ignores case
                                                ignoreDiacritics // Filtering ignores accents and diacritical marks
                                            />
                                        </div>
                                    </div>

                                    {/* Check in */}
                                    <div className="col-md mb-2">
                                        <div className="card-text form-group">
                                            <label htmlFor="checkInDateInput">
                                                <small>Check in</small>
                                            </label>
                                            <input
                                                id="checkInDateInput"
                                                type="date"
                                                name="checkInDate"
                                                className="form-control"
                                                value={this.checkInDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Check out */}
                                    <div className=" col-md mb-2">
                                        <div className="card-text form-group">
                                            <label htmlFor="checkOutDateInput">
                                                <small>Check out</small>
                                            </label>
                                            <input
                                                id="checkOutDateInput"
                                                type="date"
                                                name="checkOutDate"
                                                className="form-control"
                                                value={this.checkOutDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div className="col-md mb-4">
                                        <div className="card-text form-group">
                                            <label htmlFor="guestsInput">
                                                <small>Guests</small>
                                            </label>
                                            <input
                                                id="guestsInput"
                                                type="number"
                                                name="guests"
                                                className="form-control"
                                                value={this.guests}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Seach block */}
                                    <div className="col-md mt-2">
                                        <div className="card-text from group">
                                            <button
                                                className="btn btn-primary btn-block rounded-pill"
                                                type="submit"
                                            >
                                                <BiSearch /> Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {this.state.listings.length > 0 && (
                    <Redirect
                        to={{
                            pathname: "/results",
                            state: { listings: this.state.listings },
                        }}
                    />
                )}
            </div>
        );
    }
}

export default SearchBar;
