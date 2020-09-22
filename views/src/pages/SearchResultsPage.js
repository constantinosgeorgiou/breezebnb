import React, { Component } from "react";

import Listings from "../_components/Listings";
import Filters from "../_components/Filters";

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // USER FILTERS
            filters: {
                beds: 0,
                rooms: 0,
                bedrooms: 0,
                bathrooms: 0,
                livingrooms: 0,
                kitchens: 0,
                propertyTypes: {},
                amenities: {},
                rules: {},
            },
            // listing filter
            minimumBookinDays: 0,

            // space filters
            filterSquareMeters: 0,

            // Listings for display
            listings: props.location.state.listings,

            // Used for diplaying checkbox filters
            propertyTypes: [],
            amenities: [],
            rules: [],
        };
    }

    componentDidMount() {
        this.fetchAndSetAmenities();
        this.fetchAndSetPropertyTypes();
        this.fetchAndSetRules();

        this.initializeAmenitiesFilter();
        this.initializePropertyTypesFilter();
        this.initializeRulesFilter();
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
                                propertyTypes={this.state.propertyTypes}
                                amenities={this.state.amenities}
                                rules={this.state.rules}
                                handleNumberInputChange={
                                    this.handleNumberInputChange
                                }
                                handleChecboxChange={this.handleChecboxChange}
                                handleFiltersChange={this.handleFiltersChange}
                            />
                        </div>
                        <div className="col-lg-8">
                            {/* Listings */}
                            <Listings listings={listings} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // Fetch amenities and then save them into state
    fetchAndSetAmenities = () => {
        // TODO: Actually fetch data
        const fetchedAmenities = [
            "Kitchen",
            "Heating",
            "Shampoo",
            "Air conditioning",
        ];

        this.setState((prevState) => ({
            amenities: fetchedAmenities,
        }));
    };

    // Fetch property types and then save them into state
    fetchAndSetPropertyTypes = () => {
        // TODO: Actually fetch data
        const fetchedPropertyTypes = [
            "House",
            "Apartment",
            "Bed and Breakfast",
            "Hostel",
            "Hotel",
            "Villa",
            "7th",
        ];

        this.setState((prevState) => ({
            propertyTypes: fetchedPropertyTypes,
        }));
    };

    // Fetch house rules and then save them into state
    fetchAndSetRules = () => {
        // TODO: Actually fetch data
        const fetchedRules = ["Pets allowed", "Smoking allowed"];

        this.setState((prevState) => ({
            rules: fetchedRules,
        }));
    };

    initializeAmenitiesFilter = () => {
        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                amenities: prevState.amenities.reduce(
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
            },
        }));
    };

    initializePropertyTypesFilter = () => {
        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                propertyTypes: prevState.propertyTypes.reduce(
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
            },
        }));
    };

    initializeRulesFilter = () => {
        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                rules: prevState.rules.reduce(
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
        }));
    };

    handleNumberInputChange = (change) => {
        const { name, value } = change.target;

        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                [name]: value,
            },
        }));
    };

    handleChecboxChange = (change) => {};

    handleFiltersChange = (change) => {
        change.preventDefault();

        alert("Filters: " + JSON.stringify(this.state, null, 4));
    };
}

export default SearchResultsPage;
