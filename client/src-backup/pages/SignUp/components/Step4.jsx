import React from "react";
import { Link } from "react-router-dom";

import { BiHomeSmile } from "react-icons/bi";

// Step 4: Hosting
const Step4 = ({ currentStep, user, handleChange }) => {
    if (currentStep !== 4) {
        return null;
    }

    return (
        <div className="mb-5">
            <div className="mb-4 align-middle">
                <small className="form-text mb-2">
                    <Link to="/signin">Already have an account? Sign in</Link>
                </small>
                <span className="h4 align-middle">Step 4: </span>
                <span className="h4 text-muted align-middle">Hosting </span>
                <BiHomeSmile className="text-muted align-middle" size={36} />
            </div>

            {/* Hosting */}
            <div className="form-group">
                <p className="form-text">
                    If you have an extra room, entire home, or expertise, you
                    can earn money by sharing it with anyone in the world. You
                    can host your home, activity, or do both. When you host is
                    up to you.
                </p>

                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInput"
                        type="checkbox"
                        defaultChecked={user.userRole}
                        name="userRole"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInput"
                    >
                        Apply for host
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Step4;
