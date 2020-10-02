import React from "react";
import { Link } from "react-router-dom";

// Step 3: Account Information
const Step3 = ({ currentStep, user, handleChange }) => {
    if (currentStep !== 3) {
        return null;
    }

    return (
        <div className="mb-5">
            <small className="form-text mb-2">
                <Link to="/signin">Already have an account? Sign in</Link>
            </small>
            <h4 className="mb-4">
                Step 3: <span className="text-muted">Account Information</span>
            </h4>

            {/* Username */}
            <div className="form-group">
                <label htmlFor="usernameInput">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    placeholder="janedoe"
                    name="userName"
                    value={user.userName}
                    onChange={handleChange}
                />
            </div>

            {/* Email */}
            <div className="form-group">
                <label htmlFor="emailInput">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="emailInput"
                    placeholder="jane@doe.com"
                    aria-describedby="emailNote"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <small id="emailNote" className="form-text text-muted">
                    We'll email you trip confirmations and receipts.
                </small>
            </div>

            {/* Password */}
            <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
            </div>

            {/* Confirm password */}
            <div className="form-group">
                <label htmlFor="confirmPasswordInput">Confirm password</label>
                <input
                    type="password"
                    className="form-control"
                    id="confirmPasswordInput"
                    placeholder="Write your password again."
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Step3;
