import React, { Component, useState } from "react";

import axios from "axios";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BiSearchAlt } from "react-icons/bi";

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
        };

        this.retrieveLocations = this.retrieveLocations.bind(this);
        this.updateViewForDesktop = this.updateViewForDesktop.bind(this);
    }

    componentDidMount() {
        // Retrieve available listings locations
        // this.retrieveLocations();

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
        // event.preventDefault();

        const query = {
            location: this.state.location,
            checkIn: this.state.checkInDate,
            checkout: this.state.checkOutDate,
            guests: this.state.guests,
        };

        // alert("Submited query with: " + JSON.stringify(query, null, 4));

        const dummyQuery = {
            listing_location: this.state.location.state,
            check_in: this.state.checkInDate,
            check_out: this.state.checkOutDate,
        };

        // Retrieve data with axios
        axios
            .post(`/listings/searc`, dummyQuery)
            .then((response) => {
                this.setState({ isLoaded: true, listings: response.data });
            })
            .catch((error) => {
                this.setState({ isLoaded: true, error: error });
            });

        alert("Received listings: " + this.state.listings);
        // Redirect with data as props
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
                                                <BiSearchAlt size={24} />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Seach block */}
                                    <div className="col-md d-md-none mt-3">
                                        <div className="card-text from group">
                                            <button
                                                className="btn btn-primary btn-block rounded-lg"
                                                type="submit"
                                            >
                                                <BiSearchAlt /> Search
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
                                                <BiSearchAlt /> Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default SearchBar;
