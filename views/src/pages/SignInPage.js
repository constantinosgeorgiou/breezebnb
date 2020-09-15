import React, { Component } from "react";

import { Link } from "react-router-dom";

import { BiLock } from "react-icons/bi";

import sign_in from "../assets/imgs/sign_in.jpg";

const SignInForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="inputUsername">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputUsername"
                    placeholder="janedoe"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                    type="Password"
                    className="form-control"
                    id="exampleInputPassword"
                    placeholder="password"
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

class SignInPage extends Component {
    render() {
        return (
            <main role="main" className="pt-sm-2">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-lg-8 d-none d-lg-block">
                            <img
                                src={sign_in}
                                className="card-img img-sign-in"
                                alt=""
                            ></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-body">
                                <div className="container-sm">
                                    <div className="text-center my-2">
                                        <BiLock
                                            className="text-danger"
                                            size={60}
                                        />
                                    </div>
                                    <h3 className="card-title mb-4 font-weight-normal text-center">
                                        Please sign in
                                    </h3>
                                    <SignInForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SignInPage;
