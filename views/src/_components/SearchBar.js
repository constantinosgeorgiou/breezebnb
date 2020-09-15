import React, { Component } from "react";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BiSearchAlt } from "react-icons/bi";

class SearchBar extends Component {
    state = {
        location: "",
        checkInDate: new Date(),
        checkOutDate: new Date(),

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

    handleChange = (dates) => {
        const [start, end] = dates;
        this.setState({
            checkInDate: start,
            checkOutDate: end,
        });
    };

    render() {
        return (
            <div>
                <div className="card rounded-pill">
                    <div className="card-body">
                        <form>
                            <div className="row">
                                {/* Location */}
                                <div className="card-text form-group col red-border">
                                    <label htmlFor="locationTypeheadInput">
                                        Location
                                    </label>
                                    <Typeahead
                                        className="rounded-pill"
                                        id="locationTypeaheadInput"
                                        options={this.state.options}
                                        onChange={(selected) => {
                                            this.setState({
                                                location: selected,
                                            });
                                        }}
                                        labelKey={(option) => {
                                            if (option.country === "Anywhere") {
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

                                {/* Check in / Check out */}
                                <div className="card-text form-group col blue-border">
                                    <label htmlFor="checkInInput">Check in</label>
                                    <DatePicker
                                        // id="checkInInput"
                                        selected={this.state.checkInDate}
                                        closeOnScroll={true}
                                        // Used for selecting range of dates
                                        onChange={this.handleChange}
                                        startDate={this.state.checkInDate}
                                        endDate={this.state.checkOutDate}
                                        selectsRange
                                        inline
                                        // Disable pass dates
                                        minDate={new Date()}
                                        showDisabledMonthNavigation
                                    />
                                </div>

                                {/* Guests */}
                                <div className="card-text form-group col green-border">
                                    <label htmlFor="guestsInput">Guests</label>
                                </div>

                                {/* Search */}
                                <div className="card-text from group col-auto yellow-border">
                                    <button
                                        className="btn btn-primary float-right rounded"
                                        type="submit"
                                    >
                                        <BiSearchAlt />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
