import React, { Component } from "react";
import { Link } from "react-router-dom";

import { BiPlus, BiMinus, BiStar } from "react-icons/bi";

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // USER FILTERS
            // listing filter
            minimumBookinDays: 0,
            // space filters
            filterBeds: 0,
            filterBedrooms: 0,
            filterBathrooms: 0,
            filterLivingRooms: 0,
            filterKitchen: false,
            filterRooms: 0,
            filterSquareMeters: 0,
            // amenities
            filterAmenities: [],
            // property types
            filterPropertyTypes: [],
            // rules
            filterRules: [],

            // Listings for display
            listings: props.location.state.listings,

            propertyTypes: [
                "House",
                "Apartment",
                "Bed and Breakfast",
                "Hostel",
                "Hotel",
                "Villa",
                "7th",
            ],
            amenities: ["Kitchen", "Heating", "Shampoo", "Air conditioning"],
            rules: ["Pets allowed", "Smoking allowed"],
        };
    }

    // TODO: Write functions to retrieve all property types from api
    // TODO: Write functions to retrieve all amenities from api
    // TODO: Write functions to retrieve all rules from api

    handleClick = (event) => {
        const { name, value } = event.target;

        // let a = this.state.arr.slice(); //creates the clone of the state
        // a[index] = "random element";
        // this.setState({arr: a});

        const currentState = { ...this.state };
        console.log("name: " + name + ", value: " + value);
        console.log("currentState: " + JSON.stringify(currentState));
        if (Array.isArray(currentState[name])) {
            alert("array");
        } else {
            alert("not array");
        }
    };
    render() {
        const listings = this.state.listings;

        return (
            <main role="main">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-4">
                            {/* Filters */}
                            <Filters
                                propertyTypes={this.state.propertyTypes}
                                amenities={this.state.amenities}
                                rules={this.state.rules}
                                handleClick={this.handleClick}
                            />
                        </div>
                        <div className="col-md-8">
                            {/* Listings */}
                            <Listings listings={listings} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const Listings = (props) => {
    const { listings } = props;
    const listListings = listings.map((listing) =>
        // Is current listing the last one? Do not display <hr /> else display <hr />
        listing === listings[listings.length - 1] ? (
            <>
                <Listing key={listing.id} listing={listing} />
                <hr className="d-none" />
            </>
        ) : (
            <>
                <Listing key={listing.id} listing={listing} />

                <hr className="my-4" />
            </>
        )
    );

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="mb-5">Stays in {listings[0].location}</h1>
                {listListings}
            </div>
        </div>
    );
};

const Listing = (props) => {
    const { listing } = props;
    return (
        <div className="card rounded-lg border-0">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <Link
                        to={`/listings/${listing.id}`}
                        className="stretched-link text-reset"
                    >
                        <img
                            src={listing.pictures[0].url}
                            alt=""
                            className=" card-img"
                        />
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/listings/${listing.id}`}
                            className="stretched-link text-reset"
                            onHover
                        >
                            <div className="row">
                                <div className="col">
                                    <p className="card-text mb-0">
                                        <small>
                                            {listing.type} in{" "}
                                            {listing.address.state}
                                        </small>
                                    </p>
                                    <h5 className="card-title mb-0">
                                        {listing.title}
                                    </h5>
                                    <p className="card-text mb-0">
                                        <small>
                                            {listing.guests} guest
                                            {listing.guests === 1
                                                ? ""
                                                : "s"} · {listing.space.beds}{" "}
                                            bed
                                            {listing.space.beds === 1
                                                ? ""
                                                : "s"}{" "}
                                            · {listing.space.bathrooms} bathroom
                                            {listing.space.bathrooms === 1
                                                ? ""
                                                : "s"}
                                        </small>
                                    </p>
                                    <p className="card-text">
                                        <small>
                                            {listing.amenities.airConditioning
                                                ? "Air conditioning"
                                                : ""}{" "}
                                            ·{" "}
                                            {listing.amenities.wifi
                                                ? "Wifi"
                                                : ""}{" "}
                                            ·{" "}
                                            {listing.amenities.breakfast
                                                ? "Breakfast"
                                                : ""}
                                        </small>
                                    </p>
                                </div>
                                <div className="col-auto">
                                    <p className="card-text">
                                        <span className="align-middle">
                                            <BiStar
                                                className="text-primary align-middle"
                                                size={24}
                                            />{" "}
                                            <span className="h5 align-middle">
                                                {listing.rating}
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Filters = (props) => {
    const { handleClick } = props;
    return (
        <form>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Filters</h4>

                    {/* Rooms and beds */}
                    <RoomsAndBedsFilter handleClick={handleClick} />

                    {/* Property type */}
                    <CheckboxFilter
                        title={"Property type"}
                        values={props.propertyTypes}
                        handleClick={handleClick}
                    />

                    {/* Amenities */}
                    <CheckboxFilter
                        title={"Amenities"}
                        values={props.amenities}
                        handleClick={handleClick}
                    />

                    {/* House rules */}
                    <CheckboxFilter
                        title={"House rules"}
                        values={props.rules}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </form>
    );
};

const RoomsAndBedsFilter = (props) => {
    const { handleClick } = props;

    return (
        <div className="pb-4">
            <h5 className="card-text pb-1">Rooms and Beds</h5>
            {/* Beds */}
            <NumberFilter filterName={"Beds"} handleClick={handleClick} />
            {/* Bedrooms */}
            <NumberFilter filterName={"Bedrooms"} handleClick={handleClick} />
            {/* Bathrooms */}
            <NumberFilter filterName={"Bathrooms"} handleClick={handleClick} />
        </div>
    );
};

const NumberFilter = (props) => {
    const { filterName, handleClick } = props;
    return (
        <div className="row">
            <div className="col pl-2 pt-2 red-border">
                <label htmlFor={filterName} className="blue-border">
                    {filterName}
                </label>
            </div>
            <div className="col-auto blue-border">
                <div className="row pt-2">
                    {/* <div className="col-auto yellow-border"> */}
                    <button
                        className="col-auto btn yellow-border"
                        type="button"
                        onClick={handleClick}
                    >
                        <BiMinus />
                    </button>
                    {/* </div> */}
                    <p className="col-auto red-border">b</p>
                    <button
                        className="col-auto btn green-border"
                        type="button"
                        onClick={handleClick}
                    >
                        <BiPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

const CheckboxFilter = (props) => {
    const { title, values, handleClick } = props;

    // Find middle position of values array
    const middlePosition = Math.floor((values.length - 1) / 2) + 1; // Biased torwards firstSection

    // Find last position of array propertyTypes
    const lastPosition = values.length;

    // Make split copies of values array
    // fistSection starts at the beginning of values and ends at its middle position
    // secondSection starts at the middle position of values and ends at its end position
    const firstSection = values.slice(0, middlePosition);
    const secondSection = values.slice(middlePosition, lastPosition);

    return (
        <div className="pb-4">
            <h5 className="card-text pb-1">{title}</h5>
            <div className="form-row">
                <div className="col-md">
                    {firstSection.map((value) => (
                        // TODO: add name, value (for input) and label (for label)
                        <Checkbox
                            valueName={title + "." + value}
                            key={values.indexOf(value)}
                            handleClick={handleClick}
                        />
                    ))}
                </div>
                <div className="col-md">
                    {secondSection.map((value) => (
                        <Checkbox
                            valueName={value}
                            key={values.indexOf(value)}
                            handleClick={handleClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Checkbox = (props) => {
    const { valueName, handleClick } = props;

    return (
        <div className="custom-control custom-checkbox pb-2">
            <input
                type="checkbox"
                className="custom-control-input"
                name={valueName}
                value={Boolean}
                id={valueName}
                onClick={handleClick}
            />
            <label className="custom-control-label" htmlFor={valueName}>
                {valueName}
            </label>
        </div>
    );
};

export default SearchResultsPage;
