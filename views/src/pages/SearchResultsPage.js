import React, { Component } from "react";

import Listings from "../_components/Listings";
import Filters from "../_components/Filters";

// TODO: Receive arrays from API
const retrieveArray = (name) => {
    if (name === "amenities") {
        return ["Kitchens", "Heating", "Shampoo", "Air conditioning"];
    }

    if (name === "rules") {
        return ["Pets allowed", "Smoking allowed"];
    }

    if (name === "property-types") {
        return [
            "House",
            "Apartment",
            "Bed and Breakfast",
            "Hostel",
            "Hotel",
            "Villa",
        ];
    }
};

const AMENITIES = retrieveArray("amenities");
const RULES = retrieveArray("rules");
const PROPERTY_TYPES = retrieveArray("property-types");

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Listings for display
            listings: props.location.state.listings,

            // USER FILTERS
            filters: {
                minimumBookinDays: 0,
                // living space filters
                beds: 0,
                rooms: 0,
                bedrooms: 0,
                bathrooms: 0,
                livingrooms: 0,
                kitchens: 0,
                squareMeters: 0,
                // Initialize propertyTypes as object with (key / value) pairs
                // where key is the name of the propertyType, (camelCased with
                // first character lowercased), and value as boolean (true / false)
                // EXAMPLE:     bedAndBreakfast: false
                propertyTypes: PROPERTY_TYPES.reduce(
                    (propertyTypes, propertyType) => ({
                        ...propertyTypes,
                        [propertyType
                            // Capitalize first letter of each word
                            .replace(/\b\w/g, (c) => c.toUpperCase())
                            // Remove whitespace
                            .replace(/\s+/g, "")
                            // Lowercase the first letter of the string
                            .replace(/^\w/, (c) => c.toLowerCase())]: false,
                    }),
                    {}
                ),
                // Initialize amenities as object with (key / value) pairs
                // Same process as propertyTypes
                amenities: AMENITIES.reduce(
                    (amenities, amenity) => ({
                        ...amenities,
                        [amenity
                            // Capitalize first letter of each word
                            .replace(/\b\w/g, (c) => c.toUpperCase())
                            // Remove whitespace
                            .replace(/\s+/g, "")
                            // Lowercase the first letter of the string
                            .replace(/^\w/, (c) => c.toLowerCase())]: false,
                    }),
                    {}
                ),
                // Initialize rules as object with (key / value) pairs
                // Same process as propertyTypes and amenities
                rules: RULES.reduce(
                    (rules, rule) => ({
                        ...rules,
                        [rule
                            // Capitalize first letter of each word
                            .replace(/\b\w/g, (c) => c.toUpperCase())
                            // Remove whitespace
                            .replace(/\s+/g, "")
                            // Lowercase the first letter of the string
                            .replace(/^\w/, (c) => c.toLowerCase())]: false,
                    }),
                    {}
                ),
            },
        };
    }

    componentDidMount() {
        
    }

    render() {
        const listings = this.state.listings;

        return (
            <main role="main">
                <div className="container-md">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Filters */}
                            <Filters
                                filters={this.state.filters}
                                propertyTypes={PROPERTY_TYPES}
                                amenities={AMENITIES}
                                rules={RULES}
                                handleNumberInputChange={
                                    this.handleNumberInputChange
                                }
                                handleAmenitiesChange={
                                    this.handleAmenitiesChange
                                }
                                handlePropertyTypesChange={
                                    this.handlePropertyTypesChange
                                }
                                handleRulesChange={this.handleRulesChange}
                                handleFiltersChange={this.handleFiltersChange}
                            />
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mb-3">
                                Stays in {listings[0].address.state}
                            </h1>

                            {/* Listings */}
                            <Listings listings={listings} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    handleNumberInputChange = (change) => {
        // const { name, value } = change.target;

        // this.setState((prevState) => ({
        //     filters: {
        //         ...prevState.filters,
        //         [name]: value,
        //     },
        // }));
    };

    handleAmenitiesChange = (change) => {
        // const { name } = change.target;
        // this.setState((prevState) => ({
        //     filters: {
        //         ...prevState.filters,
        //         amenities: {
        //             ...prevState.filters.amenities,
        //             [name]: !prevState.filters.amenities[name],
        //         },
        //     },
        // }));
    };

    handlePropertyTypesChange = (change) => {
        // const { name } = change.target;

        // this.setState((prevState) => ({
        //     filters: {
        //         ...prevState.filters,
        //         propertyTypes: {
        //             ...prevState.filters.propertyTypes,
        //             [name]: !prevState.filters.propertyTypes[name],
        //         },
        //     },
        // }));
    };

    handleRulesChange = (change) => {
        const { name, checked } = change.target;

        // this.setState((prevState) => ({
        //     filters: {
        //         ...prevState.filters,
        //         rules: {
        //             ...prevState.filters.rules,
        //             [name]: !prevState.filters.rules[name],
        //         },
        //     },
        // }));
    };

    handleFiltersChange = (change) => {
        change.preventDefault();

        alert("Filters: " + JSON.stringify(this.state.filters, null, 4));
    };
}

export default SearchResultsPage;
