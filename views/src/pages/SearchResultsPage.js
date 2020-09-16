import React, { Component } from "react";

import { BiPlus, BiMinus } from "react-icons/bi";

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Filters set by user
            filters: {
                beds: 0,
                bedrooms: 0,
                bathrooms: 0,
                propertyTypes: [],
                amenities: [],
                rules: [],
            },

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
            amenities: ["Kitchen", "Heating", "Shampoo", "Air vonditioning"],
            rules: ["Pets allowed", "Smoking allowed"],
        };
    }

    // TODO: Write functions to retrieve all property types from api
    // TODO: Write functions to retrieve all amenities from api
    // TODO: Write functions to retrieve all rules from api

    render() {
        const listings = this.state.listings;

        return (
            <main role="main">
                <div className="container-md">
                    <div className="row">
                        <div className="col-md-4">
                            {/* Filters */}
                            <Filters
                                propertyTypes={this.state.propertyTypes}
                                amenities={this.state.amenities}
                                rules={this.state.rules}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h1>Stays in {listings[0].location}</h1>
                                    <p>
                                        Ex ea sunt pariatur eiusmod occaecat
                                        exercitation adipisicing excepteur
                                        eiusmod ullamco proident esse. Proident
                                        officia ipsum ipsum sunt eu exercitation
                                        aliqua. Velit nostrud occaecat et duis
                                        occaecat pariatur eiusmod aliqua anim
                                        deserunt. Proident ipsum Lorem minim
                                        qui. Duis excepteur nostrud dolore nisi
                                        aliquip commodo laboris ullamco. Anim
                                        eiusmod reprehenderit commodo est.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const Filters = (props) => {
    return (
        <form>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Filters</h4>

                    {/* Rooms and beds */}
                    <RoomsAndBedsFilter />

                    {/* Property type */}
                    <GenericFilter
                        title={"Property type"}
                        values={props.propertyTypes}
                    />

                    {/* Amenities */}
                    <GenericFilter
                        title={"Amenities"}
                        values={props.amenities}
                    />

                    {/* House rules */}
                    <GenericFilter title={"House rules"} values={props.rules} />
                </div>
            </div>
        </form>
    );
};

const RoomsAndBedsFilter = (props) => {
    return (
        <div className="pb-4">
            <h5 className="card-text pb-1">Rooms and Beds</h5>
            {/* Beds */}
            <NumberInput inputName={"Beds"} />
            {/* Bedrooms */}
            <NumberInput inputName={"Bedrooms"} />
            {/* Bathrooms */}
            <NumberInput inputName={"Bathrooms"} />
        </div>
    );
};

const NumberInput = (props) => {
    const { inputName } = props;
    return (
        <div className="form-group row">
            <div className="col-md red-border">a</div>
            <div className="col-md blue-border">b</div>
            {/* <label htmlFor="inputEmail3" className="col-auto col-form-label blue-border">
                {inputName}
            </label>
            <div className="col-md red-border">
                <div
                    className="btn-group btn-group-sm yellow-border"
                    role="group"
                    aria-label=""
                >
                    <button
                        type="button"
                        className="btn btn-outline-secondary rounded-lg"
                    >
                        <BiMinus className="" />
                    </button>
                    <p className="">0</p>
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm rounded-lg"
                    >
                        <BiPlus />
                    </button>
                </div>
            </div> */}
        </div>
    );
};

const GenericFilter = (props) => {
    const { title, values } = props;

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
                        <FilterValue
                            valueName={value}
                            key={values.indexOf(value)}
                        />
                    ))}
                </div>
                <div className="col-md">
                    {secondSection.map((value) => (
                        <FilterValue
                            valueName={value}
                            key={values.indexOf(value)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FilterValue = (props) => {
    const { valueName } = props;

    return (
        <div className="custom-control custom-checkbox pb-2">
            <input
                type="checkbox"
                className="custom-control-input"
                name={valueName}
                value={true}
                id={valueName}
            />
            <label className="custom-control-label" htmlFor={valueName}>
                {valueName}
            </label>
        </div>
    );
};

export default SearchResultsPage;
