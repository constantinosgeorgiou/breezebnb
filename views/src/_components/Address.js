import React, { Fragment } from "react";

const Address = () => {
    return (
        <Fragment>
            {/* Country */}
            <div className="form-group">
                <label htmlFor="inputCountry">Country</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputCountry"
                    placeholder="Greece"
                    name="country"
                    // value={props.country}
                    // onChange={props.handleChange}
                />
            </div>

            {/* State */}
            <div className="form-group">
                <label htmlFor="inputState">State</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputState"
                    placeholder="Attiki"
                    name="state"
                    // value={props.state}
                    // onChange={props.handleChange}
                />
            </div>

            {/* City */}
            <div className="form-group">
                <label htmlFor="inputCity">City</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="Athens"
                    name="city"
                    // value={props.city}
                    // onChange={props.handleChange}
                />
            </div>

            {/* Zipcode */}
            <div className="form-group">
                <label htmlFor="inputZipCode">Zip code</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputZipCode"
                    placeholder="12345"
                    name="zipCode"
                    // value={props.zipCode}
                    // onChange={props.handleChange}
                />
            </div>

            {/* Street Address */}
            <div className="form-group">
                <label htmlFor="inputAddress">Street Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    name="streetAddress"
                    // value={props.streetAddress}
                    // onChange={props.handleChange}
                />
            </div>

            {/* Apartment Number */}
            <div className="form-group">
                <label htmlFor="inputApartmentNumber">Apartment number</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputApartmentNumber"
                    placeholder="1234 Main St"
                    name="apartmentNumber"
                    // value={props.apartmentNumber}
                    // onChange={props.handleChange}
                />
            </div>
        </Fragment>
    );
};

export default Address;
