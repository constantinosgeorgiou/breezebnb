import React, { Fragment } from "react";

const AddressForm = ({ address, handleChange }) => {
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
                    value={address.country}
                    onChange={handleChange}
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
                    value={address.state}
                    onChange={handleChange}
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
                    value={address.city}
                    onChange={handleChange}
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
                    value={address.zipCode}
                    onChange={handleChange}
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
                    value={address.streetAddress}
                    onChange={handleChange}
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
                    value={address.apartmentNumber}
                    onChange={handleChange}
                />
            </div>
        </Fragment>
    );
};

export default AddressForm;
