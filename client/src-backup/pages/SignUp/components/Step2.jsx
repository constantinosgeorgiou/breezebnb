import React from "react";
import { Link } from "react-router-dom";

// Step 2: Address
const Step2 = ({ currentStep, user, handleChange }) => {
    if (currentStep !== 2) {
        return null;
    }

    return (
        <div className="mb-5">
            <small className="form-text mb-2">
                <Link to="/signin">Already have an account? Sign in</Link>
            </small>
            <h4 className="mb-4">
                Step 2: <span className="text-muted">Address</span>
            </h4>

            {/* Country */}
            <div className="form-group">
                <label htmlFor="inputCountry">Country</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputCountry"
                    placeholder="Greece"
                    name="country"
                    value={user.country}
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
                    value={user.state}
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
                    value={user.city}
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
                    value={user.zipCode}
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
                    value={user.streetAddress}
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
                    value={user.apartmentNumber}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Step2;
