import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import axios from "axios";

import {
    searchListings,
    getLocations,
} from "../_services/listings";

import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { BiSearch } from "react-icons/bi";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,

            // Query information
            location: {},
            checkInDate: new Date(),
            checkOutDate: new Date(),
            guests: 0,

            // Query results
            listings: [],

            // Used with axios
            error: null,
            isLoading: false,

            isDesktop: false, // Used to render different views

            // Options
            locations: [],
            // locations: [
            //     {
            //         id: 0,
            //         country: "Anywhere",
            //         state: "",
            //         city: "",
            //     },
            //     {
            //         id: 1,
            //         country: "Greece",
            //         state: "Athens",
            //         city: "Zografou",
            //     },
            //     {
            //         id: 2,
            //         country: "Greece",
            //         state: "Athens",
            //         city: "Kolonaki",
            //     },
            //     {
            //         id: 3,
            //         country: "Greece",
            //         state: "Thessaloniki",
            //         city: "Kentro",
            //     },
            //     {
            //         id: 4,
            //         country: "Cyprus",
            //         state: "Nicosia",
            //         city: "Dali",
            //     },
            //     {
            //         id: 5,
            //         country: "Cyprus",
            //         state: "Limassol",
            //         city: "Azgata",
            //     },
            // ],
            //use this function to get opioions dynamicaly
        };

        this.updateViewForDesktop = this.updateViewForDesktop.bind(
            this
        );
    }

    componentDidMount() {
        getLocations()
            .then(({ data }) => {
                // const { locations } = data;

                this.setState((prevState) => ({
                    isLoading: false,
                    locations: data.locations,
                }));
            })
            .catch((error) => {
                this.setState((prevState) => ({
                    isLoading: false,
                    error,
                }));
            });

        // Update view
        this.updateViewForDesktop();
        window.addEventListener(
            "resize",
            this.updateViewForDesktop
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "resize",
            this.updateViewForDesktop
        );
    }

    updateViewForDesktop() {
        this.setState({
            isDesktop: window.innerWidth >= 768,
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {
            location,
            checkInDate,
            checkOutDate,
        } = this.state;

        let wrongFormatCheckIn = checkInDate.split(
            "-"
        );

        let wrongFormatCheckOut = checkOutDate.split(
            "-"
        );

        let parsedLocation = JSON.parse(
            this.state.location
        );

        let checkIn = [
            wrongFormatCheckIn[2],
            wrongFormatCheckIn[1],
            wrongFormatCheckIn[0],
        ].join("/");

        let checkout = [
            wrongFormatCheckOut[2],
            wrongFormatCheckOut[1],
            wrongFormatCheckOut[0],
        ].join("/");

        const parameters = {
            checkIn: checkIn,
            checkout: checkout,
            country: parsedLocation.country,
            state: parsedLocation.state,
            city: parsedLocation.city,
        };

        //Retrieve available listings locations
        searchListings(parameters)
            .then((response) => {
                console.log(
                    "response: " +
                        JSON.stringify(
                            response.data
                                .listings,
                            null,
                            4
                        )
                );

                this.setState((prevState) => ({
                    listings:
                        response.data.listings,
                }));
            })
            .catch((error) => {
                console.log(
                    "Error while searching: " +
                        error
                );
            });
    };

    render() {
        const {
            isDesktop,
            error,
            isLoading,
            options,
        } = this.state;
        if (error) {
            //  TODO: Beautify message
            return (
                <div>Error: {error.message}</div>
            );
        } else {
            //  if (isLoading) {
            //     // TODO: Add spinner
            //     return <div>Loading...</div>;
            // } else {

            console.log("state: ", this.state);

            return (
                <div className="container-sm">
                    {isDesktop ? (
                        <div className="card rounded-pill">
                            <form
                                onSubmit={
                                    this
                                        .handleSubmit
                                }
                            >
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
                                                    <small>
                                                        Location
                                                    </small>
                                                </label>
                                                {/* location */}
                                                <select
                                                    id="inputLocation"
                                                    className="form-control"
                                                    name="location"
                                                    value={
                                                        this
                                                            .state
                                                            .location
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
                                                >
                                                    {this.state.locations.map(
                                                        (
                                                            location
                                                        ) => (
                                                            <option
                                                                key={
                                                                    location.id
                                                                }
                                                                value={JSON.stringify(
                                                                    location
                                                                )}
                                                            >
                                                                {
                                                                    location.city
                                                                }

                                                                ,{" "}
                                                                {
                                                                    location.state
                                                                }

                                                                ,{" "}
                                                                {
                                                                    location.country
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Check in */}
                                        <div className="col-md">
                                            <div className="card-text form-group">
                                                <label
                                                    className="mb-1"
                                                    htmlFor="checkInDateInput"
                                                >
                                                    <small>
                                                        Check
                                                        in
                                                    </small>
                                                </label>
                                                <input
                                                    id="checkInDateInput"
                                                    type="date"
                                                    name="checkInDate"
                                                    className="form-control"
                                                    value={
                                                        this
                                                            .checkInDate
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
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
                                                    <small>
                                                        Check
                                                        out
                                                    </small>
                                                </label>
                                                <input
                                                    id="checkOutDateInput"
                                                    type="date"
                                                    name="checkOutDate"
                                                    className="form-control"
                                                    value={
                                                        this
                                                            .checkOutDate
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
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
                                                    <small>
                                                        Guests
                                                    </small>
                                                </label>
                                                <input
                                                    id="guestsInput"
                                                    type="number"
                                                    name="guests"
                                                    className="form-control"
                                                    value={
                                                        this
                                                            .guests
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
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
                                                    <BiSearch
                                                        size={
                                                            24
                                                        }
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="card rounded-lg">
                            <form
                                onSubmit={
                                    this
                                        .handleSubmit
                                }
                            >
                                <div className="card-body">
                                    {/* Form search. Displayed below md viewport */}
                                    <div className="row pl-2 align-items-center">
                                        {/* Location */}
                                        <div className="col-md mb-2">
                                            <div className="card-text form-group">
                                                <label htmlFor="inputLocation">
                                                    <small>
                                                        Location
                                                    </small>
                                                </label>
                                                {/* location */}
                                                <select
                                                    id="inputLocation"
                                                    className="form-control"
                                                    name="location"
                                                    value={
                                                        this
                                                            .state
                                                            .location
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
                                                >
                                                    {this.state.locations.map(
                                                        (
                                                            location
                                                        ) => (
                                                            <option
                                                                key={
                                                                    location.id
                                                                }
                                                                value={JSON.stringify(
                                                                    location
                                                                )}
                                                            >
                                                                {
                                                                    location.city
                                                                }

                                                                ,{" "}
                                                                {
                                                                    location.state
                                                                }

                                                                ,{" "}
                                                                {
                                                                    location.country
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Check in */}
                                        <div className="col-md mb-2">
                                            <div className="card-text form-group">
                                                <label htmlFor="checkInDateInput">
                                                    <small>
                                                        Check
                                                        in
                                                    </small>
                                                </label>
                                                <input
                                                    id="checkInDateInput"
                                                    type="date"
                                                    name="checkInDate"
                                                    className="form-control"
                                                    value={
                                                        this
                                                            .checkInDate
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {/* Check out */}
                                        <div className=" col-md mb-2">
                                            <div className="card-text form-group">
                                                <label htmlFor="checkOutDateInput">
                                                    <small>
                                                        Check
                                                        out
                                                    </small>
                                                </label>
                                                <input
                                                    id="checkOutDateInput"
                                                    type="date"
                                                    name="checkOutDate"
                                                    className="form-control"
                                                    value={
                                                        this
                                                            .checkOutDate
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {/* Guests */}
                                        <div className="col-md mb-4">
                                            <div className="card-text form-group">
                                                <label htmlFor="guestsInput">
                                                    <small>
                                                        Guests
                                                    </small>
                                                </label>
                                                <input
                                                    id="guestsInput"
                                                    type="number"
                                                    name="guests"
                                                    className="form-control"
                                                    value={
                                                        this
                                                            .guests
                                                    }
                                                    onChange={
                                                        this
                                                            .handleChange
                                                    }
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
                                                    <BiSearch />{" "}
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                    {this.state.listings.length >
                        0 && (
                        <Redirect
                            to={{
                                pathname:
                                    "/results",
                                state: {
                                    listings: this
                                        .state
                                        .listings,
                                },
                            }}
                        />
                    )}
                </div>
            );
        }
    }
}

export default SearchBar;
