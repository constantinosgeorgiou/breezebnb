import React from "react";
import { Link } from "react-router-dom";

// Step 1: Personal Information
const Step1 = ({ user, currentStep, handleChange }) => {
    if (currentStep !== 1) {
        return null;
    }

    return (
        <div className="mb-5">
            <small className="form-text mb-2">
                <Link to="/signin">Already have an account? Sign in</Link>
            </small>
            <h4 className="mb-4">
                Step 1: <span className="text-muted">Personal Information</span>
            </h4>
            {/* First name */}
            <div className="form-group">
                <label htmlFor="firstNameInput">First name</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstNameInput"
                    placeholder="Jane"
                    aria-describedby="firstNameNote"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                />
                <small id="firstNameNote" className="form-text text-muted">
                    Make sure it matches the name on your goverment ID.
                </small>
            </div>

            {/* Last name */}
            <div className="form-group">
                <label htmlFor="lastNameInput">Last name</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastNameInput"
                    placeholder="Doe"
                    aria-describedby="lastNameNote"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                />
                <small id="lastNameNote" className="form-text text-muted">
                    Make sure it matches the name on your goverment ID.
                </small>
            </div>

            {/* Birthday */}
            <div className="form-group">
                <label htmlFor="birthdayInput">Birthday</label>
                <input
                    type="text"
                    className="form-control"
                    id="birthdayInput"
                    placeholder="01 JANUARY 2000"
                    name="birthday"
                    value={user.birthday}
                    onChange={handleChange}
                />
            </div>

            {/* Phone */}
            <div className="form-group">
                <label htmlFor="phoneInput">Phone</label>
                <input
                    type="phone"
                    className="form-control"
                    id="phoneInput"
                    placeholder="123 456 7891"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Step1;
