import React from 'react'

import { Link } from "react-router-dom";

const SignInForm = ({ userName, password, handleChange, handleSignIn }) => {
    return (
        <form onSubmit={handleSignIn}>
            <div className="form-group">
                <label htmlFor="inputUsername">Username</label>
                <input
                    id="inputUsername"
                    type="text"
                    className="form-control"
                    placeholder="janedoe"
                    required
                    name="userName"
                    value={userName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                    id="exampleInputPassword"
                    type="password"
                    className="form-control"
                    placeholder="password"
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary btn-block mt-5 font-weight-bold"
            >
                SIGN IN
            </button>
            <div className="form-row mt-2">
                <div className="col-auto">
                    <small className="form-text">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </small>
                </div>
                <div className="col text-right">
                    <small className="form-text">
                        <Link to="/signup">Don't have an account? Sign Up</Link>
                    </small>
                </div>
            </div>
        </form>
    );
};

export default SignInForm