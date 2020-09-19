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
            beds: 0,
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

            number: 0,

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

    handleNumberInputChange = (change) => {
        const { name, value } = change.target;

        console.log("name: " + name + " value: " + value);

        this.setState((prevState) => ({
            [name]: value,
        }));
    };

    handleChecboxChange = (change) => {};

    render() {
        const listings = this.state.listings;

        return (
            <main role="main">
                <div className="container-md">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Filters */}
                            <Filters
                                beds={this.state.beds}
                                propertyTypes={this.state.propertyTypes}
                                amenities={this.state.amenities}
                                rules={this.state.rules}
                                handleNumberInputChange={
                                    this.handleNumberInputChange
                                }
                                handleChecboxChange={this.handleChecboxChange}
                                number={this.state.number}
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
    const { handleNumberInputChange, handleChecboxChange } = props;
    let { beds } = props;
    return (
        <form>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Filters</h4>

                    {/* Rooms and beds */}
                    <h5 className="card-text pb-1">Rooms and Beds</h5>

                    {/* Beds */}
                    <NumberFilter
                        filterName={"Beds"}
                        filterValue={beds}
                        handleNumberInputChange={handleNumberInputChange}
                    />
                    {/* Bedrooms */}
                    <NumberFilter
                        filterName={"Bedrooms"}
                        handleNumberInputChange={handleNumberInputChange}
                    />
                    {/* Bathrooms */}
                    <NumberFilter
                        filterName={"Bathrooms"}
                        handleNumberInputChange={handleNumberInputChange}
                    />

                    {/* Property type */}
                    <CheckboxFilter
                        title={"Property type"}
                        values={props.propertyTypes}
                        handleChecboxChange={handleChecboxChange}
                    />

                    {/* Amenities */}
                    <CheckboxFilter
                        title={"Amenities"}
                        values={props.amenities}
                        handleChecboxChange={handleChecboxChange}
                    />

                    {/* House rules */}
                    <CheckboxFilter
                        title={"House rules"}
                        values={props.rules}
                        handleChecboxChange={handleChecboxChange}
                    />
                </div>
            </div>
        </form>
    );
};

const NumberFilter = (props) => {
    const { filterName, handleNumberInputChange } = props;
    let { filterValue } = props;

    return (
        <div className="row mb-2">
            <div className="col pl-2 pt-2">
                <label htmlFor={filterName} className="">
                    {filterName}
                </label>
            </div>
            <div className="col-auto">
                <div className="d-inline-flex flex-row h-100 align-items-center ">
                    <div className=" align-self-middle">
                        <button
                            name={filterName}
                            value={filterValue === 0 ? 0 : filterValue--}
                            type="button"
                            className="btn p-0"
                            onClick={handleNumberInputChange}
                            disabled={filterValue > 0 ? false : true}
                        >
                            <BiMinus
                                className="border border-secondary text-muted rounded-circle"
                                size={24}
                            />
                        </button>
                    </div>
                    <div className="align-self-middle">
                        <p className="my-0 mx-3">{filterValue}</p>
                    </div>
                    <div className="align-self-middle">
                        <button
                            name={filterName}
                            value={filterValue++}
                            type="button"
                            className="btn p-0"
                            onClick={handleNumberInputChange}
                        >
                            <BiPlus
                                className="border border-secondary text-muted rounded-circle"
                                size={24}
                            />
                        </button>
                    </div>
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
